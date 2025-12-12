# DentPulse Website

A modern, accessible, and performant website for DentPulse - transforming dental practice cash flow into wealth.

## Features

- **Modern Stack**: Built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation, ARIA labels, and semantic HTML
- **Performance**: Optimized with lazy loading, code splitting, and static generation
- **Responsive**: Mobile-first design that works on all devices
- **Forms**: Accessible forms with validation using React Hook Form and Zod
- **Video Support**: Accessible video player component supporting YouTube, Vimeo, and hosted videos

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `out` directory, ready for static hosting.

## Project Structure

```
dentpulse-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── [pages]/           # Additional pages
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections
│   └── layout/            # Layout components (Header, Footer)
├── lib/                   # Utilities and validations
└── public/                # Static assets
```

## Key Components

### Navigation
- Accessible hamburger menu for mobile
- Keyboard navigation support
- Active state management
- Smooth scroll for anchor links

### Forms
- Contact form (`/about/contact/`)
- Assessment booking form (home page CTA)
- Login form (`/login/`)
- All forms include validation and accessibility features

### Video Player
- Supports YouTube, Vimeo, and hosted videos
- Keyboard controls
- Accessible with ARIA labels

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation throughout
- Focus visible indicators
- Color contrast ratios (WCAG AA compliant)
- Skip to main content link
- Screen reader announcements

## Performance Optimizations

- Lazy loading for below-the-fold content
- Code splitting with dynamic imports
- Static generation where possible
- Optimized images (when added)
- Minimal JavaScript bundle size

## Deployment

This project is configured for static export and can be deployed to:

- **Vercel**: Automatic deployment with `vercel`
- **Netlify**: Deploy the `out` directory
- **Any static host**: Upload the `out` directory

### Environment Variables

No environment variables are required for basic functionality. Form submissions currently log to console - integrate with your backend API as needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © DentPulse 2025

# DentPWeb
