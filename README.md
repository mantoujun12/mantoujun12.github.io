# mantoujun12's Personal Website

[![GitHub Pages](https://img.shields.io/github/deployments/mantoujun12/mantoujun12.github.io/github-pages)](https://mantoujun12.github.io)
[![License](https://img.shields.io/github/license/mantoujun12/mantoujun12.github.io)](https://github.com/mantoujun12/mantoujun12.github.io/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/mantoujun12/mantoujun12.github.io?style=social)](https://github.com/mantoujun12/mantoujun12.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Eleventy](https://img.shields.io/badge/Eleventy-000000?style=flat&logo=eleventy&logoColor=white)](https://www.11ty.dev)

[简体中文](docs/README_zh-cn.md)

Hi there! This is my personal website, built from scratch as my very first web project.

## About

A static personal site hosted on GitHub Pages, crafted with vanilla HTML/CSS and powered by [Eleventy](https://www.11ty.dev/) as the static site generator. Simple, fast, and no framework overhead.

## Tech Stack

- **HTML5 / SCSS** — Core structure and styling
- **JavaScript** — Lightweight interactions
- **Eleventy** — Static site generation
- **GitHub Actions** — Automated deployment
- **GitHub Pages** — Hosting

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run serve

# Build for production
npm run build
```

## Project Packages

| Package | Version | Description |
|---------|---------|-------------|
| `@11ty/eleventy` | ^2.0.1 | Static site generator |
| `@11ty/eleventy-img` | ^6.0.4 | Image optimization |
| `@11ty/eleventy-plugin-syntaxhighlight` | ^5.0.2 | Code syntax highlighting |
| `autoprefixer` | ^10.5.2 | CSS autoprefixer |
| `postcss` | ^8.5.16 | CSS post-processor |
| `sass` | ^1.101.0 | SCSS compiler |

## Project Structure

```
├── src/                # Source content (input directory for Eleventy)
│   ├── _includes/      # Layouts and partials (Nunjucks templates)
│   ├── _data/          # Global data files
│   ├── style/          # SCSS stylesheets (compiled to _site/style/)
│   ├── js/             # JavaScript files (copied to _site/js/)
│   └── src.json        # Directory-level data (permalink, layout)
├── _site/              # Build output (git-ignored)
├── .eleventy.js        # Eleventy configuration
└── .github/workflows/  # CI/CD pipeline
```

## License

This project is licensed under the [MIT License](LICENSE).

> Content Contains AI-generated content.
