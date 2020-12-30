import * as SecureStore from 'expo-secure-store';

const key = "user";

const setUser = async authUser => {
    try{
        await SecureStore.setItemAsync(key, JSON.stringify(authUser));
    }catch(error){
        console.log("Error storing token", error);
    }
}


const getUser = async () => {
    try{
        return await SecureStore.getItemAsync(key).then(data => data ? JSON.parse(data) : undefined);
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