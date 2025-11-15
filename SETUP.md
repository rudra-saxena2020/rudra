# Setup & Configuration Guide

A complete guide to configure your portfolio and get it running locally.

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- A text editor (VS Code recommended)

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

#### Create `.env.local` file

In the root directory, create a `.env.local` file:

```bash
# Copy from template
cp .env.local.example .env.local
```

#### Add your Gemini API Key

1. Visit [Google AI Studio](https://ai.google.dev/)
2. Click "Get API Key"
3. Create a new API key
4. Copy the key and paste it into `.env.local`:

```env
GEMINI_API_KEY=your_api_key_here
```

**Note:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## Personalization

### 1. Update Social Links

**File:** `components/Hero.tsx` and `components/Footer.tsx`

Replace `yourusername` with your actual usernames:

```tsx
// Before
<SocialIcon href="https://github.com/yourusername">

// After
<SocialIcon href="https://github.com/yourgithubusername">
```

Supported platforms:
- GitHub
- LinkedIn
- Twitter/X
- Instagram

### 2. Update Contact Information

**File:** `components/Contact.tsx`

Replace placeholder contact info:

```tsx
<ContactInfoCard icon={<Mail />} title="Email" content="your-actual-email@example.com" />
<ContactInfoCard icon={<Phone />} title="Phone" content="+1 XXX-XXX-XXXX" />
<ContactInfoCard icon={<MapPin />} title="Location" content="Your City, Country" />
```

### 3. Add Your CV

1. Create a `public/` folder if it doesn't exist
2. Add your CV file as `public/Rudra_Saxena_CV.pdf`
3. Update the filename in `Hero.tsx` if needed:

```tsx
<a href="/Rudra_Saxena_CV.pdf" download="Your_Name_CV.pdf">
  Download CV
</a>
```

### 4. Customize About Section

**File:** `components/About.tsx`

- Update the code snippet with your name and interests
- Modify the skills list
- Update statistics (projects, clients, years of experience)

### 5. Add Your Projects

**File:** `components/FeaturedProjects.tsx`

Update the `projects` array with your actual projects:

```tsx
const projects = [
  {
    category: "WEB APP",
    title: "Your Project Title",
    description: "Brief description of your project",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: "https://your-image-url.com/project.jpg",
    projectUrl: "https://github.com/yourusername/project-repo"
  },
  // ... more projects
];
```

### 6. Update Services

**File:** `components/Services.tsx`

Customize the services list to match your expertise.

## Running the Project

### Development Mode

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
rudra/
├── components/           # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── FeaturedProjects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ...
├── services/            # Backend services
│   └── geminiService.ts # AI integration
├── public/              # Static assets
│   └── Rudra_Saxena_CV.pdf
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript config
├── package.json         # Dependencies
└── .env.local           # Environment variables (git-ignored)
```

## Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name
2. Run `npm run build`
3. Push the `dist/` folder to GitHub Pages

### Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add `GEMINI_API_KEY` environment variable
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Set environment variables
4. Deploy!

## Troubleshooting

### "AI functionality is currently unavailable"

- Check that `GEMINI_API_KEY` is set in `.env.local`
- Verify the API key is valid at [Google AI Studio](https://ai.google.dev/)
- Restart the dev server after adding the key

### Module not found errors

```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
```

### Port 3000 already in use

The dev server will automatically try the next available port, or specify a different port:

```bash
npm run dev -- --port 3001
```

## Support

For issues or questions:
- Check the [Vite docs](https://vitejs.dev/)
- Review [React documentation](https://react.dev/)
- Check [Google Generative AI docs](https://ai.google.dev/docs)

## License

This project is open source and available under the MIT License.
