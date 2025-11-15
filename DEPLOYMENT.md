# Deployment Guide

Complete guide for deploying your portfolio to production.

## Pre-Deployment Checklist

Before deploying, make sure you've completed:

- [ ] Updated all social media links (yourusername → your actual usernames)
- [ ] Added actual contact information
- [ ] Added your CV to `public/Rudra_Saxena_CV.pdf`
- [ ] Customized About, Projects, and Services sections
- [ ] Added `GEMINI_API_KEY` to environment variables
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Previewed build with `npm run preview`

## Deployment Platforms

### 1. Vercel (Recommended)

**Vercel is the recommended choice for Vite projects.**

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `GEMINI_API_KEY=your_api_key`
   - Click "Save"

4. **Deploy**
   - Vercel will automatically deploy on push
   - Your site is live at `your-project.vercel.app`

#### Optional: Custom Domain
- Go to Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### 2. GitHub Pages

#### For User/Organization Pages

1. **Update `vite.config.ts`:**
   ```ts
   export default defineConfig({
     base: '/',
     // ... rest of config
   });
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Push to GitHub**
   ```bash
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select "main" branch and `/root` folder
   - Click "Save"

Your site will be available at `https://yourusername.github.io/`

---

### 3. Netlify

#### Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy site"

3. **Configure Environment Variables**
   - Go to Site settings → Build & deploy → Environment
   - Add `GEMINI_API_KEY`
   - Trigger a new deploy

4. **Set Custom Domain**
   - Go to Domain settings
   - Add your custom domain
   - Update DNS records

---

### 4. Firebase Hosting

#### Steps:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure for Vite:**
   - Public directory: `dist`
   - Single-page app: `Yes`

4. **Build and Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

5. **Add Environment Variables**
   - In Firebase console, go to Project Settings
   - Add `GEMINI_API_KEY` to configuration

---

### 5. Heroku

#### Steps:

1. **Create `Procfile`:**
   ```
   web: npm run build && npm run preview
   ```

2. **Deploy:**
   ```bash
   heroku login
   heroku create your-app-name
   git push heroku main
   ```

3. **Set Environment Variables:**
   ```bash
   heroku config:set GEMINI_API_KEY=your_api_key
   ```

---

## Custom Domain Setup

### For Vercel/Netlify/Firebase:

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Update nameservers or add CNAME records as instructed by your hosting provider
4. Wait 24-48 hours for DNS propagation

### Common DNS Records:

**A Record:** Points to hosting provider's IP
- Name: `@`
- Value: Provider's IP address

**CNAME Record:** Points to hosting subdomain
- Name: `www`
- Value: Your hosting provider's domain

---

## Post-Deployment

### 1. SSL/HTTPS
- All major platforms auto-enable SSL
- Verify HTTPS is enabled in your platform's settings

### 2. Performance Optimization
- Check performance at [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor Core Web Vitals
- Optimize images if needed

### 3. SEO
Update `index.html` with proper meta tags:

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="developer, full-stack, react, nodejs">
<meta name="author" content="Your Name">
<meta name="og:title" content="Your Portfolio">
<meta name="og:description" content="Your portfolio description">
```

### 4. Analytics
Add Google Analytics:

```html
<!-- In index.html head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## Continuous Deployment (CD)

All platforms support automatic deployment on push:

1. Connect repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Every push to `main` automatically deploys

---

## Troubleshooting

### Build Fails on Platform
- Check platform's build logs
- Ensure all environment variables are set
- Try building locally first: `npm run build`

### API Key Not Working in Production
- Verify `GEMINI_API_KEY` is set in platform's environment variables
- Check if API key is valid for production use
- Clear platform's cache and redeploy

### Site Loads But Features Don't Work
- Check browser console for errors
- Verify environment variables are loaded
- Check API requests in Network tab

### Domain Not Connecting
- Wait for DNS propagation (can take 24-48 hours)
- Verify DNS records at [DNS Checker](https://dnschecker.org/)
- Contact your hosting provider's support

---

## Monitoring

After deployment, monitor:

- **Uptime:** [UptimeRobot](https://uptimerobot.com/)
- **Performance:** [Vercel Analytics](https://vercel.com/analytics) or [PageSpeed Insights](https://pagespeed.web.dev/)
- **Errors:** [Sentry](https://sentry.io/) for error tracking
- **Analytics:** Google Analytics for user behavior

---

## Rollback

If something goes wrong:

**Vercel:** Automatic rollback to last successful deploy
**GitHub Pages:** Revert to previous commit and push
**Netlify:** Deploy previews before merge
**Firebase:** Rollback through console

---

## Need Help?

- Check platform's documentation
- Visit community forums
- Contact platform's support team
- Check GitHub Issues in your repo
