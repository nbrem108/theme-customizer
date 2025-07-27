# Theme Customizer

A powerful, interactive theme customization tool built with Next.js and shadcn/ui. Create, preview, and export custom color themes with real-time feedback and click-to-edit functionality.

## ✨ Features

- 🎨 **30+ Pre-built Themes** - Including natural elements, fantasy worlds, and League of Legends inspired themes
- 🖱️ **Click-to-Edit** - Click any UI element to instantly edit its color
- 👁️ **Real-time Preview** - See changes applied immediately across all components
- 📱 **Mobile Responsive** - Fully optimized for mobile and tablet devices
- 📤 **Export Ready** - Export themes as CSS variables, Tailwind config, or JSON
- 🎯 **Interactive Guide** - Built-in help system and onboarding flow
- ⚡ **Fast & Lightweight** - Built with modern React and Next.js
- 🎨 **Comprehensive UI Preview** - Dashboard with cards, forms, charts, and more
- 🔧 **Developer Friendly** - TypeScript support and clean code architecture

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd theme-customizer
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

### Basic Workflow

1. **Welcome Guide** - Start with the interactive onboarding experience
2. **Choose a Starting Point** - Browse preset themes or start with a custom theme
3. **Interactive Editing** - Click on any UI element to edit its color
4. **Real-time Preview** - See changes applied instantly across all components
5. **Export Theme** - Download your theme configuration for use in projects

### Mobile Usage

- **Hamburger Menu** - Tap the menu icon to open the theme customizer
- **Touch-friendly** - All controls are optimized for touch interaction
- **Responsive Layout** - Adapts perfectly to any screen size

## 🎨 Theme Categories

- **Natural Elements** - Ocean View, Fire Nation, Earth Kingdom, Air Temple
- **Mystical & Fantasy** - Midnight Sorcery, Enchanted Forest, Golden Citadel
- **Cosmic & Sci-Fi** - Cosmic Nebula, Cyber Matrix
- **Seasonal** - Cherry Blossom, Autumn Harvest
- **League of Legends** - 12 region-inspired themes from Runeterra

## 📤 Export Formats

The tool exports themes in multiple formats:

- **CSS Custom Properties** - Ready-to-use CSS variables
- **Tailwind CSS Config** - Complete Tailwind configuration
- **Theme Object** - JSON format for programmatic use
- **Complete Package** - All formats in one export

## 🏗️ Development

### Project Structure

```
theme-customizer/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── theme-provider.tsx # Theme state management
│   ├── theme-customizer.tsx # Sidebar with theme controls
│   ├── dashboard.tsx     # Preview area with UI components
│   ├── interactive-element.tsx # Click-to-edit wrapper
│   └── welcome-guide.tsx # Onboarding component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

### Key Components

- **ThemeProvider** - Manages theme state and CSS variable updates
- **ThemeCustomizer** - Sidebar with theme selection and editing controls
- **Dashboard** - Preview area with interactive components (cards, forms, charts, etc.)
- **InteractiveElement** - Wrapper for click-to-edit functionality
- **WelcomeGuide** - Onboarding flow for new users

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties
- **Icons**: Lucide React
- **State Management**: React hooks with custom context
- **Type Safety**: TypeScript
- **Package Manager**: npm/yarn/pnpm compatible

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Core Features Explained

### Click-to-Edit System
Every UI element in the dashboard is wrapped with an `InteractiveElement` component that allows users to click and edit colors directly. This provides an intuitive way to customize themes without needing to understand color theory or CSS.

### Real-time Preview
The dashboard showcases a comprehensive set of UI components including:
- Cards and data displays
- Forms and input elements
- Navigation and buttons
- Charts and progress indicators
- Avatars and user interfaces

All components update instantly when colors are changed, providing immediate visual feedback.

### Theme Export System
Export your custom themes in multiple formats:
- **CSS Variables**: Ready for immediate use in web projects
- **Tailwind Config**: Complete configuration for Tailwind CSS projects
- **JSON**: Programmatic access for custom implementations
- **Complete Package**: All formats bundled together

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and patterns
- Use TypeScript for all new components
- Ensure mobile responsiveness
- Test theme changes across all components
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Inspired by modern design systems and color theory
- League of Legends themes inspired by Riot Games' Runeterra universe

## 📞 Support

If you encounter any issues or have questions:
- Check the existing issues in the repository
- Create a new issue with detailed information
- Include browser version and device information for mobile issues
