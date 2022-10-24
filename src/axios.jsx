import axios from 'axios';
import { baseUrl } from './src/Constants/Constants';
const instance =axios.create({
    baseURL:baseUrl,

});

export default instance