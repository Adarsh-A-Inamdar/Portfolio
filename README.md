# Interactive Portfolio Website

A modern, interactive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This portfolio features smooth animations, responsive design, and a clean user interface to showcase your skills, projects, and professional background.

![Portfolio Preview](public/portfolio-preview.png)

## Features

- 🌓 Dark/Light mode toggle
- ✨ Interactive animations using Framer Motion
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive design for all devices
- 🔍 SEO optimized
- ⚡ Fast performance with Next.js
- 🧩 Modular and maintainable code structure
- 🔄 Smooth scrolling and page transitions
- 📝 Contact form with validation
- 🌐 Social media integration

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.17.0 or higher)
- [npm](https://www.npmjs.com/) (v9.6.7 or higher) or [yarn](https://yarnpkg.com/) (v1.22.19 or higher)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

## Getting Started

Follow these steps to set up and run the project from scratch:

### 1. Create a new Next.js project

\`\`\`bash
# Create a new Next.js project with TypeScript
npx create-next-app@latest portfolio-website --typescript

# Navigate to the project directory
cd portfolio-website
\`\`\`

### 2. Install dependencies

\`\`\`bash
# Install required dependencies
npm install framer-motion lucide-react next-themes class-variance-authority clsx tailwind-merge tailwindcss-animate @radix-ui/react-slot
\`\`\`

### 3. Set up Tailwind CSS

Tailwind CSS should be set up automatically when you create a Next.js project. If not, run:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

### 4. Clone or download the project files

Option 1: Clone the repository (if you have Git installed):

\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
\`\`\`

Option 2: Download the project files and extract them to your project directory.

### 5. Copy the project files

Copy all the files from this repository to your project directory, replacing any existing files.

### 6. Run the development server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development Commands

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
\`\`\`

## Project Structure

\`\`\`
portfolio-website/
├── .vscode/                # VS Code specific settings
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── ui/                 # UI components (button, card, etc.)
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── projects.tsx        # Projects section
│   ├── research.tsx        # Research section
│   ├── contact.tsx         # Contact section
│   ├── footer.tsx          # Footer component
│   ├── particles.tsx       # Particles animation
│   ├── scroll-to-top.tsx   # Scroll to top button
│   └── theme-provider.tsx  # Theme provider for dark/light mode
├── lib/                    # Utility functions
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── .prettierrc             # Prettier configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## Customization

### Personal Information

Update your personal information in the following files:

- `components/hero.tsx` - Update your name, title, and introduction
- `components/about.tsx` - Update your about section, skills, and education
- `components/projects.tsx` - Add your projects
- `components/research.tsx` - Add your research and publications
- `components/contact.tsx` - Update your contact information
- `components/footer.tsx` - Update footer information

### Styling

- Update the color scheme in `tailwind.config.ts` and `app/globals.css`
- Modify the animations in the Framer Motion components

### Adding Projects

To add a new project, edit the `projects` array in `components/projects.tsx`:

\`\`\`typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Description of your project",
    image: "/path/to/image.jpg", // Add image to public folder
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-link.com",
  },
  // Add more projects...
];
\`\`\`

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will detect Next.js and set up the build configuration automatically
4. Your site will be deployed to a URL like `your-project.vercel.app`

### Other Deployment Options

You can also deploy to other platforms like Netlify, AWS Amplify, or traditional hosting:

1. Build your application:
   \`\`\`bash
   npm run build
   \`\`\`

2. The output will be in the `.next` folder, which you can deploy according to your hosting provider's instructions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

Created with ❤️ by [Your Name]
