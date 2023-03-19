import axios from "axios";
import { API_URL, API_TOKEN } from '@env';
 
console.log(API_TOKEN)

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: API_TOKEN
    }
});