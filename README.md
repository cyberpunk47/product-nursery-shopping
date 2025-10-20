# 🌿 Paradise Nursery Shopping

A modern plant e-commerce web application built with React, TypeScript, and Tailwind CSS.

## Features

- 🏠 Beautiful landing page
- 🌱 Browse 30+ plants across 5 categories
- 🛒 Shopping cart with real-time updates
- ➕➖ Adjust quantities
- 💰 Automatic total calculation
- 🎨 Responsive design

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## Deployment

This project is configured for GitHub Pages deployment.

### Manual Deployment Steps:
1. Build the project: `npm run build`
2. Push to GitHub
3. Go to repository Settings → Pages
4. Set Source to "GitHub Actions"
5. The workflow will automatically deploy

### Live Demo
Once deployed, access at: `https://YOUR-USERNAME.github.io/paradise-nursery-shopping/`

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Context API
- Material-UI

## How to Use

1. Browse plants on the products page
2. Click "Add to Cart" (button turns grey when added)
3. View cart by clicking the cart icon
4. Adjust quantities with +/- buttons
5. Remove items with Delete button
6. Click Checkout to complete order

## Project Structure

```
src/
├── App.tsx                  # Main app with routing
├── CartContext.tsx          # Global cart state
├── LandingPage.tsx          # Home page
├── ProductListingPage.tsx   # Product catalog
├── ShoppingCartPage.tsx     # Shopping cart
└── Navbar.tsx               # Navigation
```

## License

MIT
