import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"

export default ({
    userName : username,
    password,
    }) => dispatch => {
        dispatch({
            type : LOGIN_LOADING,
        })
    axiosInstance.post('/auth/login' , {username,password}).then(res=>{
        console.log(res.data);
        AsyncStorage.setItem('token',res.data.token);
        AsyncStorage.setItem('user',JSON.stringify(res.data.user));
            dispatch({
               
                type : LOGIN_SUCCESS,
                payload : res.data,
            })
        }).catch(err=>{
            console.log(err);
            dispatch({
                type : LOGIN_FAIL,
                payload : err.response
                ? err.response.data
                :{error:'No Internet Connection'},
            });
        })
}