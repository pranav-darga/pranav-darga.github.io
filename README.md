# Portfolio

A personal portfolio site (plain HTML/CSS/JS, no build step) with a header, about-me section,
work experience timeline, and projects grid that animate in as you scroll — styled after
intuit.com/careers.

## Before you publish

1. **Photo** — add your photo as `assets/profile.jpg` (or any name/format you like), then update
   the two `<img>` tags in `index.html` (`hero-bg` and `about-photo`) to point to it instead of
   `assets/profile-placeholder.svg`.
2. **Resume** — drop your resume PDF at `assets/resume.pdf` (the header, about section, and
   footer already link to that path).
3. **Links** — in `index.html`, replace:
   - `https://github.com/yourusername`
   - `https://linkedin.com/in/yourusername`
   - `your.email@example.com`
   - `Your Name` (logo, hero heading, footer)
4. **Content** — fill in real entries under the "Where I've Worked" and "Projects" sections
   (currently placeholder copy). Each `<article>` is self-contained, so copy/paste to add more.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

Then in the GitHub repo: **Settings → Pages → Source → Deploy from a branch → `main` / `/(root)`**.
Your site will be live at `https://yourusername.github.io/your-repo/`.

No build tooling is required — this is static HTML/CSS/JS, so GitHub Pages serves it as-is.
