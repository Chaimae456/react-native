import { useNavigation } from '@react-navigation/native';
import React, {useContext, useState } from 'react';
import RegisterContainer from '../component/signup';
import { LOGIN } from '../constants/routeName';
import register, { clearAuthState } from '../context/actions/auth/register';
import { GlobalContext } from '../context/provider';
import { useFocusEffect } from '@react-navigation/native';

const Register = () => {
   
    const [form , setForm] =  useState({});
    const [errors , setErrors] =  useState({});
    const {authDispatch , authState:{error , loading,data}}= useContext(GlobalContext);
    const {navigate} = useNavigation();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    React.useEffect(()=>{
        if(data){
            navigate(LOGIN)
        }
    }, [data])

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                if(data || error){
                    clearAuthState()(authDispatch);
                }
            }
        }, [data,error])
      );

    const onChange = ({name , value}) => {
        setForm({...form , [name] : value});
        
        if(value!==''){
            if (name === 'password'){
                if(value.length < 8){
                    setErrors(prev=>{
                     return{...prev , [name]: "Your password needs min 8 characters !"}
                    });    
                }else{
                    setErrors(prev=>{
                        return{...prev , [name]: null}
                    });
                }
            }else if (name === 'email'){
                if (!value.match(mailformat)){
                    setErrors(prev=>{
                        return{...prev , [name]: "Insert a valid email Adress"}
                       }); 
                }else{
                    setErrors(prev=>{
                        return{...prev , [name]: null}
                    });
                }
            }else{
                setErrors(prev=>{
                    return{...prev , [name]: null}
                });
            }
        }else{
            setErrors(prev=>{
                return{...prev , [name]: "This field is required !"}
            });
        }
    };
    const onSubmit = () => {
        //validation 
        if (!form.username){
            setErrors(prev=>{
                return{...prev , username : "Please insert your user name"}
            });
        }
        if (!form.firstName){
            setErrors(prev=>{
                return{...prev , firstName : "Please insert your first name"}
            });
        }
        if (!form.lastName){
            setErrors(prev=>{
                return{...prev , lastName : "Please insert your last name"}
            });
        }
        if (!form.email){
            setErrors(prev=>{
                return{...prev , email : "Please insert your email"}
            });
        }
        if (!form.password){
            setErrors(prev=>{
                return{...prev , password:"Please insert your password"}
            });
        }
        if(Object.values(form).length===5 && 
            Object.values(form).every(item => item.trim().length>0) &&
            Object.values(errors).every(item => !item)
            ){
                register(form)(authDispatch);
            }
    };
return(

<RegisterContainer
onChange={onChange}
onSubmit={onSubmit}
form={form}
errors={errors}
error={error}
loading ={loading}
/>
);
}


export default Register;



