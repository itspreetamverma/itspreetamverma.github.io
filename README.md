# Preetam Verma Portfolio

Portfolio built with React, Vite and Tailwind CSS. Turn on Inspect mode in the top bar to see the web concept behind each block.

## Run it on your computer

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the address that Vite prints, usually http://localhost:5173.

## Build for production

```bash
npm run build
```

The finished site is in the `dist` folder. `npm run preview` serves it locally.

## Put it online

### GitHub Pages (automatic)

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` now builds and publishes the site. The workflow is in `.github/workflows/deploy.yml`.
4. Your site is at `https://itspreetamverma.github.io/<repository-name>/`. A repository named `itspreetamverma.github.io` gives you `https://itspreetamverma.github.io/`.

### Netlify

Run `npm run build`, then drag the `dist` folder onto https://app.netlify.com/drop.

## Project structure

```
index.html                    page shell, fonts, meta tags
src/main.jsx                  mounts React
src/App.jsx                   page layout and Inspect mode state
src/index.css                 Tailwind layers, theme tokens, component styles
src/components/Tile.jsx       reusable block
src/components/TopBar.jsx     sticky header and Inspect switch
src/components/ApiPlayground.jsx   mock API demo
src/components/ContactRow.jsx      one contact line
src/components/CopyButton.jsx      copy to clipboard
src/data/concepts.js          concept labels shown in Inspect mode
src/data/apiRoutes.js         mock API responses (snake_case)
src/data/profile.js           experience, education, contact
```

## Edit your details

- Name, skills and projects: `src/data/apiRoutes.js`
- Experience, education, email, phone: `src/data/profile.js`
- To add a project description, add a field to each project in `apiRoutes.js` and show it inside the project card in `src/App.jsx`.
