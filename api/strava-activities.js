// Vercel Serverless Function to fetch Strava activities with automatic token refresh
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let accessToken = process.env.STRAVA_ACCESS_TOKEN;
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN;
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;

  // Debug logging
  console.log('Environment variables check:', {
    hasAccessToken: !!accessToken,
    hasRefreshToken: !!refreshToken,
    hasClientId: !!clientId,
    hasClientSecret: !!clientSecret,
    accessTokenPrefix: accessToken ? accessToken.substring(0, 10) : 'missing'
  });

  if (!accessToken || !refreshToken || !clientId || !clientSecret) {
    return res.status(500).json({
      error: 'Strava credentials not configured',
      missing: {
        accessToken: !accessToken,
        refreshToken: !refreshToken,
        clientId: !clientId,
        clientSecret: !clientSecret
      }
    });
  }

  try {
    // Fetch activities from Strava API
    // Get activities after Jan 1, 2026 (training start date)
    const after = Math.floor(new Date('2026-01-01').getTime() / 1000);

    let response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?after=${after}&per_page=100`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );

    // If 401, token expired - refresh it automatically
    if (response.status === 401) {
      console.log('Token expired, refreshing...');

      const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        })
      });

      if (!tokenResponse.ok) {
        throw new Error('Failed to refresh token');
      }

      const tokenData = await tokenResponse.json();
      accessToken = tokenData.access_token;

      console.log('Token refreshed successfully. NOTE: Update STRAVA_ACCESS_TOKEN in Vercel to:', accessToken);

      // Retry the request with new token
      response = await fetch(
        `https://www.strava.com/api/v3/athlete/activities?after=${after}&per_page=100`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );
    }

    if (!response.ok) {
      throw new Error(`Strava API error: ${response.status}`);
    }

    const activities = await response.json();

    // Filter only running activities and format the data
    const runs = activities
      .filter(activity => activity.type === 'Run')
      .map(activity => ({
        id: activity.id,
        name: activity.name,
        date: activity.start_date.split('T')[0], // YYYY-MM-DD format
        distance: (activity.distance / 1609.34).toFixed(2), // meters to miles
        movingTime: activity.moving_time, // seconds
        pace: calculatePace(activity.distance, activity.moving_time),
        elevationGain: (activity.total_elevation_gain * 3.28084).toFixed(0), // meters to feet
        averageHeartrate: activity.average_heartrate || null,
        maxHeartrate: activity.max_heartrate || null
      }));

    return res.status(200).json({ runs, count: runs.length });

  } catch (error) {
    console.error('Error fetching Strava activities:', error);
    return res.status(500).json({ error: error.message });
  }
}

// Helper function to calculate pace (min/mile)
function calculatePace(distanceMeters, timeSeconds) {
  if (!distanceMeters || !timeSeconds) return null;

  const miles = distanceMeters / 1609.34;
  const paceSeconds = timeSeconds / miles;
  const minutes = Math.floor(paceSeconds / 60);
  const seconds = Math.floor(paceSeconds % 60);

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
