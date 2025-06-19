import axios from "axios";

const apiCep = axios.create({
  baseURL: "https://viacep.com.br/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiCep;
