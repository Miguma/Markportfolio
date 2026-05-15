# Mark Portfolio - Modern IDE-Inspired Developer Portfolio

A stunning, modern portfolio website designed to feel like a real developer IDE/workspace inspired by VS Code and Cursor IDE. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **IDE-Inspired Design**: Simulates a coding environment with sidebar explorer, tabs, and code editor aesthetic
- **Interactive Navigation**: File-based navigation system like VS Code explorer panel
- **Smooth Animations**: Powered by Framer Motion for premium, polished interactions
- **Dark Theme**: Developer-focused dark mode with glassmorphism effects
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop devices
- **Modern UI Effects**: Glowing borders, blur effects, smooth transitions
- **Code Snippets**: Developer information displayed in code format
- **Fast Performance**: Optimized with Next.js 14 and modern web technologies

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
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

## 📁 Project Structure

```
portfolio1/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Sidebar.tsx       # Explorer panel sidebar
│   │   ├── Navbar.tsx        # IDE top navigation bar
│   │   ├── MainContent.tsx   # Main content area
│   │   └── sections/         # Section components
│   │       ├── HomeSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── SkillsSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── AchievementsSection.tsx
│   │       └── ContactSection.tsx
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
└── next.config.js            # Next.js configuration
```

## 🎨 Design Features

### Color Palette
- **Primary**: Purple (#8b5cf6)
- **Secondary**: Blue (#3b82f6)
- **Accent**: Cyan (#06b6d4)
- **Background**: Dark (#0d1117)

### Typography
- Font Family: JetBrains Mono, Geist Mono, Fira Code
- Monospace for technical feel

### UI Elements
- Glassmorphism effects
- Soft shadows and blur
- Glowing borders
- Smooth hover animations
- Premium card design

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Google Fonts (JetBrains Mono)

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎯 Sections

1. **Home**: Hero section with typing effect and CTA buttons
2. **About**: About me section with key features and stats
3. **Skills**: Technology stack and proficiency levels
4. **Experience**: Work experience timeline
5. **Projects**: Featured projects with GitHub/demo links
6. **Achievements**: Awards and certifications
7. **Contact**: Contact form and social links

## 🚀 Deployment

The portfolio is ready to deploy on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

## 📝 Customization

To customize the portfolio:

1. Update personal information in section components
2. Replace project data in `ProjectsSection.tsx`
3. Update skills and experience data
4. Modify colors in `tailwind.config.js`
5. Update social links in contact section

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

- Customize the color scheme in `tailwind.config.js`
- Add your own projects in the Projects section
- Update personal links and social media profiles
- Consider adding a blog section for more content
- Deploy to Vercel for best performance

---

**Built with ❤️ using modern web technologies**
