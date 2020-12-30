import apiClient from "./apiClient";

const getExerciseList = () => apiClient.get('rutine_client/')
const getExercise = (id) => apiClient.get('excersise/' + id)

export default{
    getExerciseList,
    getExercise

}