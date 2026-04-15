# Asset Upload Guide

## Chosen Storage: GitHub Releases

I chose **GitHub Releases** for this project because it is the least disruptive option for a portfolio repository:

- It stays inside GitHub, so you do not need a second platform just to host media.
- It is a good fit for large static assets that should not live in normal repository history.
- GitHub's official docs say a single release can include up to **1000 assets**, each asset must be **under 2 GiB**, and there is **no total release-size or bandwidth cap** listed for releases.

## Current Project Status

The first public asset bundle for this repository has already been created:

- Repository: `jolene718/Curiosit-Atelier`
- Release tag: `assets-v1`

You can reuse the same release for now, or create `assets-v2` later if you want to upload updated media without changing old links.

## Assets Recommended for Upload

- `view_video.mp4`
- `img/banner1.jpg`
- `img/banner2.jpg`
- `img/banner3.jpg`
- `img/banner5.jpg`
- `img/model1.jpg`
- `img/model2.jpg`
- `img/model3.jpg`
- `img/surfing.jpg`
- `img/W1.jpg`
- `img/W4.jpg`

## Upload Steps

1. Push the cleaned repository to GitHub first.
2. Open the repository page on GitHub.
3. In the right sidebar or top navigation area, open `Releases`.
4. Click `Draft a new release`.
5. In `Choose a tag`, create a tag such as `assets-v1`.
6. Set the release title to something like `Portfolio media assets`.
7. In the asset upload area, drag in `view_video.mp4` and the large images listed above.
8. Wait for every upload to finish before publishing.
9. Click `Publish release`.

## How to Copy the Public Asset Links

After publishing:

1. Open the release page you just created.
2. Under `Assets`, right-click each uploaded filename.
3. Copy the asset URL.
4. Save those URLs into a small mapping list.

Example mapping format:

```txt
view_video.mp4 -> https://github.com/<your-user>/<your-repo>/releases/download/assets-v1/view_video.mp4
img/banner1.jpg -> https://github.com/<your-user>/<your-repo>/releases/download/assets-v1/banner1.jpg
```

## Which Files To Replace In Code

- `Home_Page.html`: replace the `view_video.mp4` video source.
- `Features.html`: replace the large banner image paths if you upload them.
- `Men.html`: replace large hero images if you decide to externalize them.
- `Women.html`: replace `W1.jpg` and `W4.jpg` if you externalize them.

## After Upload

Once you have the URLs:

1. Send me the mapping list.
2. I will replace the local paths in your HTML files with the release URLs.
3. We can then keep the large files out of the Git repository while preserving page behavior.

## Notes

- Keep filenames simple when uploading; avoid renaming them twice if possible.
- If you update an asset later, create a new release tag such as `assets-v2` so links stay predictable.
- For the GitHub Pages site itself, keep `index.html` at the root of the published branch.
