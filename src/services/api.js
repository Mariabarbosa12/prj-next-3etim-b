import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiPorta = process.env.NEXT_PUBLIC_API_PORTA; // 2. Importar a porta

const baseURL = `${apiUrl}:${apiPorta}`; 
const linkApi = baseURL || 'http://localhost:3333'; 

const api = axios.create({
});

export default api;