import apiClient from './apiClient';

const login = (email, password) => apiClient.post('login/athletes/', {email : email, password : password})
const register = (fields) => apiClient.post('register_athlete/', fields)

export default {
    login,
    register
}
