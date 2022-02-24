import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    wrapper : {
        height:42,
        borderWidth:1,
        borderRadius:4,
        alignItems:'center',
        marginTop:10,
        padding:10,
    },
    loaderSection : {
        flexDirection:'row',
    },
    TextInput : {
        flex:1,
        width:'100%'
    },
    error:{
        color:colors.danger,
        fontSize :12
    }
})