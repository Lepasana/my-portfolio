# Modern Portfolio Website

A stunning, modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases your skills, projects, and experience with beautiful animations and a responsive design.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Built-in dark mode support
- **Smooth Animations**: Powered by Framer Motion
- **TypeScript**: Full TypeScript support for better development experience
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Contact Form**: Functional contact form with toast notifications
- **Project Showcase**: Interactive project cards with filtering
- **Skills Visualization**: Animated skill progress bars
- **Experience Timeline**: Beautiful timeline for work experience and education
- **Loading Screen**: Animated loading screen
- **Social Links**: Integration with all major social platforms

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### 1. Personal Information

Edit `data/portfolio.ts` to update your personal information:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Your Name", // Update your name
    title: "Full Stack Developer", // Update your title
    subtitle: "Building modern web applications with passion and precision", // Update subtitle
    about: `I'm a passionate Full Stack Developer...`, // Update your about text
    avatar: "/avatar.jpg", // Add your avatar image
    resume: "/resume.pdf" // Add your resume PDF
  },
  // ... rest of the data
};
```

### 2. Skills

Update your skills in the `skills` array:

```typescript
skills: [
  { name: "React", level: 95, category: "frontend", icon: "react" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "typescript" },
  // Add more skills...
],
```

### 3. Projects

Add your projects to the `projects` array:

```typescript
projects: [
  {
    id: "1",
    title: "Your Project Name",
    description: "Project description...",
    image: "/projects/project-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project-demo.com",
    featured: true,
    category: "fullstack"
  },
  // Add more projects...
],
```

### 4. Experience

Update your work experience:

```typescript
experience: [
  {
    id: "1",
    company: "Your Company",
    position: "Your Position",
    duration: "2022 - Present",
    description: "Your role description...",
    technologies: ["React", "Node.js", "TypeScript"],
    achievements: [
      "Key achievement 1",
      "Key achievement 2",
      // Add more achievements...
    ]
  },
  // Add more experience...
],
```

### 5. Education

Update your education background:

```typescript
education: [
  {
    id: "1",
    institution: "Your University",
    degree: "Your Degree",
    field: "Your Field of Study",
    duration: "2016 - 2020",
    description: "Your education description..."
  },
  // Add more education...
],
```

### 6. Contact Information

Update your contact details:

```typescript
contact: {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
  website: "https://your-website.com"
},
```

### 7. Social Links

Update your social media links:

```typescript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  youtube: "https://youtube.com/@yourusername"
}
```

### 8. SEO and Meta Tags

Update the metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Your portfolio description...',
  // Update other meta tags...
};
```

### 9. Colors and Styling

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
      // Add more custom colors...
    },
  },
},
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects section
│   ├── Experience.tsx       # Experience section
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer
│   └── LoadingScreen.tsx    # Loading screen
├── data/
│   └── portfolio.ts         # Portfolio data
├── public/
│   ├── avatar.jpg           # Your avatar
│   ├── resume.pdf           # Your resume
│   └── projects/            # Project images
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Customization Tips

### Adding Images

1. Place your images in the `public/` directory
2. Reference them in your data files starting with `/`
3. For project images, create a `public/projects/` folder

### Adding Animations

The portfolio uses Framer Motion for animations. You can customize animations by modifying the `motion` components in each file.

### Adding New Sections

1. Create a new component in the `components/` directory
2. Add it to the main page in `app/page.tsx`
3. Update the navigation in `components/Header.tsx`

### Styling

- Use Tailwind CSS classes for styling
- Custom styles can be added to `app/globals.css`
- Custom colors and animations can be added to `tailwind.config.js`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icons
- [React Hot Toast](https://react-hot-toast.com/) - Toast notifications

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy coding! 🚀** 