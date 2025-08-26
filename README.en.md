# Meteora 🛍️  

**Meteora** is a **challenge project of an online store** for contemporary, casual, and genderless clothing.  
The main goal is to practice **web development with React + TypeScript**, applying best practices in architecture, state management, and styling.  

🌐 **Live Demo:** [https://meteora-zeta-ten.vercel.app/](https://meteora-zeta-ten.vercel.app/)  

---

## 🚀 Features  

- 🛒 **Product Catalog**  
- 🔎 **Search by categories or product**  
- 🏬 **Our Stores**  
- ✨ **New Arrivals & Promotions**  
- 👤 **User Area** (Register, Login, Profile)  
- ❤️ **Favorites**  
- 📦 **Shopping Cart**  
- 📜 **My Orders**  
- 📍 **Checkout** (Shipping Address & Payment)  
- 💳 **Payments** (Pix | Boleto | Credit Card)  
- 📑 **Order Summary**  

---

## 🗄️ Data Persistence  

This project is **educational** and does not have a real **back-end**.  
Data persistence is simulated with **LocalStorage** and **SessionStorage**:  

### 🔹 LocalStorage  
- User Address  
- Shopping Cart  
- User Data  
- My Orders  
- Favorites  

### 🔹 SessionStorage  
- `accessToken`  
- `refreshToken`  
- `accessTokenExpiresIn`  
- Logged User Data  

---

## 📌 Ready-to-Use Snippets  

### 🗃️ LocalStorage  

```ts
localStorage.setItem("userAddress", JSON.stringify(address));
const address = JSON.parse(localStorage.getItem("userAddress") || "null");

localStorage.setItem("cart", JSON.stringify(cartItems));
const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

localStorage.setItem("favorites", JSON.stringify(favorites));
const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
```

### 🔑 SessionStorage  

```ts
sessionStorage.setItem("accessToken", accessToken);
sessionStorage.setItem("refreshToken", refreshToken);
sessionStorage.setItem("accessTokenExpiresIn", expiresIn.toString());

const accessToken = sessionStorage.getItem("accessToken");
const refreshToken = sessionStorage.getItem("refreshToken");
const expiresIn = sessionStorage.getItem("accessTokenExpiresIn");

sessionStorage.setItem("loggedUser", JSON.stringify(user));
const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser") || "null");
```

---

## 🛠️ Technologies  

- ⚛️ **React 19 (RC)**  
- 🟦 **TypeScript**  
- 🎨 **styled-components**  
- 🛠️ **Redux Toolkit** + **Redux-Saga**  
- 🌐 **Axios**  
- 🔄 **React Router DOM**  
- 📦 **React Hook Form**  
- 🎯 **React Icons**  
- 🎞️ **Swiper**  
- ✅ **React Toastify**  
- 🧾 **React QR Code** + **React Barcode**  
- 🛡️ **Vite**  

---

## 📂 Project Structure  

```bash
📦 meteora
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 store
 ┃ ┣ 📂 services
 ┃ ┣ 📂 utils
 ┃ ┣ 📂 styles
 ┃ ┗ 📜 main.tsx
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 vite.config.ts
 ┗ 📜 README.en.md
```  

---

## ⚙️ How to Run Locally  

```bash
git clone https://github.com/leonardoOluz/meteora.git
cd meteora
npm install
npm run dev
```

👉 Access: [http://localhost:5173](http://localhost:5173)  

---

## 📦 Deployment  

🔗 [https://meteora-zeta-ten.vercel.app/](https://meteora-zeta-ten.vercel.app/)  

---

## 👨‍💻 Author  

**Leonardo O. Luz**  
- Github: [@leonardoOluz](https://github.com/leonardoOluz)  

---

## 📜 License  

This project is for **educational purposes** and licensed under the **MIT License**.  

---
