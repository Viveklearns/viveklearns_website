// Vercel Serverless Function to fetch Strava activities
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const ACCESS_TOKEN = process.env.STRAVA_ACCESS_TOKEN;

  if (!ACCESS_TOKEN) {
    return res.status(500).json({ error: 'Strava access token not configured' });
  }

  try {
    // Fetch activities from Strava API
    // Get activities after Jan 1, 2026 (training start date)
    const after = Math.floor(new Date('2026-01-01').getTime() / 1000);

    const response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?after=${after}&per_page=100`,
      {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
      }
    );

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
