import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import LoginContainer from '../component/login';
import loginUser from '../context/actions/auth/loginUser';
import { GlobalContext } from '../context/provider';


const logIn = ()=>{
    const [form , setForm] =  useState({});
    const {authDispatch , authState:{error,loading}}= useContext(GlobalContext);
    const onSubmit = () =>{
        console.log(form);
        if(form.userName && form.password){
            console.log(form);
            loginUser(form)(authDispatch);
            
        }
    }
    const onChange = ({name , value}) => {
        setForm({...form , [name] : value});
    }
return(
<LoginContainer 
onChange={onChange}
onSubmit={onSubmit}
form={form}
error={error}
loading ={loading}
/>  
);
}

export default logIn;



