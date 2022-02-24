import { CLEAR_AUTH_STATE, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes";

const auth = (state , {type , payload}) =>{
    switch (type) {
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            return {
                ...state,
                loading:true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading:false,
                data: payload,
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                loading:false,
                error : payload,
            };
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                data:null,
                error : null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                data: payload,
                IsLoggedIn:true
            };
        case LOGOUT_USER:
            return{
                ...state,
                loading:false,
                data: null,
                IsLoggedIn:false
            }
        default:
            return state ;
    }
};
export default auth;