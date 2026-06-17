# 🚀 HOW TO RUN THE PROJECT (STUDENT SUBMISSION)

This project has been successfully completed individually. Below are the official instructions on how to run both the backend and frontend servers using two separate terminals.

### 1. Run the Backend Server
1. Open a terminal window and navigate to the backend folder:
   ```bash
      cd back
   ```
2. Install dependencies:
   ```bash
      npm install
   ```
3. Start the server:
  ```bash
     npm run dev
  ```
The backend will run on `http://localhost:5005`

### 2. Run the Frontend Server
Open a second (new) terminal window and navigate to the frontend folder:

1. cd front
2. Install dependencies:
   ```bash
      npm install
   ```
3. Start the Next.js development server: 
  ```bash
     npm run dev
  ```
*The frontend will run on `http://localhost:3000`*

### ✨ Implemented Features Summary:
* **JWT Token Stashing:** Saved securely in `localStorage` on successful login.
* **Route Guard:** Unauthenticated users are strictly auto-redirected to `/login` from the homepage.
* **Suspense Implementation:** Handled correctly for `useSearchParams` on the login page to display the success banner.
* **Bonus - JWT Decode:** Dynamically extracts and displays the logged-in user's email on the homepage using client-side decoding.

---
## Original Lab Instructions below:

# Lab: Keep Me Logged In

## Introduction
This lab is about storing a token in the browser's `localStorage` and using it to keep someone logged in.

## The API
The backend lives in the `back/` folder and runs on http://localhost:5005.
* `POST /signup` - creates a user.
* `POST /login` - checks credentials and returns a token.

## What you will build
- A working sign up form that creates a user, then sends them to login.
- A working login form that gets the token and saves it.
- A home page that reads the saved token, greets the user, and lets them log out.