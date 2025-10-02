# Bio Portfolio Project

A modern, responsive bio/portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern React Setup**: Built with Vite for fast development and building
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Responsive Design**: Works great on desktop and mobile devices
- **Component-based**: Modular components for easy customization

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── About.tsx       # About section with bio info
│   ├── Skills.tsx      # Skills and technologies
│   └── Contact.tsx     # Contact information
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **Header.tsx**: Change "Your Name" to your actual name
2. **About.tsx**: Update the bio description and background information
3. **Skills.tsx**: Modify the skills array with your technologies and proficiency levels
4. **Contact.tsx**: Update contact information (email, LinkedIn, GitHub)

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify the color scheme by updating Tailwind classes
- Add custom styles in `tailwind.config.js`
- Update the layout and spacing using Tailwind utilities

### Adding Sections

To add new sections:
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Update the navigation in `Header.tsx` if needed

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing

## License

This project is open source and available under the [MIT License](LICENSE).
