import axios from "axios";
import { base_url } from "./base_url";

const $host = axios.create({
    baseURL: base_url,
    headers: {'Content-Type' : 'application/json'},
})

export {
    $host
}