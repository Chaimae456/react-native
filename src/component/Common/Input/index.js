import React from 'react';
import { View ,Text, TextInput} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './style';

const Input = ({onChangeText,iconPosition,style,value ,label , icon , error,...props}) => {
const [focused,setfocused] = React.useState(false);
const getFlexDirection=()=>{
    if(icon && iconPosition){
        if(iconPosition === 'left'){
            return "row";
        }else if(iconPosition === 'right'){
            return "row-reverse";
        }
    
}}
const getBorderColor = () => {
    
    if(error){
        return colors.danger;
    }
    
    if(focused){
        return colors.primary
    }else{
        return colors.grey;
    }
}

    return (
            <View style={styles.inputContainer}>
                {label && <Text style={styles.labelText}>{label}</Text>}
                <View style={[
                    styles.wrapper,
                    {alignItems:icon?"center":"baseline"},
                    {borderColor:getBorderColor(), flexDirection:getFlexDirection()}
                    ]}>
                <View>{icon && icon}</View>
                <TextInput
                style={[styles.TextInput , style]}
                onChangeText={onChangeText}
                value={value}
                onFocus={()=>{setfocused(true);}}
                onBlur={()=>{setfocused(false);}}
                {...props}
                />
                </View>
                {error && <Text style={styles.error}>{error}</Text>}
            </View>


    );
}
export default Input;