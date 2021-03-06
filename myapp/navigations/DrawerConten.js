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
import {removetoken} from '../reduxapp/myaction'
import {useSelector,useDispatch} from 'react-redux'
import wardenapi from '../api/WardenApi';


//import{ AuthContext } from '../components/context';

export function DrawerContent(props) {
    const users = useSelector(state => state.user)
    const challans = useSelector(state => state.challans)
    const dispatch=useDispatch()
    const[paid,setpaid]=React.useState([])
    const[unpaid,setunpaid]=React.useState([])

    const deltoken=()=>{
        dispatch(removetoken())
  
      }


      React.useEffect( ()=>{
          wardenapi.getunpaidwarden(users.wardenid).then(data=>{
              console.log("data is here",data)
              setunpaid(data)}).catch(err=>console.log(err))
      }
      ,[challans])
      React.useEffect( ()=>{
          console.log(users.wardenid)
        wardenapi.getpaidwarden(users.wardenid).then(data=>{
            console.log("Here are daat",data)
            setpaid(data)}).catch(err=>console.log(err))
    }
    ,[])
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
                                <Title style={styles.title}>{users.name}</Title>
                                <Caption style={styles.caption}>{users.role}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>{paid.length}</Paragraph>
                                <Caption style={styles.caption}>Paid</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>{unpaid.length}</Paragraph>
                                <Caption style={styles.caption}>Unpaid</Caption>
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
                            onPress={() => {props.navigation.navigate('wHome')}}
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
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                   
                   <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="plus-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Add Challan"
                            onPress={() => {props.navigation.navigate('Challan')}}
                        />

               <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="google-maps" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Map"
                            onPress={() => {props.navigation.navigate('location')}}
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