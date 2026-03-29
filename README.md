# NEON ETHER | Hackathon Landing Page

A modern, futuristic landing page for the NEON ETHER Global Digital Convergence 2024 hackathon, built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with neon purple accents and glass morphism effects
- **Responsive**: Mobile-first responsive design that works on all devices
- **Performance**: Optimized with Next.js for fast loading and smooth interactions
- **Sections**:
  - Navigation with smooth scrolling
  - Hero section with countdown timer (static values)
  - About section with hackathon tracks
  - Timeline with event roadmap
  - Community communication nodes
  - Organizers/Team showcase
  - Sponsors section
  - FAQ with expandable answers
  - Newsletter signup footer

## 📁 Project Structure

```
neon_ether_hackathon_landing_page_1/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── HeroSection.tsx     # Hero section with countdown
│   ├── AboutSection.tsx    # About section with track cards
│   ├── TimelineSection.tsx # Event timeline
│   ├── CommunitySection.tsx # Community communication nodes
│   ├── OrganizersSection.tsx # Team organizers showcase
│   ├── SponsorsSection.tsx # Sponsors grid
│   ├── FAQSection.tsx      # FAQ with expandable items
│   └── Footer.tsx          # Footer with links and newsletter
├── tailwind.config.js      # Tailwind CSS configuration with custom colors
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md              # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 16+ and npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd neon_ether_hackathon_landing_page_1
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette. The custom colors are already configured with the hackathon theme.

### Content
- **Navigation**: Edit `components/Navigation.tsx`
- **Sections**: Each section has its own component in the `components/` folder
- **Text & Images**: Update the content directly in each component file

### Fonts
The project uses:
- **Space Grotesk** - For headlines
- **Inter** - For body text and labels
- **Material Symbols Outlined** - For icons

These are loaded from Google Fonts in `app/layout.tsx`.

## 🚀 Deployment

This project can be deployed on:
- **Vercel** (recommended, by Next.js creators)
- **Netlify**
- **AWS Amplify**
- **Self-hosted** (any Node.js server)

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Components Overview

### Navigation
- Fixed top navigation bar with smooth scrolling links
- Responsive design with mobile menu support
- Register button with gradient

### Hero Section
- Full-height hero with gradient background
- Animated countdown (static values - update for dynamic countdown)
- Call-to-action buttons

### About Section
- Two-column layout
- Track cards with hover effects
- Icon integration with Material Symbols

### Timeline
- Vertical timeline layout
- Alternating left/right event cards
- Gradient line connecting events
- Responsive design for mobile

### Community Section
- Five communication platform cards
- Card hover animations
- Color-coded by platform

### Organizers Section
- Grid layout (changes based on screen size)
- Team member cards with images
- Hover gradient effects
- Social icon placeholder

### Sponsors Section
- Grayscale logos that colorize on hover
- Responsive grid layout

### FAQ Section
- Expandable/collapsible items
- Icon animations
- Color-coded borders

### Footer
- Multi-column layout
- Newsletter signup
- Social icons
- Copyright and status indicator

## 🔧 Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: JavaScript library for UI
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformation tool
- **Autoprefixer**: Automatically add vendor prefixes

## 📄 License

This project is available for the hackathon organizers' use.

## 🤝 Contributing

For any improvements or bug reports, please create an issue or submit a pull request.

---

**Built for NEON ETHER | Global Digital Convergence 2024**
