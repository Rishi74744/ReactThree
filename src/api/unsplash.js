import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1ed03586330ae4c9f5488b98cce4b53f13ef85e0b7c5de71f7a30c0afedf7812'
    }
});