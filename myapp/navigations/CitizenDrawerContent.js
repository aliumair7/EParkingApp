import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeCitizentoken} from '../reduxapp/myaction'
import {useSelector,useDispatch} from 'react-redux'
import wardenapi from '../api/WardenApi';
import { Image } from 'react-native';
import loginStyle from '../styles/loginStyle';
import { images } from '../assets/images';
import appStyles from '../styles/appStyles';


//import{ AuthContext } from '../components/context';

export function CitizenDrawerContent(props) {
    const users = useSelector(state => state.user)
    const citizen = useSelector(state => state.citizens)
    
    const dispatch=useDispatch()
   

    const deltoken=()=>{
        dispatch(removeCitizentoken())
  
      }


    
    const paperTheme = useTheme();

    

    return(
        <View style={{flex:1,}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{citizen.name}</Title>
                                <Caption style={styles.caption}>Citizen</Caption>
                            </View>
                        </View>
                        
                     

                        
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('CHome')}}
                        />

<DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                style={[appStyles.IconDrawerPending]}
                                source={images.Pending}></Image>
                            )}
                            label="Pending Challan"
                            onPress={() => {props.navigation.navigate('Pendig Challans')}}
                        />

               <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="history" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="History"
                            onPress={() => {props.navigation.navigate('Challan History')}}
                        />



                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image
                                style={[appStyles.IconGuideline]}
                                source={images.Guidelines}></Image>
                            )}
                            label="Guidelines"
                            onPress={() => {props.navigation.navigate('Citizen Guideline')}}
                        />
                   
                   <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Citizen Profile')}}
                        />             
           

                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {alert("toggle theme")}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {deltoken()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
     
      
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });