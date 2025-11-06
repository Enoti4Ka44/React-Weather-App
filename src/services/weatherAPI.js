import { $host } from ".";
import { base_url } from "./base_url";
const api = import.meta.env.VITE_API_KEY;

export const getCurrentWeather = async (city) => {
 const response = await $host.get('current.json', {
    params: {q: city, key: api, lang: 'eng'}
 })
 return response
}