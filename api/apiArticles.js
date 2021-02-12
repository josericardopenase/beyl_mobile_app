import apiClient from "./apiClient";

const getArticles = (pageNum, pageSize) => apiClient.get('articles/?page=' + pageNum + '&page_size=' + pageSize)

export default{
    getArticles,

}