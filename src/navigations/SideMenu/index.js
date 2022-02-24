import React from 'react';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Container from '../../component/Common/Container';
import styles from './styles';
import { SITTING } from '../../constants/routeName';
import logoutUser from '../../context/actions/auth/logoutUser';


const SideMenu = ({navigation,authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert("Logout","Are you sure to logout ?",[
      {text : "Cancel" , onPress:()=>{},},
      {text : "Ok" , onPress:()=>{
        logoutUser()(authDispatch)
      },},
    ])
  }
  const menuItems = [
    {icon : <Text>T</Text> , name: 'Setting',onPress:()=>{navigation.navigate(SITTING)}},
    {icon : <Text>T</Text> , name: 'Logout',onPress:handleLogout},
  ]

  return (
   <SafeAreaView>
            <Container>
            <Image width={50} height={70} source={require('../../assets/images/logo.png')} style={styles.logoImage} />
            <View>
              {
                menuItems.map(({name,icon,onPress}) => (<TouchableOpacity key={name} onPress={onPress} style={styles.items}>
                  {icon}
                  <Text style={styles.itemText}>{name}</Text>
                </TouchableOpacity>))
              }
            </View>
            </Container>
        </SafeAreaView>
  )
};

export default SideMenu;
