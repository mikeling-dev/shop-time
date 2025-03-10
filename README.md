# E-commerce Shopping Site with Vite.js

A modern, responsive e-commerce application built with React and Tailwind CSS, featuring a dynamic shopping cart, product searching + filtering, and checkout functionality.

## Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router DOM
- Context API

### State Management

- React Context API for global cart state management
- Local state management using useState hooks

### Custom Hooks

- `useCart` - Managing cart operations (add, remove, update quantity)
- `useCategory` - Handling product category filtering
- `useLocalStorage` - Persistent cart storage

### Components

#### Reusable Components

- `ProductCard` - Display individual product information
- `Cart` - Sliding cart sidebar with scroll functionality
- `Layout` - Page wrapper with cart state management
- `Loading` - Loading state component

#### Features

- Responsive design using Tailwind CSS breakpoints
- Dynamic product filtering by category
- Real-time search functionality
- Shopping cart with persistent storage
- Checkout page with order summary
- Background scroll lock when cart is open

## Key Features

### Product Management

- Display products in a responsive grid layout
- Filter products by category
- Search products by name
- Product details display

### Shopping Cart

- Add/remove items
- Update quantities
- Calculate subtotals and total
- Persistent cart data using localStorage
- Sliding cart sidebar with scroll functionality

### Checkout Process

- Order summary table
- Item quantity management
- Total calculation
- Responsive layout

## State Management Implementation

- Global cart state using Context API
- Component-level state for UI interactions
- Custom hooks for reusable logic

## Styling

- Fully responsive design
- Mobile-first approach
- Custom Tailwind CSS classes
- Clean and modern UI

## Performance Optimizations

- Efficient state updates
- Memoized components where necessary
- Optimized re-renders
- Local storage for persistence

## Future Enhancements

- User authentication
- Payment integration
- Order history
- Product reviews
- Wishlist functionality

## Getting Started

bash

### Clone the repository

- git clone [https://github.com/mikeling-dev/shop-time.git]

### Install dependencies

- npm install

### Start the development server

- npm run dev

## Project Structure

src/

- ├── components/
- │ ├── Cart.jsx
- │ ├── Layout.jsx
- │ ├── Loading.jsx
- │ └── ProductCard.jsx
- ├── context/
- │ └── CartContext.jsx
- ├── hooks/
- │ ├── useCart.js
- │ ├── useCategory.js
- │ └── useLocalStorage.js
- ├── pages/
- │ ├── Home.jsx
- │ └── Checkout.jsx
- └── App.jsx
