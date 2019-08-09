import axios from 'axios';

export const get = (url) => axios.get(url).catch((error) => console.log(error));
