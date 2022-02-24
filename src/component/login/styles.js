import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  logoImage : {
      width:300,
      height:90,
      alignSelf:'center',
      marginTop:30,
      marginBottom:30,
  },
  title:{
    fontSize:21,
    textAlign: 'center',
    paddingTop:20,
    fontWeight:'500',
    color:'#000000',
  },
    subTitle:{
    fontSize:17,
    textAlign: 'center',
    paddingVertical:20,
    fontWeight:'500',
    color:'#000000',
  },
  form:{
    paddingTop:20,
  },
  createSection:{
    flexDirection:'row',
    marginTop:10,
  },
  infoText:{
    fontSize:17,
  },
  linkBtn:{
    paddingLeft:17,
    fontSize:17,
    color: colors.primary,
    fontWeight:'700',
  }

});