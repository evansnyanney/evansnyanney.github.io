# Evans Nyanney — Academic Website

Responsive GitHub Pages website with separate pages for Home, Research, Publications, Projects, Personal Statement and Contact.

## Publishing

1. Extract the ZIP contents. Upload **all** included HTML, CSS, JS and PDF files directly into the repository root of `evansnyanney/evansnyanney.github.io` (not an extra subdirectory).
2. Confirm `index.html`, `styles.css`, `script.js`, `cv.pdf`, and the other five HTML pages are alongside each other in `main`.
3. In Settings → Pages, select Deploy from a branch, `main`, `/(root)`.
4. Open https://evansnyanney.github.io/ after the GitHub Pages build finishes.

## Menu and CV

Click **Menu** at the top right to view all site pages plus the CV link. The `cv.pdf` file is an academic CV from the supplied files. Replace it with an updated CV as needed.

## Contact form and map

The map embeds Google Maps for **Ohio University, Athens, Ohio**, and includes an external link for browsers where embeds are restricted. The homepage and contact-page forms submit through FormSubmit's AJAX endpoint without leaving the page. Activate the recipient address by confirming FormSubmit's one-time email before relying on delivery. Messages are processed by that external service. Failed requests preserve the visitor's message, and successful requests show an inline confirmation. To change the recipient, update the form action on both pages. No live submissions were sent during development.

## Banner artwork

The homepage uses `assets/stanford-bunny-banner.png`, an AI-generated point-cloud illustration inspired by the Stanford bunny. It is decorative artwork, not a visualization of experimental research results.
