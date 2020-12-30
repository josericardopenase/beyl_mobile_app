import { useContext } from "react";
import apiSettings from "./apiSettings";

const { create } = require("apisauce");

const apiClient = create({
    baseURL: apiSettings.url + '/v1/',
    headers : {Authorization: "Token a0350435d8e585a5744d7b16f20623152e29ee9c"}
})

export default apiClient