# Mini-CRM

A small CRM (Customer Relationship Management) project built with the **PERN stack** (PostgreSQL, Express.js, React, Node.js).  
This project demonstrates a simple system for managing customer data with CRUD operations, server-side pagination, search, sorting, and a simple UI for managing customers.

---

## 📋 Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies & Stack Explanation](#technologies--stack-explanation)
- [Architecture & Flow](#architecture--flow)
- [Installation & Run](#installation--run)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Author](#author)

---

## Description

This application allows you to:

- View a list of customers with pagination and sorting  
- Search customers by name, email, company, or position  
- Add new customers  
- Edit existing customers  
- Delete customers  

The backend is built with **Node.js + Express.js** and connected to a **PostgreSQL** database.  
The frontend is made with **React (Vite)** and styled with **Tailwind CSS**.  

---

## Live Demo

Try it online via our [Live Demo](https://mini-crm-frontend-exsv.onrender.com)!

---

## Features

- Customers CRUD (Create, Read, Update, Delete)  
- Server-side pagination, sorting, and search  
- Add / edit / delete customers via modal  
- Realtime UI updates without page refresh  
- Context-based state management for shared UI state  
- Responsive frontend built with **React + Tailwind CSS**  
- Full **PERN stack** setup (PostgreSQL, Express.js, React, Node.js)

---

## Technologies & Stack Explanation

- **PostgreSQL** — relational database to store customer data
- **Express.js / Node.js** — backend REST API
- **React (Vite)** — frontend framework for building the UI
- **pg** — PostgreSQL client for Node.js
- **Tailwind CSS** — utility-first styling
- **axios** — for HTTP requests from frontend

---

## Architecture & Flow

1. React frontend sends HTTP requests to the backend API.
2. Express.js backend receives requests and queries PostgreSQL.
3. Backend returns JSON data.
4. Frontend updates the UI and state based on API responses.
5. Pagination, sorting, and search are handled on the server.

---

## Installation & Run

### Backend

```bash
cd backend
npm install
npm i express pg cors dotenv
```

Create a `.env` file inside `backend/` with the following:

```env
PORT=3999
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5173
DB_NAME=your_db_name
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm i axios react-router-dom tailwindcss @tailwindcss/vite
```

Create a `.env` file inside `frontend/` with the following:

```env
VITE_API_URL=http://localhost:3999/api/customers
```

```bash
npm run dev
```

Frontend will be available at:
http://localhost:5173

---

## Project Structure

```
mini-crm/
├─ backend/
│  ├─ db.js           # PostgreSQL connection pool
│  ├─ index.js        # Express server setup
│  ├─ routes/
│  │  └─ customers.js # REST API routes for customers
│  └─ package.json
├─ frontend/
│  ├─ src/
│  │  ├─ App.jsx
│  │  ├─ components/
│  │  │  ├─ CustomersList.jsx
│  │  │  ├─ CustomerModal.jsx
│  │  │  ├─ Pagination.jsx
│  │  │  ├─ TopBar.jsx
│  │  │  ├─ SortDropdown.jsx
│  │  │  └─ SearchInput.jsx
│  │  ├─ context/CustomersContext.jsx
│  │  └─ utilities/api.js
│  └─ package.json
```

---

## API Endpoints

| Method | Endpoint          | Description                  |
| ------ | ---------------- | ---------------------------- |
| GET    | /customers        | Get all customers            |
| POST   | /customers        | Add a new customer           |
| PUT    | /customers/:id    | Update a customer            |
| DELETE | /customers/:id    | Delete a customer            |

---

## Author

**Taras Poiatsyka**\
[GitHub](https://github.com/tvsxar)