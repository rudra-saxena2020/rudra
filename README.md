<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1mP0FdvhxM_y3rcQ-zWJUSdLoZIN7hDeX

## Run Locally

**Prerequisites:** Node.js (v16+)

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.local.example .env.local

# 3. Add your Gemini API key
# Edit .env.local and add: GEMINI_API_KEY=your_key_here

# 4. Run the app
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 📚 Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup and configuration guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment to production
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development guidelines

---

## 🎨 Quick Customization

1. **Social Links** - Edit `components/Hero.tsx` & `Footer.tsx`
2. **Contact Info** - Edit `components/Contact.tsx`
3. **About Section** - Edit `components/About.tsx`
4. **Projects** - Edit `components/FeaturedProjects.tsx`
5. **CV File** - Add to `public/Rudra_Saxena_CV.pdf`

---

## 🚀 Deploy to Production

See [DEPLOYMENT.md](./DEPLOYMENT.md) for guides on:
- Vercel (Recommended)
- GitHub Pages
- Netlify
- Firebase
- And more!

---

## ⚙️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 🛠️ Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Vite
- Google Generative AI

---

## 📖 Learn More

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)
- [Google Generative AI](https://ai.google.dev/)
