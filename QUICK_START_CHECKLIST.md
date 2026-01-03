# QUICK START CHECKLIST - Set Up viveklearns.com

Follow these steps in order. Check off each one as you complete it!

## BEFORE YOU START
□ Download the viveklearns-website.zip file
□ Extract/unzip it to your computer
□ Have your Namecheap login ready

---

## PART 1: GITHUB (5 minutes)

□ Go to github.com
□ Log in (or create free account if needed)
□ Click "+" (top right) → "New repository"
□ Name it: viveklearns-website
□ Make it PUBLIC
□ Do NOT check "Add a README file"
□ Click "Create repository"

□ On the new repo page, click "uploading an existing file"
□ Drag all 5 files from the extracted folder:
   - index.html
   - style.css
   - half_marathon_training_FIXED.ics
   - half_marathon_training_tracker_complete.xlsx
   - .gitignore
□ Click "Commit changes"

✓ GitHub setup complete!

---

## PART 2: VERCEL (5 minutes)

□ Go to vercel.com
□ Click "Sign Up"
□ Choose "Continue with GitHub"
□ Authorize Vercel to access GitHub

□ Click "Add New..." → "Project"
□ Find "viveklearns-website" in the list
□ Click "Import"
□ Leave all settings as default
□ Click "Deploy"

□ Wait ~30 seconds for deployment
□ See the success screen with confetti 🎉
□ Click "Visit" to see your live site

□ Copy your temporary URL (looks like: viveklearns-website-abc123.vercel.app)

✓ Vercel setup complete!

---

## PART 3: CONNECT YOUR DOMAIN (10 minutes)

### In Vercel:
□ Go to your project dashboard
□ Click "Settings" tab
□ Click "Domains" (left sidebar)
□ Click "Add"
□ Type: viveklearns.com
□ Click "Add"

□ Vercel shows you DNS records - KEEP THIS TAB OPEN!
□ Write down or screenshot these values:
   A Record: @ → (IP address like 76.76.21.21)
   CNAME: www → (like cname.vercel-dns.com)

### In Namecheap:
□ Go to namecheap.com and log in
□ Click "Domain List"
□ Click "Manage" next to viveklearns.com
□ Click "Advanced DNS" tab

□ DELETE old records:
   - Remove existing A records
   - Remove existing CNAME records

□ ADD NEW RECORD:
   - Type: A Record
   - Host: @
   - Value: [paste the IP from Vercel]
   - Click checkmark ✓

□ ADD NEW RECORD:
   - Type: CNAME Record
   - Host: www
   - Value: [paste the CNAME from Vercel]
   - Click checkmark ✓

□ Click "Save All Changes"

### Back in Vercel:
□ Wait 30-60 seconds
□ Click "Refresh" in the Domains section
□ See checkmarks ✓ appear

□ Test: Visit https://viveklearns.com
   (If it doesn't work, wait 30 minutes for DNS to propagate)

✓ Domain connected!

---

## PART 4: IMPORT CALENDAR TO GOOGLE (2 minutes)

□ Go to calendar.google.com
□ Click "+" next to "Other calendars"
□ Select "From URL"
□ Paste: https://viveklearns.com/half_marathon_training_FIXED.ics
□ Click "Add calendar"

□ Wait a few seconds
□ Check your calendar - you should see all 63 training events!

✓ Calendar imported!

---

## YOU'RE DONE! 🎉

Your website is live at: https://viveklearns.com

Your calendar URL: https://viveklearns.com/half_marathon_training_FIXED.ics
Your tracker URL: https://viveklearns.com/half_marathon_training_tracker_complete.xlsx

---

## TROUBLESHOOTING

Website not loading?
→ Wait 30 minutes (DNS takes time to propagate)
→ Try clearing browser cache (Ctrl+Shift+R)
→ Check https://dnschecker.org

Calendar not importing?
→ Try downloading the file first, then import manually
→ Make sure you're using the full URL with https://

Need help?
→ Check README.md in your website folder
→ Vercel docs: vercel.com/docs
→ Namecheap support: namecheap.com/support

---

## FUTURE UPDATES

To update your website:
1. Edit files on GitHub (or locally and push)
2. Vercel auto-deploys within 30 seconds
3. That's it!

To add new projects:
1. Edit index.html
2. Add new project-card divs
3. Upload any new files to GitHub
4. Vercel deploys automatically
