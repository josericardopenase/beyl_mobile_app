import apiClient from './apiClient';

const getProfile = () => apiClient.get('profile/')
const getProfileAthlete = () => apiClient.get('profile/athlete/')

export default {
    getProfile,
    getProfileAthlete
}
