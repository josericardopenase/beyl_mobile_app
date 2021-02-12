import * as SecureStore from 'expo-secure-store';

const key = "user";

const setUser = async token => {
    try{
        await SecureStore.setItemAsync(key, token);
    }catch(error){
        console.log("Error storing token", error);
    }
}

const getUser = async () => {
    try{
        return await SecureStore.getItemAsync(key);
    }catch(error){
        console.log("Error storing token", error);
    }
}

const removeUser = async () => {
    try{
        return await SecureStore.deleteItemAsync(key);
    }catch(error){
        console.log("Error removing the auth token", error);
    }
}

export default {setUser, getUser, removeUser}