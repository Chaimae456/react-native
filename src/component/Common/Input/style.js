import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    wrapper : {
        height:42,
        borderWidth:1,
        borderRadius:4,
        paddingHorizontal:5,
        marginTop:5,
        marginBottom:5,
    },
    inputContainer : {
        padding:12,
    },
    TextInput : {
        flex:1,
        width:'100%',
    },
    error:{
        color:colors.danger,
        fontSize :12,
    },
    labelText : {
        color:'black',
        fontSize:16,
    }
})