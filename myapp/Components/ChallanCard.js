import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import colors from '../assets/colors';
import {WP} from '../utilities.js/responsive';
import moment from 'moment';
const ChallanCard = ({
  onPress,
  name,
  img,
  ispaid,
  issuedate,
  iswarden,
  isAdmin,
  citizenid,
  isSchedule,
  status,
  gmail,
  registrationnumber,
  address,
  paiddate
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.imgIcon} source={img} />
          <View style={{marginStart: WP('4')}}>
              <TouchableOpacity onPress={onPress}>
            <Text style={[styles.name],{fontSize:20}}>{name}</Text>
            {gmail && (
              <Text style={[styles.name,{color:colors.lightPurple}]}>{gmail}</Text>
            )

            }
            {isSchedule ? (
              <Text style={[styles.service, {color: colors.defaultPurple,fontSize:18}]}>
                {'Citizen cnic' + ' ' + citizenid}
              </Text>
            ) : (
              false
            )}
             {address && (
              <Text style={styles.service} >{address}</Text>
            )

            }
            

{registrationnumber && (
              <Text style={styles.service}>{registrationnumber.substring(0,3)}-{registrationnumber.substring(3,5)}-{registrationnumber.substring(5,9)}</Text>
            )

            }
            { ( status=="Paid" )  ? (
              <Text style={styles.service}>
                {'paid date'+' '+moment(paiddate).format('YYYY-MM-DD')}
              </Text>
            ) : (
              <Text>
                 {'issue date'+' '+moment(issuedate).format('YYYY-MM-DD')}
              </Text>
            )}
            
            {iswarden && (
              <Text style={styles.service}>
                {status}
              </Text>
            ) }
            

            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      
       
     
    </View>
  );
};

export default ChallanCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.halfWhite,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: WP('5'),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: WP('7'),
  },
  imgIcon: {
    width: WP('15'),
    height: WP('15'),
    borderRadius: 18,
  },
  name: {
    fontSize: WP('4.5'),
    fontFamily: 'Gilroy-SemiBold',
  },
  service: {
    fontSize: WP('3.4'),
    fontFamily: 'Gilroy-SemiBold',
    color: '#333333',
    opacity: 0.7,
    paddingVertical: WP('1'),
  },
  rating: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: WP('3.4'),
    color: colors.defaultOrange,
    marginHorizontal: WP('1.2'),
  },
  rejectContainer: {
    borderWidth: 1,
    borderColor: colors.defaultOrange,
    width: WP('58'),
    height: WP('10'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  rejectTxt: {
    fontSize: WP('4.5'),
    fontFamily: 'Gilroy-SemiBold',
    opacity: 0.8,
  },
});
