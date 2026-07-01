# Seven70 Photography Website

A responsive static website for Seven70 Photography.

## Pages
- index.html
- portfolio.html
- about.html
- services.html
- blog.html
- contact.html

## How to replace photos
Place your photos inside `assets/images/` folders, then replace a placeholder block like:

```html
<div class="tile"></div>
```

with:

```html
<div class="tile"><img src="assets/images/motorsport/my-photo.jpg" alt="Motorsport photo by Seven70 Photography"></div>
```

## Hero image
In `index.html`, replace the hero style with your own image:

```html
<section class="hero" style="--hero:url('assets/images/hero/hero.jpg')">
```

## Contact email
In `contact.html`, replace `your-email@example.com` with your real email address.

## GitHub Pages
Upload these files to a GitHub repository, then go to Settings > Pages and publish from the main branch.
