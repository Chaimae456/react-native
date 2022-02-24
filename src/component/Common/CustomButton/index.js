import React from 'react';
import { View ,Text, ActivityIndicator ,TouchableOpacity} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './style';

const CustomButton = ({title,onPress,primary, secondary ,danger,  disabled ,loading,...props}) => {
const getBgColor = () => {
    if (disabled){
        return colors.grey;
    }
    if(primary){
        return colors.primary;
    }
    if(secondary){
        return colors.secondary;
    }
     if(danger){
        return colors.danger;
    }
}

    return (
            <TouchableOpacity 
            disabled={disabled} 
            onPress={onPress}
            style={[styles.wrapper , {backgroundColor:getBgColor()}]}>
                <View style={[styles.loaderSection]}>
                   {loading &&<ActivityIndicator color={primary?'white' : 'black'} />}
                    {title && <Text style={{color: disabled ? 'black' : colors.white}}>{title}</Text>}
                </View>
                
                
            </TouchableOpacity>


    );
}
export default CustomButton;