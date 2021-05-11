import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity,View ,Text} from 'react-native';
import { images } from '../../assets/images';
import loginStyle from '../../styles/loginStyle';
const CamerModule = ({
    onPress,
}) => {
    return ( 
        

<TouchableOpacity
                          onPress={onPress}
                      style={{alignItems:'center',margin:10}}    >
                          <Image
                            style={[loginStyle.iconmy]}
                            source={images.camera}></Image>
                            <Text style={{color:'blue'}}>Camera</Text>
                        </TouchableOpacity>
                    
    
     );
}
 
export default CamerModule;