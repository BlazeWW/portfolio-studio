# Portfolio Studio v5 — Layout and Editor Reliability

## Fixes and improvements
- Fixed Experience & Education (résumé) section alignment by removing the flex layout applied to the entire portfolio. Section order now moves actual DOM nodes instead of styling flex order. Full-bleed sections remain full width and `.wrap` sections remain centred at the same maximum width.
- Restored a missing `clickEditMode` button referenced by Studio scripts. Its absence caused a runtime error that stopped subsequent tool initialization, including versions, publishing preview and draft restoration.
- Improved résumé editor spacing, card controls, and mobile behaviour.
- Added one-click **View résumé**, **View projects**, and **Show section** shortcuts in Studio tools.
- Retains visual Experience/Education editing, existing themes, backups, exports, and draft storage key.

## Usage
Serve the folder through an HTTP static server or GitHub Pages, then use **Studio tools**. The editor runs entirely in the browser. Export backups before replacing a production deployment. For ZIP export, HTTP hosting is required to fetch the static assets.

## Checks
JavaScript syntax, HTML element IDs, all local script/CSS references, ZIP integrity and known initialization element references are checked at packaging time. Manual browser verification is still advised before live deployment.

# Portfolio Studio v3 — Visual Editing Pass

This version removes all raw JSON editing from the content editor. Use visual fields to add, edit, reorder, and remove experience and education entries. Project editors now have individual gallery image fields, multi-image uploads, reordering, duplication, and multiline description/process fields. The data.js and JSON formats remain available as export/import formats (not manual authoring interfaces).

Serve this directory using a local HTTP server (for example `python3 -m http.server 8000`) and open `http://localhost:8000/`. Browser `file://` mode is not suitable for full-site ZIP exporting. Existing browser drafts from v2 use the same local storage key.

**Important:** Hosting on GitHub Pages remains static. Draft changes stay local until the generated public website is uploaded. GitHub OAuth publishing and fully general drag-and-drop component editing are not included in this build.

---

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

## Portfolio Studio v2 builder additions

Open the builder through a local HTTP server (for example `python3 -m http.server 8080`) and visit `http://localhost:8080`. Choose **Studio tools** to open the local-first workspace.

- **Drafts:** automatically saved in this browser's localStorage. Save/export a backup JSON separately to protect against clearing browser data or storage quota limits.
- **Undo/Redo:** up to 60 captured edits. Redo history is cleared after further editing.
- **Visual content:** Experience and Education have simple repeatable item editors (raw JSON remains under Advanced JSON editor).
- **Sections:** reorder the five existing sections and control their visibility.
- **Visual settings:** accent colour, corner radius and desktop/tablet/mobile preview width.
- **Media:** attach portrait JPEG/PNG/WebP/GIF/SVG and PDF CV documents up to 8MB each. Uploaded files are embedded into the generated data.js as data URLs; for best performance optimize large images first.
- **Publishing:** click **Download full website ZIP** to package the visitor-facing static website, themes, sample images, CSS, JavaScript, and data. Unzip and upload contents to your static host or GitHub Pages. No Node runtime or server database is needed.
- **GitHub:** use the link to the official GitHub Pages guide. Automatic OAuth-based publishing requires a separate authenticated integration and is not included.

Important: Static exported pages use a separate `public.js` renderer, not `app.js` or `studio.js`, and do not save or expose drafts. External URLs used by starter content (e.g. remote example photos, Google Fonts) still require network access. The site builder requires HTTP rather than direct `file://` loading for ZIP export because the browser must load bundled static assets.


## v4 enhancements

- **Click to edit:** Studio tools → Click to edit. Click any hero/profile/contact field to open its form; click a project to expand its project editor, or another section to open the relevant editor. Switch the mode off to follow links normally.
- **Quick-add content:** Add general projects, architecture case studies, experience, education and skill entries using templates that retain the existing data format.
- **Named revision checkpoints:** Save, restore and remove up to 12 locally stored named revisions. They live in the current browser; download JSON backups for portability.
- **Published preview:** An isolated browser frame uses the actual visitor-only rendering script without builder controls, before exporting. Preview at desktop, tablet and mobile widths.

**Limits:** This is a section-based builder, not a full arbitrary-layout drag/drop canvas. The click-to-edit mode navigates to structured fields instead of directly modifying public HTML. Publishing still requires downloading and uploading the static output; authenticated GitHub publishing is not bundled. Test in a browser served over HTTP, not from file://.


## v4.1 hotfix

Corrected script ordering: the v4 workspace JavaScript ran before the workspace DOM existed, preventing Studio tools from initializing and leaving the résumé form empty. Studio scripts now load at the end of the document after the workspace and publication-preview elements.

Experience & Education has a permanently open editor section with individual work experience and education forms, add/remove/reorder controls and new shortcuts in Studio tools. Entries render in the public Résumé section.
