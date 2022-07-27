import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import notificationimg from '../../../../assests/images/notificationimg.png';
import deconnecter from '../../../../assests/images/deconnecter.png';
import mosahamatilogo from '../../../../assests/images/mosahamatilogo.png';
import userdark from '../../../../assests/images/userdark.png';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const Notification = () => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const handlSuivant = () => {
    Navigation.navigate('CodeActivation');
  };
  const chargementdocuments = () => {
    Navigation.navigate('ConneterPasword');
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image
          source={mosahamatilogo}
          style={styles.imgs}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={handleSubmit(chargementdocuments)}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={userdark}
            style={{marginTop: 29}}
            resizeMode="contain"
          />
          <Image
            source={deconnecter}
            style={{height: 90, marginRight: 15}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: '#000000',
              marginTop: 20,
              marginLeft: 25,
            }}>
            Notification
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
        {/*  card1*/}
        <View
          style={[
            styles.button_annulers,
            {
              backgroundColor: '#FFFFFF',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: 30,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.signin_annul}>Cart national</Text>
            </View>
            <Image source={notificationimg} style={styles.imge} resizeMode="contain" />
          </View>
          <Text
            style={[
              styles.signin_annul,
              {color: '#F64E60', fontSize: 13, marginBottom: 8},
            ]}>
            Carte d'identité périmée
          </Text>

          <Text style={[styles.signin_annul, {maxWidth: '70%',color:'#464E5F'}]}>
            Lorem ipsum dolor sit amet,
          </Text>
          <Text style={[styles.signin_annul, {maxWidth: '70%',color:'#464E5F'}]}>
          consectetuer adipiscing elit.
          </Text>

        </View>
        {/*  card2*/}
        <View
          style={[
            styles.button_annulers,
            {
              backgroundColor: '#FFFFFF',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: 30,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.signin_annul}>Cart national</Text>
            </View>
            <Image source={notificationimg} style={styles.imge} resizeMode="contain" />
          </View>
          <Text
            style={[
              styles.signin_annul,
              {color: '#F64E60', fontSize: 13, marginBottom: 8},
            ]}>
            Carte d'identité périmée
          </Text>

          <Text style={[styles.signin_annul, {maxWidth: '70%',color:'#464E5F'}]}>
            Lorem ipsum dolor sit amet,
          </Text>
          <Text style={[styles.signin_annul, {maxWidth: '70%',color:'#464E5F'}]}>
          consectetuer adipiscing elit.
          </Text>

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
    width: 65,
    height: 60,
    right: 7,
  },
  header: {
    flex: 2,
    backgroundColor: '#fff',
  },
  button_annulers: {
    borderRadius: 25,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '85%',
    padding: 20,
  },
  signin_annul: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#B5B5C3',
  },
  imgs: {
    width: '30%',
    height: 90,
  },
});

export default Notification;
