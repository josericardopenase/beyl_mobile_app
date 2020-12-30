import apiClient from "./apiClient";

const getRecipeList = () => apiClient.get('recipe/')
const getRecipe = (id) => apiClient.get('recipe/' + id)

export default{
    getRecipeList,
    getRecipe

}