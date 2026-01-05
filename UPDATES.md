# Vivek Learns Website - Change Log

## Latest Updates

### Strava Integration (Current PR - Branch: `strava-integration`)
**Date:** January 4, 2026

**Summary:**
Added full Strava integration to automatically populate training tracker with actual run data.

**Changes:**
- ✨ Created Vercel serverless function (`/api/strava-activities.js`) to fetch Strava activities
- 🔄 Added "Sync with Strava" button to training tracker
- 📊 Auto-populates actual distance, pace, and time from Strava runs
- 🔒 Secure credential management using Vercel environment variables
- 🛡️ Added `.gitignore` to protect sensitive files (`.env`, `.vercel`, etc.)

**How It Works:**
1. Click "Sync with Strava" button on tracker page
2. Serverless function fetches all runs from Strava (after Jan 1, 2026)
3. Matches Strava runs to training plan dates
4. Auto-fills: actual distance, actual pace, duration
5. Manual fields remain editable: How I Felt, Achilles Pain, Notes

**Sync Logic:**
- **Multiple runs same day:** Updates first non-rest-day workout
- **No run on planned day:** Row stays empty (can manually fill)
- **Extra Strava run (not in plan):** Ignored - won't create new rows
- **Already synced:** Won't overwrite existing data (preserves manual edits)

**Required Environment Variables (Vercel):**
```
STRAVA_CLIENT_ID=193795
STRAVA_CLIENT_SECRET=89de60a849a29072b176f75720e60b8f499861e1
STRAVA_ACCESS_TOKEN=531234519a533c44a230b06e7d08c656456157db
STRAVA_REFRESH_TOKEN=3bb47fc66f19e7bcdf086b4e118a8985c30a532e
```

**Files Changed:**
- `training-tracker.html` - Added Strava sync functionality
- `api/strava-activities.js` - New serverless function
- `.gitignore` - New file to protect credentials

---

### Training Tracker with Full 9-Week Plan
**Date:** January 4, 2026

**Summary:**
Created online training tracker with all 63 workouts pre-populated.

**Features:**
- Excel-style table format with 63 pre-populated workouts (Jan 5 - Mar 8, 2026)
- Editable cells - click any cell to update
- Columns: Week, Date, Day, Workout Type, Planned Details, Planned Distance/Pace, Actual Distance/Pace, Time, Feeling, Achilles Pain, Notes
- Auto-calculating stats dashboard (Completed Runs, Total Miles, Avg Pace, Days Until Race)
- Color-coded workout badges (blue=easy, yellow=speed, green=long, etc.)
- Rest days grayed out, Race Day highlighted in yellow
- Data persists in browser localStorage

**URL:** `https://viveklearns.com/training-tracker.html`

**Files Created:**
- `training-tracker.html`

**Files Modified:**
- `half-marathon-training.html` - Added link to tracker

---

### Half Marathon Training Plan Page
**Date:** January 4, 2026

**Summary:**
Created comprehensive training plan documentation page.

**Content:**
- Project overview and goals (Sub 2:00:00 target)
- Training principles from "The Running Ground" and Hal Higdon
- Complete 9-week plan breakdown
- Training zones and paces
- Race day strategy
- Calendar file integration (prominent green URL box)
- Links to training tracker and downloadable files

**URL:** `https://viveklearns.com/half-marathon-training.html`

**Files Created:**
- `half-marathon-training.html`

---

### Clickable Homepage Project Card
**Date:** January 4, 2026

**Summary:**
Made the entire half-marathon training project card clickable.

**Changes:**
- Entire card links to `/half-marathon-training.html`
- Simplified card to show only: title, description, goal
- Removed all buttons and call-to-action links from homepage card
- Enhanced hover effect with blue border

**Files Modified:**
- `index.html`
- `style.css`

---

### Website Deployment Setup
**Date:** January 3-4, 2026

**Initial Setup:**
- Created GitHub repository: `viveklearns_website`
- Connected Namecheap domain: `viveklearns.com`
- Deployed to Vercel with automatic CI/CD
- Added custom domain DNS configuration

**Files Created (Initial):**
- `index.html` - Homepage
- `style.css` - Site styling
- `half_marathon_training_FIXED.ics` - Training calendar (63 events)
- `half_marathon_training_tracker_complete.xlsx` - Excel tracker
- `README.md` - Setup documentation
- `QUICK_START_CHECKLIST.md` - Deployment guide

---

## Deployment Information

**Platform:** Vercel
**Domain:** viveklearns.com
**Repository:** https://github.com/Viveklearns/viveklearns_website
**Auto-Deploy:** Enabled (pushes to `main` branch auto-deploy)

**Key URLs:**
- Homepage: https://viveklearns.com
- Training Plan: https://viveklearns.com/half-marathon-training.html
- Training Tracker: https://viveklearns.com/training-tracker.html
- Calendar File: https://viveklearns.com/half_marathon_training_FIXED.ics
- Excel Tracker: https://viveklearns.com/half_marathon_training_tracker_complete.xlsx

---

## Next Steps / Future Enhancements

- [ ] OAuth flow for Strava (currently using permanent access token)
- [ ] Token refresh automation (handle expired access tokens)
- [ ] Export tracker data as CSV/JSON
- [ ] Add more projects to homepage
- [ ] Analytics integration (track page views)
- [ ] Mobile app version
- [ ] Share training progress on social media

---

## Technical Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Hosting:** Vercel (Serverless Functions)
- **Domain:** Namecheap
- **APIs:** Strava API v3
- **Storage:** Browser localStorage (temporary), Strava cloud (permanent)
- **Version Control:** Git + GitHub

---

*Last Updated: January 4, 2026*
