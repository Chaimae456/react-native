import React , {useEffect ,useState} from 'react';
import {Text , View}  from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contacts = ()=>{
    const [user , setUser] = useState('');
    const getUser = async () => {
    try {
          const userx = await AsyncStorage.getItem('user');
         setUser(JSON.parse(userx));
    } catch (error) {
        
    }
    };
    useEffect(() => {
        getUser();
    } , []);


return(
   <View> 
       <Text> {user.username} </Text>
       <Text> {user.email} </Text>
       </View>  
);
}

export default Contacts;