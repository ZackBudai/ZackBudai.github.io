# Developer & Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion. Features a unique 3D carousel that rotates as users scroll down the page, showcasing projects with a beautiful 3D effect.

## Features

- **3D Project Carousel**: Interactive carousel that rotates as you scroll
- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI**: Clean, modern UI with smooth animations
- **TypeScript**: Type-safe code for better reliability
- **Framer Motion**: Powerful animation library for fluid motion effects

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ZackBudai/ZackBudai.github.io.git
   cd ZackBudai.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customizing the Portfolio

### Project Data

Edit the `src/components/Projects/ProjectsData.tsx` file to add your own projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    image: "image_url",
    technologies: ["Tech1", "Tech2"],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/yourusername/project"
  },
  // Add more projects...
];
```

### Personal Information

Modify the `src/components/About/About.tsx` file to update your personal information, skills, and experience.

## Deployment

This portfolio is configured to deploy to GitHub Pages automatically.

1. Push your changes to the GitHub repository:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The site will be available at `https://zackbudai.github.io`.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [GitHub Pages](https://pages.github.com/) - For hosting

## License

This project is licensed under the MIT License.
