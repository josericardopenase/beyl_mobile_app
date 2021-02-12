import apiClient from './apiClient';

const validate = (key) => apiClient.post('invitation_code/validate/', {"key" : key})

export default {
    validate
}
