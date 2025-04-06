# Personal Portfolio Website

A modern, responsive portfolio website built with SvelteKit and Tailwind CSS. This portfolio showcases your projects, skills, and experience in a clean and professional way.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly layout
- ⚡ Fast and optimized performance
- 🎯 SEO-friendly
- 📝 Project showcase
- 👤 About section
- 📧 Contact form
- 🔗 Social media links

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- A GitHub account

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

1. Update the content in the following files:
   - `src/routes/+page.svelte` - Home page content
   - `src/routes/projects/+page.svelte` - Projects page content
   - `src/routes/about/+page.svelte` - About page content
   - `src/routes/contact/+page.svelte` - Contact information

2. Replace placeholder images:
   - Add your project images to the `static` folder
   - Update image paths in the project components

3. Update personal information:
   - Replace "Your Name" with your actual name
   - Update email and social media links
   - Modify the about section with your experience
   - Add your own projects and skills

## Deployment to GitHub Pages

1. Create a new repository on GitHub

2. Update the repository name in `svelte.config.js`:
   ```javascript
   paths: {
     base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
   }
   ```

3. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "GitHub Actions" as the source
   - The site will be automatically deployed when you push to the main branch

## Built With

- [SvelteKit](https://kit.svelte.dev/) - The web framework
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework
- [GitHub Pages](https://pages.github.com/) - Hosting platform

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)
Project Link: [https://github.com/yourusername/your-repo-name](https://github.com/yourusername/your-repo-name)
