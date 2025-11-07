import { $host } from ".";
import { base_url } from "./base_url";
const api = import.meta.env.VITE_API_KEY;

export const getWeather = async (city) => {
 const response = await $host.get('forecast.json', {
    params: {q: city, days: 7, key: api, lang: 'eng'}
 })
 return response
}