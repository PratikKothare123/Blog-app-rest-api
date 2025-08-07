# 📝 Blog App (CRUD + REST API)

A simple blog application built with HTML, CSS, and JavaScript using `json-server` to simulate a backend API. Perform full CRUD operations (Create, Read, Update, Delete) via REST API.

## 🔧 Features

- View all blog posts
- Add new blog
- Edit and delete existing blog posts
- Data stored using JSON Server (REST API)
- Responsive and clean UI

## 📁 Folder Structure
blog-app/
│
├── index.html # Blog listing
├── add.html # Add new blog
├── edit.html # Edit blog post
├── style.css # Styling
├── script.js # All JS logic
├── db.json # Fake backend data (JSON Server)


## 🔗 API Endpoints

- `GET /blogs` – fetch all posts
- `POST /blogs` – create new post
- `GET /blogs/:id` – fetch one post
- `PUT /blogs/:id` – update post
- `DELETE /blogs/:id` – delete post
