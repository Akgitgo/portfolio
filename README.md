# Modern AI Engineer Portfolio

A stunning, interactive portfolio website built with Next.js 15, featuring futuristic design elements, neon gradients, and smooth animations.

## 🚀 Features

### Design & Animations
- **Neon Gradient Theme** - Electric blue, aqua, and violet color scheme
- **Particle Background** - Animated floating particles with connection lines
- **Glassmorphism Effects** - Frosted glass UI elements with backdrop blur
- **Smooth Animations** - Framer Motion powered transitions and hover effects
- **Typing Animation** - Dynamic text animation in hero section
- **Orbital Tech Badges** - Floating technology badges with circular animation

### Sections
1. **Hero Section** - Split layout with animated tagline and interactive visual
2. **Projects Section** - Filterable project showcase with category tabs
3. **Experience Timeline** - Vertical timeline with role cards and skill tags
4. **Footer** - Social links and navigation

### Technical Features
- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS v4 for styling
- 📱 Fully responsive design (mobile-first)
- 🎭 Framer Motion animations
- 🔤 TypeScript for type safety
- 🎯 SEO optimized with metadata
- ♿ Accessible design with ARIA labels
- 🌙 Dark mode optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins & Inter (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Main page component
│   │   └── globals.css       # Global styles & animations
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation with smooth scroll
│   │   ├── HeroSection.tsx   # Hero with typing animation
│   │   ├── ProjectsSection.tsx   # Project showcase
│   │   ├── ExperienceSection.tsx # Timeline
│   │   ├── Footer.tsx        # Footer with social links
│   │   ├── ParticleBackground.tsx # Canvas particle effect
│   │   └── FloatingTechBadges.tsx # Orbital tech badges
│   └── data/
│       ├── personal.ts       # Personal info & social links
│       ├── projects.ts       # Project data
│       └── experience.ts     # Experience timeline data
└── public/
    └── resume.pdf            # Your resume (add this)
```

## 🎨 Customization

### Update Personal Information
Edit `src/data/personal.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  social: {
    github: "your-github-url",
    linkedin: "your-linkedin-url",
    // ...
  }
};
```

### Add Projects
Edit `src/data/projects.ts` to add your projects with:
- Title, description
- Tech stack
- Category (AI, IoT, Automation, Web, Data)
- GitHub and live demo links

### Update Experience
Edit `src/data/experience.ts` to add your work experience with:
- Role, company, location
- Date range
- Skills and description

## 🎯 Performance

- **First Load JS**: ~166 KB
- **Build Time**: ~5-6 seconds
- **Static Site Generation**: All pages pre-rendered
- **Lighthouse Score**: Optimized for performance

## 🌐 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
```bash
npm run build
# Deploy the .next folder
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Palette

- **Neon Blue**: #00BFFF
- **Neon Aqua**: #3EF5FF
- **Neon Violet**: #9B5CFF
- **Background**: #0a0a14 → #050508

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

**Made with ❤️ and Next.js**
