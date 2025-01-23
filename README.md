# Social Links Profile

![Design preview](images/preview.jpg)

This repository contains my solution for the **Frontend Mentor - Social Links Profile Challenge**. The challenge focuses on creating a responsive and accessible profile card featuring social links with interactive hover and focus states. The project is built using semantic HTML, modern CSS techniques, and SCSS for efficient styling.

---

## 📋 Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Preview](#preview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Meta Information](#meta-information)
- [Refactoring Plan](#refactoring-plan)
- [Learnings](#learnings)
- [Author](#author)

---

## 📖 Overview

### Features

- **Responsive Design**: Adapts seamlessly to different screen sizes.
- **Interactive States**: Buttons have hover, focus, and active states for better UX.
- **Accessibility**: Semantic markup and focus management ensure a11y compliance.
- **SCSS Workflow**: Modular and maintainable styling using SCSS.

### Preview

Here’s how the project looks:

![Mobile View](images/mobile-design.jpg)
![Desktop View](images/destkop-design.jpg)
![Active State](images/active-states.jpg)

---

## 🛠 Technologies Used

- **HTML5**: Semantic and accessible structure.
- **CSS3**: Custom properties and modern layout techniques.
- **SCSS**: Modular and reusable styles.
- **Normalize.css**: Browser consistency for styles.

---

## ⚙️ Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/GeorgePapalazaridis/social-links-profile.git
   ```
2. Navigate to the project directory:
   ```bash
   cd social-links-profile
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Compile SCSS:
   ```bash
   npm run sass
   ```
5. Open `index.html` in your browser or use a live server to preview the project.

---

## 🌐 Meta Information

Here are the meta tags added for improved SEO and social sharing:

```html
<meta
  name="description"
  content="A responsive and accessible social links profile card built with HTML, CSS, and SCSS. Features interactive hover and focus states for enhanced user experience."
/>
<meta property="og:title" content="Social Links Profile" />
<meta
  property="og:description"
  content="A responsive and accessible social links profile card. Built with semantic HTML, modern CSS, and SCSS."
/>
<meta property="og:image" content="./preview.jpg" />
<meta
  property="og:url"
  content="https://github.com/GeorgePapalazaridis/social-links-profile"
/>
<meta name="twitter:card" content="summary_large_image" />
```

---

## 🔄 Refactoring Plan

To improve maintainability, I plan to:

- Refactor the `<li>` button code into a reusable HTML component.
- Create a SCSS mixin for button styling to ensure consistent styles across all buttons.
- Example refactored component:

  ```html
  <li class="button">
    <a href="{{ href }}" target="_blank" rel="noopener noreferrer">
      {{ label }}
    </a>
  </li>
  ```

- Dynamically inject `href` and `label` values through a templating engine or JavaScript.

---

## ✨ Learnings

- Practiced advanced CSS techniques like `focus-within` and `active` states for buttons.
- Improved knowledge of SCSS modularity and the use of variables for consistent design.
- Enhanced understanding of accessibility best practices with focus management and semantic HTML.

---

## 👤 Author

- GitHub - [@GeorgePapalazaridis](https://github.com/GeorgePapalazaridis)
- Frontend Mentor - [@GeorgePapalazaridis](https://www.frontendmentor.io/profile/GeorgePapalazaridis)
- LinkedIn - [George Papalazaridis](https://www.linkedin.com/in/george-papalazaridis-865689120/)

---

Feel free to reach out for feedback or collaboration! ✨
