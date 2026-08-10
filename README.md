# Personal Portfolio Website

A modern, responsive personal portfolio website built with **React and Vite**. The project uses reusable components, centralized data, responsive styling, animations, theme switching, technology icons, and automated deployment through GitHub Actions.

The repository is structured so that portfolio content can be easily replaced or extended without significantly changing the underlying UI components.

---

## ✨ Features

* Responsive portfolio layout
* Reusable React components
* Modular section-based architecture
* Dark / light theme toggle
* Theme persistence using `localStorage`
* Smooth scroll-based animations
* Framer Motion animations
* Responsive navigation
* Technology and brand icons
* Data-driven project/content sections
* Centralized profile and project data
* GitHub and social-link integration
* Mobile-friendly UI
* ESLint configuration
* Production-ready Vite build
* Automated GitHub Pages deployment
* GitHub Actions CI/CD workflow

---

## 🛠️ Tech Stack

| Technology     | Purpose                           |
| -------------- | --------------------------------- |
| React          | Frontend UI                       |
| Vite           | Development server and build tool |
| JavaScript     | Application logic                 |
| CSS            | Styling and responsive layouts    |
| Framer Motion  | UI animations                     |
| React Icons    | Icons and brand logos             |
| Lucide React   | UI icons                          |
| Simple Icons   | Technology/brand icons            |
| ESLint         | Code quality                      |
| GitHub Actions | CI/CD                             |
| GitHub Pages   | Hosting                           |

---

## 🏗️ Application Architecture

The application follows a component-based React architecture.

```text
                        React Application
                               │
                               ▼
                            App.jsx
                               │
        ┌──────────────┬───────┼───────┬──────────────┐
        │              │       │       │              │
        ▼              ▼       ▼       ▼              ▼
      Navbar          Hero    About   Skills        Experience
                                                        │
                                                        ▼
                                                    Projects
                                                        │
                                                        ▼
                                                     Contact
                                                        │
                                                        ▼
                                                      Footer
```

Each major section is implemented as an independent React component.

This keeps the application modular and makes individual sections easier to modify or replace.

---

## 📁 Project Structure

```text
portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Reveal.jsx
│   │   └── Skills.jsx
│   │
│   ├── data/
│   │   ├── profile.js
│   │   ├── projects.js
│   │   └── technologyIcons.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 🧩 Component-Based Design

The UI is divided into independent components:

```text
Navbar
Hero
About
Skills
Experience
Projects
Contact
Footer
```

This provides:

* Separation of concerns
* Reusability
* Easier maintenance
* Easier UI modifications
* Cleaner application structure

The main `App` component is responsible for composing these sections into the complete page.

---

# 📊 Data-Driven Architecture

Portfolio content is separated from UI components.

The project maintains dedicated data files:

```text
src/data/
├── profile.js
├── projects.js
└── technologyIcons.js
```

Instead of hard-coding content directly into JSX, components consume structured data.

For example:

```text
projects.js
     │
     ▼
Projects.jsx
     │
     ▼
Project Cards
```

This makes it possible to change portfolio content without rewriting the component implementation.

---

# 🎨 Theme Switching

The application supports both:

```text
☀️ Light Mode
🌙 Dark Mode
```

The selected theme is persisted using browser `localStorage`.

Conceptually:

```text
User toggles theme
       │
       ▼
Update theme state
       │
       ▼
Update document theme
       │
       ▼
Save preference
       │
       ▼
localStorage
```

When the application loads, the previously selected theme can be restored from local storage.

---

# 🎞️ Animations

The application uses **Framer Motion** for UI animations.

Animations are used for elements entering the viewport and for transitions between UI states.

A reusable `Reveal` component is used to provide consistent reveal animations across sections.

Conceptually:

```text
Component enters viewport
          │
          ▼
Initial animation state
          │
          ▼
Framer Motion
          │
          ▼
Visible component
```

This keeps animation behavior reusable rather than duplicating animation configuration across every section.

---

# 📱 Responsive Design

The portfolio is designed to work across different screen sizes:

```text
Desktop
   │
   ▼
Tablet
   │
   ▼
Mobile
```

Responsive styling is applied to:

* Navigation
* Hero section
* Content sections
* Project cards
* Skills
* Contact section
* Footer

The layout adapts rather than relying on fixed desktop dimensions.

---

# 🔗 Icon System

The project uses actual technology and brand icons rather than relying solely on text labels.

The icon system is centralized through:

```text
src/data/technologyIcons.js
```

This allows technology names to be mapped to their corresponding icons.

The project uses:

* React Icons
* Simple Icons
* Lucide React

This makes technology and social links more visually recognizable while keeping the implementation reusable.

---

# 🌐 Navigation

The portfolio uses section-based navigation to allow users to move between different parts of the page.

The navigation component is isolated in:

```text
src/components/Navbar.jsx
```

This makes navigation behavior independent from the content sections.

---

# 🖥️ Development

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

---

## Clone the Repository

```bash
git clone https://github.com/vikramhankare/vikramhankare.github.io.git
```

```bash
cd vikramhankare.github.io
```

---

## Install Dependencies

```bash
npm install
```

For a clean dependency installation:

```bash
npm ci
```

---

## Start Development Server

```bash
npm run dev
```

The Vite development server will start and provide a local URL, typically:

```text
http://localhost:5173
```

---

# 🔨 Production Build

Create a production build:

```bash
npm run build
```

The generated production files are placed in:

```text
dist/
```

---

# 👀 Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

# 🧹 Linting

Run ESLint:

```bash
npm run lint
```

This helps identify potential JavaScript and React code-quality issues before deployment.

---

# 🚀 Deployment

The website is deployed using **GitHub Pages**.

Deployment is automated through **GitHub Actions**.

The workflow is approximately:

```text
git push
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Checkout source
    │
    ├── Setup Node.js
    │
    ├── Install dependencies
    │
    ├── Build application
    │
    ├── Upload build artifact
    │
    └── Deploy to GitHub Pages
            │
            ▼
        Live Website
```

The deployment workflow is located at:

```text
.github/workflows/deploy.yml
```

---

# ⚙️ Available Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Starts the development server |
| `npm run build`   | Creates the production build  |
| `npm run preview` | Previews the production build |
| `npm run lint`    | Runs ESLint                   |

---

# 🔄 Development Workflow

A typical development workflow is:

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Check code quality
npm run lint

# Build production version
npm run build

# Preview production build
npm run preview
```

After verifying changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The GitHub Actions workflow then handles deployment.

---

# 🧠 Technical Highlights

The project demonstrates several modern frontend development practices:

### Componentization

UI is divided into focused React components rather than one large component.

### Data Separation

Content is separated from presentation logic through dedicated data modules.

### Reusable Animation

Animation behavior is abstracted into reusable components.

### Persistent UI State

Theme preference is persisted using browser storage.

### Responsive UI

The interface adapts to different viewport sizes.

### Automated Deployment

GitHub Actions handles the production build and deployment process.

### Modern Build Tooling

Vite provides fast development builds and optimized production builds.

---

# 📈 Future Improvements

Potential improvements include:

* [ ] Add detailed project pages
* [ ] Add project screenshots
* [ ] Add downloadable resume
* [ ] Add blog / technical articles
* [ ] Add project filtering
* [ ] Add GitHub API integration
* [ ] Add GitHub contribution statistics
* [ ] Add SEO metadata
* [ ] Add Open Graph metadata
* [ ] Add sitemap
* [ ] Add accessibility auditing
* [ ] Add Lighthouse CI
* [ ] Add unit/component tests
* [ ] Add end-to-end tests
* [ ] Add automated dependency updates
* [ ] Add performance monitoring

---

## 🔗 Repository

**GitHub:**
https://github.com/vikramhankare/vikramhankare.github.io
