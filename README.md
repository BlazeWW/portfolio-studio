**Simple step-by-step guide: Host a student portfolio with Portfolio Studio on GitHub Pages**

This guide is written for complete beginners. You only need a free GitHub account and a web browser. No coding, no command line, and no special software is required (GitHub Desktop is optional but makes uploading folders easier).

### What you will end up with

A free, public website such as:

- `https://yourusername.github.io/`  
  or
- `https://yourusername.github.io/portfolio/`

### Part 1: Create a GitHub account (if you don’t have one)

1. Go to [https://github.com](https://github.com).
2. Click **Sign up**.
3. Enter your email, create a password, and choose a username (this becomes part of your website address).
4. Verify your email and finish the sign-up process.

### Part 2: Create a new repository for your portfolio

1. Log in to GitHub.
2. Click the **+** icon in the top-right corner → **New repository**.
3. Fill in the details:
   - **Repository name**:
     - Recommended (nicest URL): `yourusername.github.io`  
       (replace `yourusername` with your exact GitHub username)
     - Or simply: `portfolio` (the URL will then be `https://yourusername.github.io/portfolio/`)
   - **Description**: Optional (e.g. “My student portfolio”).
   - Choose **Public**.
   - **Do not** tick “Add a README file”.
4. Click **Create repository**.

### Part 3: Download the Portfolio Studio files

1. Open the template repository:  
   [https://github.com/BlazeWW/portfolio-studio](https://github.com/BlazeWW/portfolio-studio)
2. Click the green **Code** button → **Download ZIP**.
3. Save the ZIP file to your computer and unzip it.  
   You will see a folder containing files such as:
   - `index.html`
   - `style.css`
   - `app.js`
   - `data.js`
   - `courses.js`
   - `course-themes.css`
   - `motion.css` / `motion.js`
   - `studio.css` / `studio.js`
   - `public.js`
   - `.nojekyll`
   - and an `assets` folder

### Part 4: Upload the files to your new repository

**Option A – Using the GitHub website (works for most people)**

1. Go to your new empty repository on GitHub.
2. Click **Add file** → **Upload files**.
3. Drag and drop **all** the files from the unzipped folder into the upload area.  
   Important: Also upload the entire `assets` folder (you may need to create the folder path manually or upload files one by one inside `assets/`).
4. Scroll down, type a short message such as “Initial portfolio files”, and click **Commit changes**.

**Option B – Easier way with folders (recommended)**

1. Download and install the free **GitHub Desktop** app: [https://desktop.github.com](https://desktop.github.com).
2. Sign in with your GitHub account.
3. Click **File** → **Add local repository** (or clone your new empty repo).
4. Copy all the Portfolio Studio files into the local folder that GitHub Desktop created.
5. In GitHub Desktop, write a commit message (e.g. “Add portfolio files”) and click **Commit to main**.
6. Click **Push origin**.

### Part 5: Turn on GitHub Pages (this publishes your site)

1. In your repository on GitHub, click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: select **main**
   - Folder: select **/ (root)**
4. Click **Save**.
5. Wait 1–2 minutes. GitHub will show a green message with your live website address (e.g. `https://yourusername.github.io/` or `https://yourusername.github.io/portfolio/`).

### Part 6: Customise your portfolio (no coding needed)

1. Open your live website in a browser.
2. Click **Edit content** (or open **Studio tools**) at the top of the page.
3. Fill in your name, contact details, projects, skills, experience, education, etc.
4. You can:
   - Choose a visual theme (Aurora, Editorial, Terminal, Playful, Architecture, or one of the CTU course themes).
   - Load a sample for your course if you see the “Choose a CTU course…” dropdown.
   - Add project images and a CV (PDF).
5. When you are happy with the look, click **Export data.js**.  
   A file called `data.js` will download to your computer.

### Part 7: Publish your changes

1. Go back to your repository on GitHub.
2. Open the existing `data.js` file.
3. Click the pencil icon (**Edit this file**).
4. Delete everything inside the file.
5. Open the `data.js` you just downloaded, copy all its contents, and paste them into the GitHub editor.
6. Scroll down and click **Commit changes**.
7. Wait about 1 minute, then refresh your live website — your new content will appear.

### Adding your own photos and CV

1. In your repository, go into the `assets` folder (or create it if needed).
2. Click **Add file** → **Upload files**.
3. Upload your photos (JPG/PNG) and CV (PDF).
4. In the portfolio editor, set the image paths like:  
   `assets/my-project.jpg`  
   and the CV path like:  
   `assets/my-cv.pdf`
5. Export `data.js` again and replace it on GitHub (same as Part 7).

### Important tips for students

- Changes made in the editor only appear on your own computer until you export `data.js` and commit it to GitHub.
- Keep everything public-safe — anyone can see the site.
- The Contact section just opens the visitor’s email app; there is no contact form that stores messages.
- Always keep a backup of your exported `data.js` file.
- If the site doesn’t update, wait a couple of minutes and do a hard refresh (Ctrl + F5 or Cmd + Shift + R).

### Quick checklist

- [ ] GitHub account created
- [ ] New public repository created
- [ ] All Portfolio Studio files uploaded
- [ ] GitHub Pages turned on
- [ ] Content edited and `data.js` exported
- [ ] New `data.js` committed to GitHub
- [ ] Live site checked

That’s it! Once the first version is live, updating the portfolio is just: edit → export `data.js` → replace the file on GitHub → commit.

If any student gets stuck on a specific step (especially uploading the `assets` folder), they can switch to GitHub Desktop — it makes folders much easier to handle.
