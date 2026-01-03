# Vivek Learns Website - Vercel Setup Guide

This is your personal website for viveklearns.com, hosted on Vercel.

## What's Included

- **index.html** - Your homepage
- **style.css** - Styling for the site
- **half_marathon_training_FIXED.ics** - Calendar file for your half marathon training
- **half_marathon_training_tracker_complete.xlsx** - Excel tracker for your training

## Step-by-Step Setup Instructions

### Part 1: Prepare Your GitHub Account (5 minutes)

1. **Go to GitHub.com**
   - If you don't have an account, create one (it's free)
   - If you have one, just log in

2. **Create a New Repository**
   - Click the "+" in top right → "New repository"
   - Repository name: `viveklearns-website` (or any name you want)
   - Make it **Public** (required for free Vercel)
   - **Do NOT** check "Add a README file"
   - Click "Create repository"

3. **Upload Your Files to GitHub**
   
   **Option A: Using GitHub Web Interface (Easiest)**
   - On your new repo page, click "uploading an existing file"
   - Drag and drop ALL 4 files:
     - index.html
     - style.css
     - half_marathon_training_FIXED.ics
     - half_marathon_training_tracker_complete.xlsx
   - Add commit message: "Initial website setup"
   - Click "Commit changes"

   **Option B: Using Git Command Line** (if you're comfortable with git)
   ```bash
   cd viveklearns-website
   git init
   git add .
   git commit -m "Initial website setup"
   git remote add origin https://github.com/YOUR_USERNAME/viveklearns-website.git
   git push -u origin main
   ```

---

### Part 2: Deploy to Vercel (5 minutes)

1. **Go to Vercel.com**
   - Click "Sign Up" (top right)
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Your Project**
   - You'll see a dashboard
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find `viveklearns-website` and click "Import"

3. **Configure Project**
   - Project Name: `viveklearns-website` (or keep default)
   - Framework Preset: Leave as "Other" (it's just HTML)
   - Root Directory: `./` (leave as default)
   - Build and Output Settings: Leave everything blank/default
   - Click "Deploy"

4. **Wait for Deployment** (30 seconds)
   - Vercel will build and deploy your site
   - You'll see a success screen with confetti! 🎉
   - Your site is now live at: `https://viveklearns-website.vercel.app` (or similar)

5. **Test Your Site**
   - Click "Visit" to see your website
   - Your calendar file will be accessible at:
     `https://viveklearns-website.vercel.app/half_marathon_training_FIXED.ics`

---

### Part 3: Connect Your Namecheap Domain (10 minutes)

Now let's connect viveklearns.com to your Vercel site!

#### Step 3A: Add Domain in Vercel

1. **In Vercel Dashboard**
   - Go to your project (`viveklearns-website`)
   - Click "Settings" tab
   - Click "Domains" in the left sidebar
   - Click "Add"
   - Type: `viveklearns.com`
   - Click "Add"

2. **Vercel will show you DNS records to add**
   - You'll see something like:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Keep this tab open!

#### Step 3B: Update DNS in Namecheap

1. **Log into Namecheap**
   - Go to namecheap.com and log in
   - Go to "Domain List"
   - Click "Manage" next to viveklearns.com

2. **Go to Advanced DNS Settings**
   - Click the "Advanced DNS" tab
   - You'll see existing DNS records

3. **Update DNS Records**
   
   **Delete old records first:**
   - Remove any existing A records
   - Remove any existing CNAME records for @ or www

   **Add new records from Vercel:**
   
   Click "Add New Record"
   - Type: `A Record`
   - Host: `@`
   - Value: `76.76.21.21` (the IP Vercel gave you)
   - TTL: Automatic
   - Click the checkmark ✓

   Click "Add New Record" again
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `cname.vercel-dns.com` (the value Vercel gave you)
   - TTL: Automatic
   - Click the checkmark ✓

4. **Save Changes**
   - Click "Save All Changes" at the top

#### Step 3C: Verify in Vercel

1. **Back in Vercel**
   - Go to Settings → Domains
   - Wait 30-60 seconds
   - Click "Refresh" if needed
   - You should see checkmarks ✓ next to your domain

2. **DNS Propagation**
   - It can take 5 minutes to 48 hours (usually ~30 min)
   - Check by visiting: `https://viveklearns.com`
   - If it doesn't work immediately, be patient!

---

## Your Website URLs

Once DNS propagates, your calendar will be accessible at:

**Calendar File:**
```
https://viveklearns.com/half_marathon_training_FIXED.ics
```

**Tracker File:**
```
https://viveklearns.com/half_marathon_training_tracker_complete.xlsx
```

**To Import Calendar to Google Calendar:**
1. Go to Google Calendar
2. Click "+" next to "Other calendars"
3. Select "From URL"
4. Paste: `https://viveklearns.com/half_marathon_training_FIXED.ics`
5. Click "Add calendar"

---

## Updating Your Website in the Future

Whenever you want to add new projects or update content:

1. **Edit files locally** or on GitHub
2. **Commit and push to GitHub**
   - GitHub web: Edit file → Commit changes
   - Git command line: `git add . && git commit -m "Update" && git push`
3. **Vercel auto-deploys!** (within 30 seconds)

No need to do anything in Vercel - it automatically deploys when you push to GitHub!

---

## Troubleshooting

**Website not loading?**
- Check DNS propagation: https://dnschecker.org (search for viveklearns.com)
- Wait 30 minutes and try again
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Calendar file not downloading?**
- Make sure the .ics file is in your GitHub repo
- Check the URL directly in browser
- Vercel should serve all files in your repo automatically

**Need to update domain settings?**
- Vercel: Settings → Domains
- Namecheap: Domain List → Manage → Advanced DNS

---

## Next Steps

Your website is live! Here are ideas for what to add next:

- Add more projects to the "Projects" section
- Create an "About" page with your background
- Add a blog section
- Link to your GitHub, LinkedIn, etc.
- Add Google Analytics (Vercel makes this easy)

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Namecheap DNS Help:** https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/

Good luck! 🚀
