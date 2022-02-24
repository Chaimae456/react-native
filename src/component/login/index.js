import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Image, Text, TouchableOpacity}  from 'react-native';
import { REGESTER } from '../../constants/routeName';
import Container from '../Common/Container/index';
import CustomButton from '../Common/CustomButton';
import Input from '../Common/Input';
import Message from '../Common/Message';
import styles from './styles';

const LoginContainer = ({onSubmit,onChange,error,loading}) => {
 const {navigate} = useNavigation();
 const [isSecureEntry , setIsSecureEntry] = useState(true);
  return (
    <Container >
        <Image width={50} height={70} source={require('../../assets/images/logo.png')} style={styles.logoImage} />
        
        <View>
          <Text style={styles.title}>WELCOME TO CONTACTAPP</Text>
          <Text style={styles.subTitle}>Please login here</Text>

          <View style={styles.form}>
          {error&& !error.error && (<Message danger onDismiss={()=>{}} message="invalid credentials" /> )}
          {error?.error&&(<Message danger onDismiss={()=>{}} message={error.error} /> )}
        <Input
        label="User Name"
        placeholder="Enter userName"
        onChangeText={(value) =>{
          onChange({name:"userName" , value});
        }}
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
      />
      <CustomButton onPress={onSubmit} primary title="Submit" loading={loading} disabled={loading} />
        </View>
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new acount?</Text>
          <TouchableOpacity onPress={ () => { 
            navigate(REGESTER);
            }}>
           <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Container>
  );
};

export default LoginContainer;
