# Meteora 🛍️

![Banner](<./docs/banner.png>)

METEORA é um **challenge de uma loja online de roupas contemporâneas, casuais e sem gênero**.  
O projeto tem como foco o desenvolvimento web utilizando **React + TypeScript**, aplicando boas práticas de arquitetura, gerenciamento de estado e estilização.

🌐 **Deploy:** [https://meteora-zeta-ten.vercel.app/](https://meteora-zeta-ten.vercel.app/)

---

## 🚀 Funcionalidades

- 🛒 **Catálogo de produtos** – listagem completa e organizada.
- 🔎 **Busca** – por categorias e por produto.
- 🏬 **Nossas Lojas** – informações sobre unidades físicas.
- ✨ **Novidades & Promoções** – destaques e descontos.
- 👤 **Área do usuário** – Cadastro, Login e Perfil.
- ❤️ **Favoritos** – lista personalizada.
- 📦 **Carrinho de Compras** – adicionar, remover e visualizar itens.
- 📜 **Meus Pedidos** – histórico de compras.
- 📍 **Checkout** – endereço de entrega e formas de pagamento.
- 💳 **Pagamentos** – Pix | Boleto | Cartão.
- 📑 **Resumo final** – conferência antes da compra.

---

## 🗄️ Persistência de Dados

Como o projeto tem caráter **didático**, não existe um **back-end real**.  
Para simular essa camada de persistência, foram utilizados:

### 🔹 LocalStorage

- Endereço do usuário
- Carrinho de compras
- Dados do usuário
- Meus pedidos
- Favoritos

### 🔹 SessionStorage

- `accessToken`
- `refreshToken`
- `accessTokenExpiresIn`
- Dados do usuário logado

---

## 📌 Snippets Prontos

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

## 🛠️ Tecnologias

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

## 📂 Estrutura do Projeto

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
 ┗ 📜 README.md
```

---

## ⚙️ Como rodar localmente

```bash
git clone https://github.com/leonardoOluz/meteora.git
cd meteora
npm install
npm run dev
```

👉 Acesse: [http://localhost:5173](http://localhost:5173)

---

## Readme Vite

👉 Acesse: [Readme-vite](./README-VITE.md)

---

## 📷 Preview:

### Home

![Home](<./docs/2025-06-16%20(1).png>)

### Carrinho

![Carrinho](<./docs/2025-08-26%20(1).png>)

### Cadastre-se

![cadastre-se](<./docs/cadastrese.png>)


## 📦 Deploy

🔗 [https://meteora-zeta-ten.vercel.app/](https://meteora-zeta-ten.vercel.app/)

---

## 👨‍💻 Autor

**Leonardo O. Luz**

- Github: [@leonardoOluz](https://github.com/leonardoOluz)

---

## 📜 Licença

Este projeto é de **uso didático** e está licenciado sob a licença **MIT**.

---
## Readme Inglês

👉 Acesse: [README-EN](./README.en.md)