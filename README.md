# Doddi Mahindhra — Professional Developer Portfolio

A modern, responsive, high-performance personal portfolio website engineered for **Doddi Mahindhra**, an aspiring Software Developer. Designed with a sleek developer aesthetic, smooth animations, glassmorphism cards, dark/light theme switching, and strict adherence to factual resume data.

---

## 🌟 Key Features

- **Profile & Hero Showcase**: Displays Doddi Mahindhra's actual portrait in a high-tech glowing frame with an animated rotating title typewriter effect, terminal code badge, and verified academic metrics (7.5 CGPA, 97% SSC).
- **Dark / Light Mode**: Seamless theme toggle persisted in `localStorage` with system preference detection.
- **Official Resume Integration**:
  - Embedded printable resume modal with ATS layout.
  - One-click PDF download (`/resume.pdf`).
  - Native print formatting (`window.print()`).
- **Technical Skills**: Grouped into Programming Languages, Web Technologies, Database Technologies, Tools & Platforms, and Soft Skills. Uses authentic focus and exposure tags without fabricated percentages.
- **Education Timeline**: Milestones for B.Sc. – MECs (Aditya Degree & PG College, 7.5 CGPA) and SSC (M.N.R. High School, 97%).
- **Internships**: Enterprise-styled cards for **AWS Cloud Computing (Adhoc Network)** and **Artificial Intelligence & Machine Learning (ULearn)**.
- **Projects & Hackathons**: Features the **Android Development Hackathon (30 Sep – 04 Oct 2024)** live challenge recognition plus 2 modular project templates for upcoming personal builds.
- **Certifications & Achievements**: Highlighting Microsoft Office, C Programming, and Pearson MePro Communication Skills certifications.
- **Leadership & Extracurriculars**: Dedicated cards for Team Leadership, Campus Event Organization, and Financial Literacy & Trading.
- **Creative Interests**: Interactive cards for Playing Piano, Cooking, Painting, and Drawing.
- **Validated Contact Form**: Real-time input validation (email format, character constraints, required fields) with pre-filled `mailto:` integration.
- **Mobile Responsive**: Custom hamburger drawer, sticky glassmorphic navigation bar with scroll spy.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 📁 Project Structure

```text
/
├── public/
│   ├── images/
│   │   ├── profile.jpg      # Doddi Mahindhra's official photo
│   │   └── favicon.svg      # Custom DM brand favicon
│   ├── resume.pdf           # Downloadable ATS resume
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky header with scroll spy & theme toggle
│   │   ├── Footer.jsx       # Footer with quick links & social badges
│   │   ├── ThemeToggle.jsx  # Dark/Light switch
│   │   ├── SectionHeader.jsx# Reusable section title badge
│   │   ├── ResumeModal.jsx  # Printable modal resume viewer
│   │   └── BackToTop.jsx    # Smooth scroll-to-top button
│   ├── sections/
│   │   ├── Hero.jsx         # Hero section with animated titles
│   │   ├── About.jsx        # Bio & 4 personal highlight cards
│   │   ├── Skills.jsx       # Categorized skills with interactive filters
│   │   ├── Education.jsx    # Academic qualifications timeline
│   │   ├── Internships.jsx  # AWS Cloud & AI/ML internship cards
│   │   ├── Projects.jsx     # Android Hackathon & project templates
│   │   ├── Certifications.jsx # Microsoft, C, Pearson MePro credentials
│   │   ├── Achievements.jsx # Hackathon & academic honors
│   │   ├── Leadership.jsx   # Team leadership & event organization
│   │   ├── Interests.jsx    # Piano, cooking, painting, drawing
│   │   └── Contact.jsx      # Direct info & validated contact form
│   ├── data/
│   │   └── portfolioData.js # Single source of truth for all portfolio data
│   ├── App.jsx              # Main application shell
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind directives & glassmorphism utilities
├── index.html               # SEO tags, fonts, open graph metadata
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
This generates an optimized static bundle in the `dist/` directory ready for deployment.

---

## ✏️ How to Customize Your Portfolio

All information (bio, contact details, projects, skills, education) is centralized in:
`src/data/portfolioData.js`

To update:
- **Add your LinkedIn URL**: Replace the placeholder in `src/data/portfolioData.js` (`linkedinUrl`).
- **Add New Projects**: Add project objects in the `projects` array with title, description, and GitHub repository links.
- **Update Skills or Certifications**: Simply add items to the respective categories in `portfolioData.js`.

---

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub: `git push origin main`.
2. Go to [Vercel](https://vercel.com/) and click **New Project**.
3. Import your repository. Vercel will automatically detect Vite.
4. Click **Deploy**.

### Deploy to Netlify
1. Drag and drop the `dist/` folder into Netlify Drop, or connect via GitHub.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to GitHub Pages
1. In `vite.config.js`, add `base: '/<repo-name>/'`.
2. Run `npm run build` and push the `dist` folder to your `gh-pages` branch.
