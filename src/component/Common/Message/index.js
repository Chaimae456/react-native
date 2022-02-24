import React from 'react';
import { View ,Text, ActivityIndicator ,TouchableOpacity} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './style';

const Message = ({message,primary ,danger, success, info,onDismiss , retry , retryFn }) => {
    const [userDismissed , setDismissed] = React.useState(false);
const getBgColor = () => {
    if(primary){
        return colors.primary;
    }
    if(info){
        return colors.secondary;
    }
     if(danger){
        return colors.danger;
    }
    if(success){
        return colors.success;
    }
}

    return (
        <>
        {(userDismissed?null:
            <TouchableOpacity 
            style={[styles.wrapper , {backgroundColor:getBgColor()}]}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                   <Text style={{color:colors.white}}>{message}</Text>
                
                
                <TouchableOpacity onPress={retryFn}>
                    {retry&& !typeof onDismiss==='function' &&<Text style={{color:colors.white}}>retry</Text>}
                </TouchableOpacity>
                {typeof onDismiss==='function' && 
                <TouchableOpacity onPress={()=>{
                    setDismissed(true);
                    onDismiss();
                }}>
                <Text style={{color:colors.white}}>X</Text>
                </TouchableOpacity>
                }
                </View>
            </TouchableOpacity>
            )}
</>
    );
}
export default Message;