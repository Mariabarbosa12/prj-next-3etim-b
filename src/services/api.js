import axios from "axios";

const linkApi = process.env.NEXT_PULIC_API_URL || 'http://localhost:3333'; 

const api = axios.create({
    baseURL: linkApi,   
});

export default api;