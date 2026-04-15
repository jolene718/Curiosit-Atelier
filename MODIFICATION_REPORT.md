# Modification Report

## Project Identified

- `CuriositeAtelier.com` is the only source-code project currently available in the workspace.
- `../Progress Report/` contains four `.docx` files and should be treated as supporting coursework documentation, not public source files.

## What Was Changed

### Seller-side demo flow

- Rebuilt `script.js` so the demo account, login, product form, and catalogue pages use one consistent client-side flow.
- Removed the previous pattern of reading merchant passwords and phone numbers into local storage for product publishing.
- Replaced broken form bindings and removed dead references to missing PHP backends.
- Reframed the orders page so it no longer presents hard-coded fake order IDs as if they were real records.

### Public-facing showcase fixes

- Removed an About page script that accessed the DOM before the elements existed and would throw in the browser.
- Fixed the search button ID mismatch on multiple showcase pages.
- Fixed a missing `displayProducts` implementation on `Home_Page.html`.
- Fixed a broken filter selector in `Features.html`.
- Replaced missing `Click.html` font/background asset dependencies with CSS that works from the current repository.
- Replaced the hard-coded public Gmail address in `About.html` with a neutral placeholder email.
- Renamed `Click.html` to `index.html` so the project is ready for GitHub Pages as a root-site homepage.

### Repository hygiene

- Added `.gitignore` for OS files, editor files, compiled outputs, local env files, and large media candidates.
- Added `README.md` and `GITHUB_PAGES.md` for GitHub presentation and deployment guidance.

## Files That Should Not Be Public Without Your Confirmation

- `../Progress Report/Progress Report 1.0.docx`
- `../Progress Report/Progress Report 2.0.docx`
- `../Progress Report/Progress Report 3.0.docx`
- `../Progress Report/Progress Report 4.0.docx`
  Reason: course progress reports often contain names, instructor-facing notes, drafts, timelines, and internal evaluation context.

- `Hint.docx`
  Reason: likely a coursework support file rather than project source or polished documentation.
  Current handling: moved into `.private-review/Hint.docx` inside the project folder so it is easier to keep out of the public repository.

- `view_video.mp4`
  Reason: very large file and not ideal for a normal GitHub portfolio repository.
  Current handling: still in place for local preview, but marked for external hosting before publication.

- Portrait images such as `img/pc.jpg`, `img/zzm.jpg`, `img/mjt.jpg`
  Reason: these are personal photos and should only remain public if everyone shown is comfortable with GitHub publication.

## Large Asset Handling Plan

### Keep in repo if optimized first

- Small images under 1 MB after compression.

### Move out of repo

- `view_video.mp4`
- Current large banner and hero images above 1 MB

### Recommended manual upload sequence

1. Choose a host: GitHub Releases, Imgur, Tencent COS, or Cloudflare R2.
2. Upload `view_video.mp4` and the large showcase images.
3. Copy the final public URLs.
4. Replace the remaining local asset paths in the HTML files with those URLs.
5. Test the site locally and again on GitHub Pages.

## Remaining Optimization Ideas

- Compress all showcase photos for faster page load and lower GitHub storage use.
- Split repeated inline CSS into shared stylesheet files for maintainability.
- Rename `Home_Page.html` and `Curiosité Atelier.html` to ASCII-only filenames before public release.
- Add a real `index.html` entry page before publishing to GitHub Pages.
- Add image `alt` text that is more descriptive for accessibility.
