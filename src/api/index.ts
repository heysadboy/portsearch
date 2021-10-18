import axios from "axios";

const API_KEY = "mn3KroIjqO2wORtoUDMdh0j93DW2ZgkMDUJa8R90";
const BASE_URL = "https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-api-key": API_KEY
    }
});
