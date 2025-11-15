/**
 * Application configuration and constants
 */

export const SITE_CONFIG = {
  title: "Rudra Saxena | Full Stack Developer",
  description: "Full-stack developer specializing in modern web technologies and AI integration",
  author: "Rudra Saxena",
  year: new Date().getFullYear(),
};

export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
} as const;

export const CONTACT_INFO = {
  email: "your-email@example.com",
  phone: "+91 XXXXX XXXXX",
  location: "Your City, Country",
} as const;

export const API_CONFIG = {
  gemini: {
    model: "gemini-2.5-flash",
    temperature: 0.7,
    topP: 1,
    topK: 1,
    maxOutputTokens: 256,
  },
} as const;

export const ANIMATION_DELAYS = {
  fast: 100,
  normal: 200,
  slow: 300,
  verySlow: 400,
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;
