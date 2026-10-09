# Portfolio Studio — free GitHub Pages portfolio

A responsive, static portfolio website for people who don't code. Includes five designs, an in-browser editor, selected projects, image galleries, skills, experience, education, CV downloads, and contact links. No Node.js, database, or build process needed.

## Publish in minutes

1. Sign into GitHub and create a **public** repository named `YOUR-USERNAME.github.io` (replace `YOUR-USERNAME` with your actual GitHub username). For an alternative repository name, the site will use a project URL instead.
2. Click **Add file → Upload files** in the repository. Upload `index.html`, `style.css`, `app.js`, `data.js`, `courses.js`, `.nojekyll` and the entire `assets/` folder. GitHub's web uploader may not accept a folder directly; use **Add file → Create new file** with paths like `assets/portrait.svg`, or upload files via GitHub Desktop.
3. Commit your files. Go to **Settings → Pages → Build and deployment → Deploy from a branch**. Select `main` and `/ (root)` and **Save**.
4. Open `https://YOUR-USERNAME.github.io/` after GitHub Pages finishes deploying. A differently named repository appears at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Customize without writing code

1. Visit your deployed site and click **Edit content** at the top.
2. Update name, contact details, images, projects, skills and CV path. Preview changes on the page as you type. Click the template picker to try **Aurora, Editorial, Terminal, Playful**.
3. Click **Export data.js**. This downloads a replacement content file to your computer. **Edits do not publish automatically.**
4. In your GitHub repository, open `data.js`, click **Edit** (pencil icon), replace the file's contents with the downloaded `data.js` contents and commit. Alternatively upload and replace the file using GitHub Desktop.
5. For project photos, upload image files under `assets/` and enter paths such as `assets/my-project.jpg`. For a downloadable CV, upload `assets/cv.pdf` and set the CV field to `assets/cv.pdf`.
6. To share a preselected visual template with every visitor, edit `<body data-theme="aurora">` in `index.html` to `editorial`, `terminal` or `playful`. The picker remembers each visitor's theme choice on their device.

**Important:** The editor updates this browser only; visitors do not see edits until you commit the exported content to GitHub. GitHub Pages cannot accept server-side form submissions or store private information. The Contact section opens the user's own email app; there is no backend form or email service. Keep all uploaded content public-safe.

## Files

- `index.html` — complete site and editor markup
- `style.css` — responsive styling and four themes
- `app.js` — safe DOM rendering, theme switching, editor and export/import
- `data.js` — all public portfolio content; edit this file via the on-page editor
- `assets/` — sample placeholders; replace with your photos and CV
- `.nojekyll` — lets GitHub Pages serve these files directly

## Notes

- The sample content uses remote Unsplash images and Google Fonts, which need internet access. Replace images with local files if you want to self-host all images. Font fallbacks work without Google Fonts.
- The exported JavaScript configuration is never evaluated from untrusted text in the editor; the importer uses JSON parsing. The site renders supplied project text as text, not HTML.
- For a portfolio with actual form handling, account logins, or online saving you would need an external service or a hosted backend.
- No automatic writes to GitHub are supported in this starter: this avoids asking nontechnical visitors for GitHub access tokens.

## License

MIT — adapt and reuse freely.


## Architecture student template

Choose **▱ Architecture** in the theme menu for a drawing-board-inspired portfolio style. To start with course-specific example content, choose an architecture-related qualification from the CTU course selector and click **Load course sample**. Export `data.js` to keep your changes.

Project editor fields also support `site`, `studio`, `tools`, `process`, and `gallery`. The `gallery` field accepts image URLs or local `assets/` paths separated by ` | `. Click project thumbnails for an enlarged viewing experience. Architecture placeholder diagrams in `assets/` are illustrative examples, not actual architectural documents. Replace them with your own project renders, plans, sections, model photos and presentation boards.

For CV downloads upload a real PDF, e.g. `assets/my-cv.pdf`, and set the CV path in the editor. The sample CV file is only a placeholder.

## CTU qualification-inspired starter portfolios (22)

The **Choose a CTU course…** dropdown includes 22 separate qualifications gathered from CTU Training Solutions' public Higher Education, Vocational, Occupational and legacy Technical Diploma/NATED qualification lists on 9 October 2026. Select a course and click **Load course sample**. This resets only the local preview, chooses a suitable visual design, and adds three example projects, course-relevant skills and education/CV placeholders. Then personalize the portfolio with genuine work, upload your own project imagery and CV, and export `data.js`. The `courses.js` file must remain in the root beside `index.html`.

The Bloemfontein campus page does **not** establish which of these courses currently accept on-campus enrolment there. This independent site is not affiliated with or endorsed by CTU. CTU states that new N4–N6 engineering registrations closed on **30 June 2026**, so the engineering NATED samples are labelled **Legacy NATED**, for existing eligible students only. The short-course catalogue is extensive and changes separately; it is not presented as a complete list of short courses here.

### Included programmes

**Higher Education**

Diploma in IT Network Design & Administration, Diploma in Visual Communication, Higher Certificate in Graphic Design, BBA in Project Management, Higher Certificate in Management.

**Vocational**

Computer Aided Drawing Office Practice.

**Occupational**

Artificial Intelligence Software Developer, Computer Technician, Cybersecurity Analyst, Data Science Practitioner, Internet-of-Things Developer, Cloud Administrator, Software Developer, Software Engineer, Early Childhood Development, Human Resource Management Administrator, Project Manager, Environmental Science Technician, Architectural Draughtsperson.

**Legacy NATED**

Civil Engineering N4-N6, Electrical Engineering N4-N6, Mechanical Engineering N4-N6.

### Source pages (accessed 9 October 2026)

- https://ctutraining.ac.za/bloemfontein-campus/
- https://ctutraining.ac.za/academic-qualifications/higher-education/
- https://ctutraining.ac.za/academic-qualifications/vocational/
- https://ctutraining.ac.za/academic-qualifications/occupational/
- https://ctutraining.ac.za/academic-qualifications/nated/

**Publication note:** Update `data.js` and `courses.js` along with the other site files. Browsers never receive automatic updates from the editor until you commit an export. All template project content is explicitly illustrative.

## 22 individual responsive course themes

Every qualification in `courses.js` has its own `ctu-*` theme and a corresponding palette in `course-themes.css`. The course picker followed by **Load course sample** applies the matching theme automatically. You can also pick any of the 22 course themes manually in the visual-style dropdown, independent of sample content. Themes use six layout systems (tech, editorial, playful, minimal, blueprint and dashboard), with unique course-specific colorways and accents. These are responsive CSS layouts without any backend or build process.

When deploying, include **`course-themes.css`** next to `style.css` in the repository root. The exported `data.js` contains the selected theme, so readers get the selected published theme rather than a visitor-local preference.


## Animations and emphasis

`motion.css` and `motion.js` add scroll-triggered reveals, hero entrance sequences, interactive card focus/hover effects, a visible featured-project label, skill accents, and accessible keyboard focus states. The editor toolbar offers **Subtle**, **Expressive**, and **Off** motion settings; these are stored in the exported `data.js` as `motion`, so the public site respects the creator's setting. System `prefers-reduced-motion` always disables animation regardless of the selection. Layout-specific polish adapts to all 22 course themes plus five originals. Re-run deployment with both motion files in the repository root.
