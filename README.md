# Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ✨ **Modern Design**: Clean, minimalist aesthetic with smooth animations
- 📱 **Fully Responsive**: Works beautifully on mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and production builds
- 🎨 **Beautiful Animations**: Smooth transitions and interactions using Framer Motion
- 🔍 **SEO Ready**: Semantic HTML and meta tags for better search engine visibility
- ♿ **Accessible**: Built with accessibility best practices in mind

## Sections

- **Hero**: Eye-catching introduction section
- **About**: Overview of your background and expertise
- **Skills**: Showcase of technical skills and soft skills with proficiency levels
- **Projects**: Portfolio of your best work with descriptions and technologies used
- **Contact**: Contact form and social media links

## Tech Stack

- **React 18**: Modern frontend framework
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for smooth, performant animations
- **JavaScript (ES6+)**: Modern JavaScript features

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header with mobile menu
│   │   ├── Hero.jsx        # Hero section with introduction
│   │   ├── About.jsx       # About section with bio
│   │   ├── Skills.jsx      # Skills section with proficiency bars
│   │   ├── Projects.jsx    # Portfolio projects showcase
│   │   ├── Contact.jsx     # Contact form and info
│   │   └── Footer.jsx      # Footer with links and copyright
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will open automatically at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist` folder.

5. **Preview the production build**
   ```bash
   npm run preview
   ```

## Customization Guide

### Update Your Information

1. **Hero Section** - Edit [src/components/Hero.jsx](src/components/Hero.jsx#L15)
   - Change your name and title
   - Update the headline and description

2. **About Section** - Edit [src/components/About.jsx](src/components/About.jsx#L42)
   - Update your bio and background
   - Modify the focus areas
   - Replace the emoji or add an actual image

3. **Skills Section** - Edit [src/components/Skills.jsx](src/components/Skills.jsx#L5)
   - Update skill categories and items
   - Modify proficiency percentages

4. **Projects Section** - Edit [src/components/Projects.jsx](src/components/Projects.jsx#L5)
   - Add your own projects
   - Update project descriptions, tags, and links
   - Change emojis or add images

5. **Contact Section** - Edit [src/components/Contact.jsx](src/components/Contact.jsx#L37)
   - Update email, phone, and social links
   - Customize contact information

6. **Header** - Edit [src/components/Header.jsx](src/components/Header.jsx#L2)
   - Update the logo/brand name
   - Modify navigation links

### Color Scheme

The color scheme is defined in [tailwind.config.js](tailwind.config.js). To customize:

```js
theme: {
  extend: {
    colors: {
      primary: "#0f172a",      // Main background
      secondary: "#1e293b",    // Card backgrounds
      accent: "#3b82f6"        // Highlight color (blue)
    }
  }
}
```

Other color options:
- Purple accent: `"#a855f7"`
- Green accent: `"#10b981"`
- Pink accent: `"#ec4899"`
- Orange accent: `"#f97316"`

### Fonts

The project uses **Inter** font from Google Fonts. To change the font:

1. Update the import in [src/index.css](src/index.css#L7)
2. Modify the font-family in [tailwind.config.js](tailwind.config.js#L15)

### Adding More Sections

1. Create a new component in `src/components/` (e.g., `Experience.jsx`)
2. Import it in [App.jsx](App.jsx#L2)
3. Add it to the JSX in the `<main>` section
4. Update the navigation in [Header.jsx](src/components/Header.jsx#L9)

## Responsive Design

The portfolio is built with mobile-first responsive design:
- **Mobile**: Optimized for small screens with stacked layouts
- **Tablet** (md screen): Adapted layout for medium screens
- **Desktop** (lg screen): Full-featured layout with optimal spacing

Test responsiveness by resizing your browser window or using browser developer tools.

## Performance Optimization

- **Vite**: Provides fast HMR (Hot Module Replacement) in development
- **Framer Motion**: GPU-accelerated animations for smooth performance
- **Tailwind CSS**: Purges unused styles for smaller bundle size
- **Code Splitting**: Only loads necessary code for each page

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel automatically detects Vite and builds/deploys

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your repository to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `dist`

### Deploy to Other Platforms

The `dist` folder contains static files that can be deployed to:
- GitHub Pages
- AWS S3
- Firebase Hosting
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips for the Best Result

1. **Keep Content Fresh**: Regularly update projects and skills
2. **Add Real Images**: Replace emojis with actual screenshots of projects
3. **Optimize Performance**: Use web-optimized images
4. **Test Responsiveness**: Check on actual devices and different screen sizes
5. **SEO**: Update meta tags in [index.html](index.html) for better search visibility
6. **Analytics**: Consider adding Google Analytics for visitor insights
7. **Contact Form**: Integrate with a service like EmailJS or Netlify Forms for email notifications

## License

This project is open source and available under the MIT License.

## Support

For issues or suggestions, please refer to the documentation or create an issue in your repository.

---

**Happy building! 🚀**
