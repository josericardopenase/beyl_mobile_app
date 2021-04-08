import apiClient from "./apiClient";

const getDiet = () => apiClient.get('diet_client/')
const getDietDay = (id) => apiClient.get('diet_client/' + id + "/")

export default{
    getDiet,
    getDietDay

}