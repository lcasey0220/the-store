import axios from 'axios';
import Auth from '../Modules/Auth';

export default {

    saveNewUser: (userData) => {
        return axios.post('/auth/signup', userData);
    },

    saveNewStore: (storeData) => {
        return axios.post('/auth/admin', storeData);
    },

    loginUser: (userData) => {
        return axios.post('/auth/login', userData);
    },

    getUserFromToken: () => {
        const data = { token: Auth.getToken() };
        return axios.post('/auth/dataFromToken/', data);
    },
    
    getStore: (storeData) => {
        return axios.get(`/public/getStore/`);
    },
    
    updateUser: (userData) => {
        return axios.post('/api/updateUser', { userData: userData, token: localStorage.getItem('token') });
    },

}