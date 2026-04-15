# Curiosite Atelier

Curiosite Atelier is a course web project that combines a fashion-brand showcase site with a lightweight seller dashboard demo. This repository has been cleaned for portfolio use: broken front-end flows were repaired, unsafe local credential handling was removed, and repository guidance was added for GitHub publication.

## Project Structure

- `index.html`: visual entry page for the brand experience.
- `Home_Page.html`, `Features.html`, `Men.html`, `Women.html`, `About.html`: public-facing fashion showcase pages.
- `home.html`, `brands.html`, `add-product.html`, `login.html`, `register.html`, `orders.html`: seller-side demo pages.
- `script.js`: shared client-side logic for demo account registration, sign-in, product publishing, and catalogue rendering.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage` for static demo state

## How to Run

1. Open `index.html` for the showcase entry experience.
2. Open `login.html` or `register.html` to test the seller dashboard demo.
3. Register a demo account locally in your browser.
4. Add products from `add-product.html` and review them in `brands.html`.

## Portfolio Notes

- The seller dashboard is a static front-end demo, not a production authentication system.
- Product and account demo data stays in the local browser and is not sent to a server.
- Large media files should not be committed directly to GitHub. See `GITHUB_PAGES.md` and `MODIFICATION_REPORT.md` for hosting guidance.
- Large media files should not be committed directly to GitHub. See `GITHUB_PAGES.md`, `ASSET_UPLOAD_GUIDE.md`, and `MODIFICATION_REPORT.md` for hosting guidance.

## GitHub Pages

`index.html` is now the default Pages entry file. Detailed setup notes are in `GITHUB_PAGES.md`.
