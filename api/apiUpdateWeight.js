import apiClient from "./apiClient";

const getWeight = () => apiClient.get('weight_update/')
const postWeight = (weight) => apiClient.post('weight_update/', {data: weight} )

export default{
    getWeight,
    postWeight

}