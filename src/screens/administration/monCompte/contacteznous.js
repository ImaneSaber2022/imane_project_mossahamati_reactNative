import {View, Text, Button, Modal, StyleSheet, Image,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Ameline from '../../../../assests/images/Ameline.png';
import deconnecter from '../../../../assests/images/deconnecter.png';
import mosahamatilogo from '../../../../assests/images/mosahamatilogo.png'
import userdark from '../../../../assests/images/userdark.png';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const ContactezNous = () => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const handlSuivant = () => {
    Navigation.navigate('CodeActivation');
  };
  const handlesociete = () => {
    Navigation.navigate('Administration');
  };
  return (
    <View style={styles.container}>
       <View style={{flexDirection: 'row'}}>
       <TouchableOpacity onPress={handleSubmit(handlesociete)}>
      <FontAwesome5 name={'angle-double-left'} size={20} color="gray" solid style={{marginTop:35,marginLeft:10}} />
       </TouchableOpacity >
       <Image
          source={mosahamatilogo}
          style={styles.imgs}
          resizeMode="contain"
        />
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={userdark}style={{marginTop:29,marginLeft:120}}
          resizeMode="contain"
        />
        
          <Image 
          source={deconnecter}
          style={{height:90,marginRight:15}}
          resizeMode="contain"
        />
        </TouchableOpacity>
        </View>
        <View style={styles.header}>
        <View >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#000000',
            marginTop: 25,
            marginLeft: 25,
          }}>
          Contactez-nous
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: '#00000029',
          borderBottomWidth: 1,
          width: '80%',
          marginLeft: 50,
          marginTop: 25,
        }}
      />
      <View
        style={[
          styles.button_annulers,
          {
            backgroundColor: '#FFFFFF',
            justifyContent: 'space-around',
            marginTop: 40,
            marginLeft: 30,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image source={Ameline} style={styles.imge} resizeMode="contain" />
          <View>
            <Text style={[styles.signin_annul,{maxWidth:'100%'}]}>Ameline Gordon</Text><Text style={{color:'#98A9BC'}}>Agent commercial</Text>
            
          </View>
         
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image  style={styles.imge} resizeMode="contain" />
          <Text style={[styles.signin_annul,{maxWidth:'45%'}]}>022 37 55 90 <Text style={{color:'#98A9BC'}}>Phone</Text></Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image  style={styles.imge} resizeMode="contain" />
          <Text style={[styles.signin_annul,{maxWidth:'70%'}]}>Ameline@Mossahamati.com <Text style={{color:'#98A9BC'}}>Email</Text> </Text>
         
        </View>
        {/* <Image source={Ameline} style={styles.imge} resizeMode="contain" />
        <Text style={styles.signin_annul}>Ameline Gordon </Text> */}
      </View>
        </View>
    
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  imge: {
    width: 50,
    height: 60,
    right: 7,
  },
  header: {
    flex: 2,
    backgroundColor:"#fff"
    
  },
  button_annulers: {
    borderRadius: 25,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '85%',
    padding: 20,
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272427',
  },
  imgs: {
    width: '30%',
    height: 90,
    left:20
  },
});

export default ContactezNous;
