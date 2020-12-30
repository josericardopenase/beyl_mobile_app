import apiClient from './apiClient';

const login = (email, password) => apiClient.post('login/', {email : email, password : password})

export default {
    login
}
