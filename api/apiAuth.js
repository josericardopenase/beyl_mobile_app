import apiClient from './apiClient';

const login = (email, password) => apiClient.post('login/athletes/', {email : email, password : password})

export default {
    login
}
