# OM Marketing Solutions Website
ssss
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive website for OM Marketing Solutions - empowering Indian businesses with practical digital solutions for growth and success.

## 🌟 Features

- **AI Chatbot**: Integrated AI chatbot for instant customer support and engagement
- **Modern UI/UX**: Stunning constellation background, smooth animations, and glow effects
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Fast Performance**: Built with Next.js 15 App Router for optimal loading speeds
- **SEO Optimized**: Server-side rendering and proper meta tags for search engines
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Type-Safe**: Full TypeScript implementation for robust development
- **Component Library**: Reusable UI components built with shadcn/ui
- **Dark Mode Ready**: Theme-aware color system

### Key Sections

- 🏠 **Homepage**: Hero section with constellation background and core services
- 💼 **Services**: Web Development, Inventory Management, WhatsApp Automation, Digital Marketing
- 📊 **Portfolio**: Showcase of completed projects and case studies
- 👥 **About Us**: Company mission, vision, values, and team information
- 📬 **Contact**: Comprehensive contact form and information cards
- 🎯 **Process**: Clear workflow visualization for client engagement

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.18.0 or higher
- **npm**: 9.0.0 or higher (or yarn/pnpm)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/om-marketing-solutions.git
   cd om-marketing-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if any)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 📁 Project Structure

```
om-marketing-solutions/
├── public/                  # Static assets
│   ├── logomkc.jpeg        # Company logo
│   ├── randi.jpeg          # Why Choose Us image
│   └── favicon.ico         # Site favicon
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about-us/       # About Us page
│   │   ├── contact-us/     # Contact page
│   │   ├── layout.tsx      # Root layout with header/footer
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles and animations
│   ├── components/         # Reusable components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── layout/         # Header, Footer components
│   │   ├── logo.tsx        # Logo component
│   │   └── constellation-background.tsx  # Animated background
│   └── lib/                # Utility functions and constants
│       ├── constants.ts    # App constants and data
│       ├── utils.ts        # Helper functions
│       └── placeholder-images.ts  # Image placeholders
├── .gitignore              # Git ignore rules
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies
├── README.md               # This file
├── LICENSE                 # MIT License
└── SECURITY.md             # Security policy

```

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 15](https://nextjs.org/)**: React framework with App Router
- **[React 19](https://reactjs.org/)**: UI library
- **[TypeScript 5](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Tailwind CSS 3](https://tailwindcss.com/)**: Utility-first CSS framework

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)**: Beautifully designed component library
- **[Radix UI](https://www.radix-ui.com/)**: Headless UI primitives
- **[Lucide React](https://lucide.dev/)**: Icon library
- **[class-variance-authority](https://cva.style/)**: Component variant management

### Form Handling
- **[React Hook Form](https://react-hook-form.com/)**: Performant form validation
- **[Zod](https://zod.dev/)**: TypeScript-first schema validation

### Development Tools
- **[ESLint](https://eslint.org/)**: Code linting
- **[Prettier](https://prettier.io/)**: Code formatting (recommended)

## 🎨 Customization

### Updating Brand Assets

1. **Logo**: Replace `public/logomkc.jpeg` with your logo
2. **Images**: Add images to `public/` folder
3. **Favicon**: Replace `public/favicon.ico`

### Modifying Content

- **Services**: Edit `src/lib/constants.ts` → `SERVICES` array
- **Portfolio**: Edit `src/lib/constants.ts` → `PORTFOLIO_PROJECTS` array
- **Testimonials**: Edit `src/lib/constants.ts` → `TESTIMONIALS` array
- **Contact Info**: Update in `src/app/page.tsx` and `src/app/contact-us/page.tsx`

### Styling

- **Colors**: Edit `tailwind.config.ts` theme colors
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Animations**: Modify keyframes in `src/app/globals.css`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

- **Netlify**: `npm run build` → Deploy `out/` folder
- **AWS Amplify**: Connect GitHub repo
- **Railway**: Connect GitHub repo
- **Self-hosted**: `npm run build && npm run start`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO, Best Practices)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with code splitting

## 🔒 Security

Please see [SECURITY.md](SECURITY.md) for security policies and reporting vulnerabilities.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **OM Marketing Solutions** - [Website](https://www.ommarketing.co.in/)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) for beautiful icons

## 📞 Support

For support, email contact@ommarketing.com or visit our website.

## 🗺️ Roadmap

- [ ] Blog section with MDX support
- [ ] Multi-language support (Hindi, English)
- [ ] Client portal for project tracking
- [ ] Live chat integration
- [ ] Advanced SEO with structured data
- [ ] Progressive Web App (PWA) features

---

**Made with ❤️ by OM Marketing Solutions**
