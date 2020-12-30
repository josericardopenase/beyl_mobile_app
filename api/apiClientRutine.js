import apiClient from "./apiClient";

const getRutine = () => apiClient.get('rutine_client/')
const getRutineDay = (id) => apiClient.get('rutine_client/' + id)

export default{
    getRutine,
    getRutineDay

}