import apiClient from './apiClient';

const getProfile = () => apiClient.get('profile/')
const getProfileAthlete = () => apiClient.get('profile/athlete/')
const modifyProfileAthlete = (data) => apiClient.put('profile/athlete/', data)
const modifyProfile = (data) => apiClient.put('profile/edit/', data)
const changePassword = (data) => apiClient.put('profile/change_password', data)

export default {
    getProfile,
    getProfileAthlete,
    modifyProfile,
    changePassword,
    modifyProfileAthlete
}
