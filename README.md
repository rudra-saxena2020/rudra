# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1mP0FdvhxM_y3rcQ-zWJUSdLoZIN7hDeX

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Gemini API key from [https://ai.google.dev/](https://ai.google.dev/)
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. Add your CV file:
   - Place your CV file in the `public/` folder as `Rudra_Saxena_CV.pdf`
   - Create the `public/` folder if it doesn't exist

4. Update your personal information:
   - Edit `components/Hero.tsx` and `components/Footer.tsx` with your social media links
   - Update `components/Contact.tsx` with your actual contact information
   - Customize `components/About.tsx` and `components/FeaturedProjects.tsx` with your portfolio details

5. Run the app:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

6. Build for production:
   ```bash
   npm run build
   ```
