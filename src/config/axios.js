import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://newsapi.org/v2/",
});

export default clienteAxios;
