import apiClient from './apiClient';

const validate = (key) => apiClient.post('invitation_code/validate/', {"key" : key})
const joinTrainer = (key) => apiClient.post('invitation_code/join_trainer/', {"key" : key})

export default {
    validate,
    joinTrainer
}
