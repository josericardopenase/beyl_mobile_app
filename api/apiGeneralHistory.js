import apiClient from "./apiClient";

const getHistory = () => apiClient.get('general_history/')
const getHistoryPaged = (num, page) => apiClient.get('general_history/?page=' + num + '&page_size=' + page)
const postHistory = (date, time, name, has_distance, distance) => apiClient.post('general_history/', {date: date, time: time, name: name,  has_distance: has_distance, distance: distance} )

export default{
    getHistory,
    getHistoryPaged,
    postHistory

}