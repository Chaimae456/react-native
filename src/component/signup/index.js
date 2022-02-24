import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Image, Text, TouchableOpacity, Button}  from 'react-native';
import {LOGIN} from '../../constants/routeName';
import Container from '../Common/Container/index';
import CustomButton from '../Common/CustomButton';
import Input from '../Common/Input';
import Message from '../Common/Message';
import styles from './styles';

const RegisterContainer = ({onSubmit,onChange,errors,error,loading}) => {
 const {navigate} = useNavigation();
 const [isSecureEntry , setIsSecureEntry] = useState(true);
  return (
    <Container >
        <Image width={50} height={70} source={require('../../assets/images/logo.png')} style={styles.logoImage} />
        
        <View>
          <Text style={styles.title}>WELCOME TO CONTACTAPP</Text>
          <Text style={styles.subTitle}>Create a free account</Text>
          {error?.error&&(<Message
          danger
          onDismiss={()=>{}}
           message={error.error}
           /> )}
          <View style={styles.form}>
          <Input
        label="First Name"
        placeholder="Enter First Name"
        onChangeText={(value) =>{
          onChange({name:"firstName" , value});
        }}
        error = {errors.firstName || error?.first_name?.[0]}
      />
        <Input
        label="Last Name"
        placeholder="Enter Last Name"
        onChangeText={(value) =>{
          onChange({name:"lastName" , value});
        }}
        error = {errors.lastName || error?.last_name?.[0]}
      />
        <Input
        label="User Name"
        placeholder="Enter userName"
        onChangeText={(value) =>{
          onChange({name:"username" , value});
        }}
        error = {errors.username || error?.username?.[0]}
      />
      <Input
        label="Email"
        iconPosition="left"
        placeholder="Enter Email"
        onChangeText={(value) =>{
          onChange({name:"email" , value});
        }}
        error = {errors.email || error?.email?.[0]}
      />
      <Input
        label="Password"
        icon={<TouchableOpacity onPress={()=>{setIsSecureEntry((prev)=>!prev)}}>
        <Text>{isSecureEntry?'SHOW':'HIDE'}  </Text>
        </TouchableOpacity>}
        iconPosition="right"
        placeholder="Enter Password"
        secureTextEntry={isSecureEntry}
        onChangeText={(value) =>{
          onChange({name:"password" , value});
        }}
        error = {errors.password || error?.password?.[0]}
      />
      <CustomButton onPress={onSubmit} primary title="Submit" loading={loading} disabled={loading}  />
        
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={ () => { 
            navigate(LOGIN);
            }}>
           <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </Container>
  );
};

export default RegisterContainer;
