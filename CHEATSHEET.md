# Quick Reference & Cheat Sheet

Fast lookup for common tasks and customizations.

## 🎯 Most Important Tasks

### I want to customize the portfolio - where do I start?
→ Read [SETUP.md](./SETUP.md)

### I want to deploy it online
→ Read [DEPLOYMENT.md](./DEPLOYMENT.md)

### I want to add features/modify code
→ Read [DEVELOPMENT.md](./DEVELOPMENT.md)

### I need a full summary of changes
→ Read [IMPROVEMENTS.md](./IMPROVEMENTS.md)

---

## ⚡ Common Customizations

### Change Social Media Links
**File:** `components/Hero.tsx` & `components/Footer.tsx`

Find and replace:
```tsx
<SocialIcon href="https://github.com/yourusername">
```

---

### Update Contact Information
**File:** `components/Contact.tsx`

Find:
```tsx
<ContactInfoCard icon={<Mail />} title="Email" content="your-email@example.com" />
```

---

### Add Your CV
1. Convert to PDF if needed
2. Place in `public/` folder
3. Name it `Rudra_Saxena_CV.pdf`
4. Or update the filename in `Hero.tsx`

---

### Update Projects
**File:** `components/FeaturedProjects.tsx`

Update the `projects` array:
```tsx
const projects = [
  {
    category: "WEB APP",
    title: "Your Project",
    description: "What it does",
    tags: ["React", "Node.js"],
    imageUrl: "https://your-image-url.jpg",
    projectUrl: "https://github.com/yourname/project"
  },
  // ... more projects
];
```

---

### Customize About Section
**File:** `components/About.tsx`

Change:
- Developer name/info in code snippet
- Skills list
- Statistics (projects, clients, experience)
- Bio text

---

### Update Services
**File:** `components/Services.tsx`

Modify the `services` array to match your offerings

---

## 🔧 Development Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install packages
npm install package-name

# Remove packages
npm uninstall package-name
```

---

## 🌐 Environment Setup

### Add Gemini API Key
1. Visit https://ai.google.dev/
2. Click "Get API Key"
3. Create new API key
4. Add to `.env.local`:
```
GEMINI_API_KEY=your_key_here
```

### Verify Setup
- Dev server should start: `npm run dev`
- Open http://localhost:3000
- AI button should work in contact form

---

## 📂 File Organization

```
components/     → React UI components
services/       → API integrations (Gemini)
hooks/          → Custom React hooks
config/         → Constants & configuration
public/         → Static files (CV, images)
```

---

## 🎨 Styling Quick Tips

### Tailwind Classes
- Colors: `text-cyan-400`, `bg-gray-900`
- Spacing: `p-6`, `mb-4`, `space-x-5`
- Responsive: `md:`, `lg:`, `sm:`
- Hover: `hover:text-cyan-400`
- Shadows: `shadow-lg`, `shadow-purple-900/20`

### Glass Morphism
```tsx
className="bg-white/5 backdrop-blur-sm"
```

### Gradients
```tsx
className="bg-gradient-to-r from-purple-600 to-pink-600"
```

---

## 🚀 Deployment Quick Steps

### Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Add `GEMINI_API_KEY` env var
5. Deploy!

### GitHub Pages
1. Run `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in Settings
4. Done!

### Netlify
1. Connect GitHub repo
2. Set build: `npm run build`
3. Set publish: `dist`
4. Add env vars
5. Deploy!

---

## 🐛 Troubleshooting

### "AI is unavailable" error
- Check `.env.local` exists
- Verify `GEMINI_API_KEY` is set
- Restart dev server
- Check key at https://ai.google.dev/

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Node modules issues
```bash
rm -r node_modules
npm install
```

### Build fails
```bash
npm run build -- --debug
```

---

## 📱 Responsive Breakpoints

```
Mobile:     < 640px
Tablet:     640px - 1024px
Desktop:    1024px - 1280px
Wide:       > 1280px
```

Use: `md:`, `lg:`, `sm:` in Tailwind classes

---

## ⌨️ Keyboard Shortcuts (VS Code)

```
Ctrl + Shift + P     Open command palette
Ctrl + Shift + F     Find in files
Ctrl + /             Comment/uncomment
Alt + Up/Down        Move line
Shift + Alt + D      Toggle preview
```

---

## 📖 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Project overview |
| SETUP.md | Installation & setup |
| DEPLOYMENT.md | Deployment guides |
| DEVELOPMENT.md | Development guidelines |
| IMPROVEMENTS.md | Changes summary |
| CHEATSHEET.md | This file |

---

## 🎯 Launch Checklist

Before deploying:

- [ ] Updated all social links
- [ ] Added contact information
- [ ] Created CV file
- [ ] Updated projects
- [ ] Customized about section
- [ ] Added GEMINI_API_KEY
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)
- [ ] Verified AI features work
- [ ] Checked mobile responsiveness

---

## 💡 Pro Tips

1. **Development**: Use `npm run dev` with live reload
2. **Performance**: Use `npm run preview` to test production build
3. **Customization**: Start with `SETUP.md` for guidance
4. **Deployment**: Choose Vercel for easiest setup
5. **API Key**: Keep it secret, never commit `.env.local`
6. **Images**: Optimize with https://tinypng.com
7. **Colors**: Use existing palette in Tailwind
8. **Fonts**: Already configured with Inter font

---

## 🚀 Quick Deploy

```bash
# 1. Make changes
npm run dev

# 2. Test build
npm run build && npm run preview

# 3. Commit
git add .
git commit -m "feat: my changes"

# 4. Push
git push origin main

# 5. Vercel deploys automatically!
```

---

## 📞 Support Resources

- **React**: https://react.dev/
- **Tailwind**: https://tailwindcss.com/
- **Vite**: https://vitejs.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **Google Generative AI**: https://ai.google.dev/docs

---

## 🎉 You're All Set!

Your portfolio is ready to customize and deploy. Start with:

1. **SETUP.md** → Get it running
2. **Customize** → Add your info
3. **DEPLOYMENT.md** → Go live!

Happy coding! 🚀
