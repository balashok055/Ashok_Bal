# Ashok Bal Portfolio Website

A responsive personal portfolio website for Ashok Bal, an IT Support Technician based in Sydney, NSW.

The site highlights professional experience, technical skills, education, contact details, and a downloadable resume.

## Live Sections

- Hero introduction with contact actions
- Professional summary
- Technical skills
- Soft skills
- Professional experience timeline
- Education
- Resume download link
- Email, phone, and LinkedIn links

## Built With

- HTML5
- CSS3
- JavaScript

No external build tools are required. The website runs directly in the browser.

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── assets
│   └── Resume.pdf
└── README.md
```

## How To Run Locally

1. Download or clone this repository.
2. Open `index.html` in any modern web browser.

That is all. Because this is a static website, no server setup is required.

## Customization

To update the resume, replace:

```text
assets/Resume.pdf
```

To update personal details, edit:

```text
index.html
```

To update colors, spacing, layout, or responsive styling, edit:

```text
styles.css
```

To replace the profile initials with a photo, place your image in the `assets` folder and update the portrait section in `index.html`.

Example:

```html
<div class="portrait">
  <img src="assets/my-photo.jpg" alt="Ashok Bal">
</div>
```

Then add or keep this CSS:

```css
.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
```

## Deployment

This site can be deployed with any static hosting provider, including:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

For GitHub Pages:

1. Push the project to a GitHub repository.
2. Go to repository `Settings`.
3. Open `Pages`.
4. Select the branch, usually `main`.
5. Save and wait for GitHub to publish the site.

## Contact

Ashok Bal  
Sydney, NSW  
Email: balashok055@gmail.com  
LinkedIn: https://www.linkedin.com/in/ashok-bal
