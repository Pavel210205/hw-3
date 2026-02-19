import axios from 'axios';
import { log } from 'utils/log';
const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_BASE_URL;
const STRAPI_URL = `${STRAPI_BASE_URL}/api`;
const STRAPI_TOKEN = import.meta.env.VITE_API_TOKEN;
log(STRAPI_URL);
log(STRAPI_TOKEN);
const response = await axios.get(`${STRAPI_URL}/products`, {
  headers: {
    Authorization: `Bearer `,
  },
});
export const products = response.data;
