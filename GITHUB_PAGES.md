# GitHub Pages Setup

## Recommended Publishing Layout

For GitHub Pages, the cleanest option is:

1. Keep `index.html` as the visual portal homepage.
2. Keep `Home_Page.html` as the second-level brand landing page, or rename it to `showcase.html` later if you want cleaner URLs.
3. Commit only optimized media and externally hosted large assets.

## Repository Settings

1. Push the repository to GitHub.
2. Open repository `Settings`.
3. Open `Pages`.
4. Set `Source` to `Deploy from a branch`.
5. Choose the default branch and `/ (root)`.
6. Save and wait for the Pages URL to be generated.

## Asset Hosting Guidance

- Keep images under 1 MB in the repository when possible.
- Host large media externally and replace local references with public URLs.
- The current `view_video.mp4` is too large for a normal GitHub portfolio repo and should be moved to a release asset, cloud storage bucket, or video platform before publishing.
- This project now uses GitHub Releases tag `assets-v1` for the large public media files.

## Suggested External Hosting Options

- GitHub Releases: good for versioned downloadable assets.
- Imgur: simple for standalone image hosting.
- Tencent Cloud COS free tier: better for a structured static-asset bucket.
- Cloudflare R2 free tier: a good modern option if you want custom domains later.
