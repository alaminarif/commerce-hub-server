# Commerce-hub Backend

A **Commerce-hub Backend** built with **Node.js, Express, MongoDB, and Zod**.  
This project supports **catalog browsing, guest-first cart management, promo codes, checkout, and order management**.

---

## 🚀 Features

- **Catalog**

  - Products with variants & prices
  - CRUD APIs

- **Cart (Guest-first)**

  - Create / fetch cart using a token
  - Add, update, remove items
  - Apply promo codes

- **Promotions**

  - Percentage or fixed discount
  - Validity window

- **Checkout & Orders**

  - Create order from cart
  - Track & update order status

- **Validation & Error Handling**
  - Input validation with **Zod**
  - Unified error response shape
  - Request logging middleware

---

## 🛠 Tech Stack

- **Node.js (LTS)** + **Express.js**
- **MongoDB** + **Mongoose**
- **Zod** – input validation
- **CommonJS** module system
- **Postman collection** for API testing

---

# API Endpoints

## Products

- **POST** `/products` → Create product
- **GET** `/products` → List products
- **GET** `/products/:id` → Get single product

## Cart

- **POST** `/cart` → Create cart (returns token)
- **GET** `/cart/:token` → Fetch cart
- **POST** `/cart/:token/items` → Add item
- **PATCH** `/cart/:token/items/:itemId` → Update item
- **DELETE** `/cart/:token/items/:itemId` → Remove item
- **POST** `/cart/:token/apply-promo` → Apply promo

## Promotions

- **POST** `/promos` → Create promo
- **GET** `/promos` → List promos

## Orders

- **POST** `/orders/checkout/:cartToken` → Checkout cart into order
- **GET** `/orders/:id` → Get order details
- **PATCH** `/orders/:id/status` → Update order status

## Validation with Zod

Example error response if validation fails:

```json
{
  "error": "ValidationError",
  "details": [
    { "field": "name", "message": "Product name is required" },
    { "field": "variants[0].price", "message": "Price must be greater than 0" }
  ]
}
```

## 📬 Postman Collection

Import the provided Postman collection:  
`ecommerce.postman_collection.json`

It contains requests for:

- 🛍️ Products
- 🛒 Cart
- 🎟️ Promos
- 📦 Orders

### Start the development server

```bash
yarn dev
```

## 📂 Project Structure

```bash
Commerce-hub-backend/
    src/app/
        │── controllers/ # Business logic
        │── models/ # Mongoose models
        │── routes/ # Express routes
        │── validations/ # Zod schemas
        │── middleware/ # Validation & logging
        │── utils/ # Helper functions
    │── app.js # Express app setup
    │── server.js # Server entry point
  │── README.md # Documentation
```
