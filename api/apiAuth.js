import apiClient from './apiClient';

const login = (email, password) => apiClient.post('login/athletes/', {email : email, password : password})
const register = (fields) => apiClient.post('register_athlete/', fields)
const saveToken = (token) => apiClient.post('profile/expoToken/', {token : token})

export default {
    login,
    register,
    saveToken
}
