import axios from 'axios';

export default axios.create({
    baseURL: 'http://sobot.software/api',
    headers: {
        Accept: 'application/json',
    }
})