# NEON ETHER Next.js Project Structure

## 📊 Complete File Structure

```
neon_ether_hackathon_landing_page_1/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (head, fonts, metadata)
│   ├── page.tsx                 # Main landing page (combines all sections)
│   ├── globals.css              # Global styles & Tailwind directives
│   └── favicon.ico              # Favicon (auto-generated)
│
├── components/                   # Reusable React Components
│   ├── Navigation.tsx           # Top navigation bar
│   ├── HeroSection.tsx          # Hero with countdown & CTA buttons
│   ├── AboutSection.tsx         # About section with track cards
│   ├── TimelineSection.tsx      # Event timeline (alternating layout)
│   ├── CommunitySection.tsx     # 5 communication platform cards
│   ├── OrganizersSection.tsx    # Team organizers grid with images
│   ├── SponsorsSection.tsx      # Sponsors logos grid
│   ├── FAQSection.tsx           # Expandable FAQ items (client component)
│   └── Footer.tsx               # Footer with links & newsletter
│
├── public/                       # Static assets (images, fonts, etc)
│   └── (images will be served from external URLs)
│
├── .next/                        # Build output (auto-generated)
├── node_modules/                # Dependencies (auto-generated)
│
├── Configuration Files:
│   ├── package.json             # Project dependencies & scripts
│   ├── tsconfig.json            # TypeScript configuration
│   ├── tailwind.config.js       # Tailwind CSS theme & colors
│   ├── postcss.config.js        # PostCSS plugins (Tailwind, Autoprefixer)
│   ├── next.config.js           # Next.js configuration
│   ├── .eslintrc.json           # ESLint rules
│   ├── .gitignore               # Git ignore rules
│   └── .nvmrc                   # Node version specification
│
└── Documentation:
    ├── README.md                # Project overview & setup guide
    └── PROJECT_STRUCTURE.md     # This file
```

## 🧩 Component Hierarchy

```
page.tsx
├── Navigation
├── HeroSection
│   ├── Countdown Grid (4 items)
│   └── CTA Buttons (2)
├── AboutSection
│   ├── Left Column (Text + Icon Box)
│   └── Right Column (4 Track Cards)
│       ├── Decentralized Void
│       ├── Neural Synthesis
│       ├── Extended Reality
│       └── Void Security
├── TimelineSection
│   └── Timeline Events (4)
│       ├── Registration Starts
│       ├── Opening Ceremony
│       ├── Workshop Marathon
│       └── Final Submission
├── CommunitySection
│   └── Platform Cards (5)
│       ├── Discord
│       ├── WhatsApp
│       ├── Telegram
│       ├── LinkedIn
│       └── Twitter / X
├── OrganizersSection
│   └── Organizer Cards (4)
│       ├── Alex Volkov
│       ├── Elena Chen
│       ├── Marcus Thorne
│       └── Sasha Gray
├── SponsorsSection
│   └── Sponsor Logos (6)
├── FAQSection
│   └── FAQ Items (4) - Expandable
│       ├── Who can join?
│       ├── Registration fee?
│       ├── Prizes available?
│       └── Onsite required?
└── Footer
    ├── Brand Section
    ├── Resources Links
    ├── Navigation Links
    └── Newsletter Signup
```

## 🎨 Styling System

### Tailwind CSS Custom Colors
```
Primary Colors:
  - primary: #cc97ff (main purple)
  - primary-dim: #9c48ea
  - primary-fixed: #c284ff
  - primary-fixed-dim: #b971ff

Secondary Colors:
  - secondary: #9492ff
  - secondary-container: #3323cc
  - secondary-fixed: #cfcdff
  - secondary-fixed-dim: #c0bdff
  - secondary-dim: #645efb

Tertiary Colors:
  - tertiary: #8ce7ff (cyan)
  - tertiary-container: #53ddfc
  - tertiary-fixed: #53ddfc
  - tertiary-fixed-dim: #40ceed
  - tertiary-dim: #40ceed

Error Color:
  - error: #ff6e84 (red)
  - error-container: #a70138
  - error-dim: #d73357

Surface Colors:
  - background: #0e0e10 (dark black)
  - surface: #0e0e10
  - surface-dim: #0e0e10
  - surface-bright: #2c2c2f
  - surface-container-lowest: #000000
  - surface-container-low: #131315
  - surface-container: #19191c
  - surface-container-high: #1f1f22
  - surface-container-highest: #262528
```

### Custom CSS Classes
```css
.glass-card          /* Glass morphism effect */
.glow-text          /* Text shadow glow effect */
.hero-gradient      /* Radial gradient background */
```

### Font Families
```
space-grotesk: Headlines & navigation text
inter:         Body text & labels
material-symbols-outlined: Icons
```

## 📦 Dependencies

### Production Dependencies
- **next**: 14.0.0+ (React framework)
- **react**: 18.2.0+ (UI library)
- **react-dom**: 18.2.0+ (React DOM)

### Development Dependencies
- **tailwindcss**: 3.3.0+ (CSS framework)
- **postcss**: 8.4.0+ (CSS processor)
- **autoprefixer**: 10.4.0+ (CSS vendor prefixes)

## 🚀 Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🔄 Data Flow

All components are functional React components that:
1. Accept no props (except FAQSection which manages local state)
2. Return JSX with Tailwind CSS classes
3. Use Material Icons for icons
4. Use external image URLs (via Google AI/Imaging services)

## 🎯 Key Features Implemented

✅ Responsive design (mobile, tablet, desktop)
✅ Dark theme with neon accents
✅ Glass morphism effects
✅ Gradient backgrounds
✅ Interactive hover states
✅ Material Design Icons
✅ Expandable FAQ items
✅ Smooth transitions & animations
✅ Optimized images (external CDN)
✅ Accessible semantic HTML
✅ TypeScript support
✅ Fast performance with Next.js

## 📝 Notes

- Images are loaded from external Google AI/Imaging URLs
- Countdown timer displays static values (update with React hooks for live countdown)
- FAQ items expand/collapse with React state management
- All links are placeholders (update with actual URLs)
- Newsletter signup form is not connected to backend (add your email service)

## 🔧 Next Steps

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Customize content as needed
4. Update image URLs if desired
5. Connect forms to backend services
6. Deploy to Vercel or your hosting provider
