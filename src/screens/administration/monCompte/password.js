import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import notificationimg from '../../../../assests/images/notificationimg.png';
import deconnecter from '../../../../assests/images/deconnecter.png';
import mosahamatilogo from '../../../../assests/images/mosahamatilogo.png';
import userdark from '../../../../assests/images/userdark.png';
import img5 from '../../../../assests/images/img5.jpeg';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const Password = () => {
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
  const handlEnregistrer = () => {
    Navigation.navigate('Administration');
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image
          source={mosahamatilogo}
          style={styles.imgs}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={handleSubmit(chargementdocuments)}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={userdark}
            style={{marginTop: 30}}
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
            Mot de passe
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: '#00000029',
            borderBottomWidth: 1,
            width: '80%',
            marginLeft: 50,
            marginTop: 12,
          }}
        />
        {/*  card1*/}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View>
            <Text
              style={[styles.signin_annul, {marginLeft: 40, color: '#464E5F'}]}>
              Ancien
            </Text>
            <Text style={[styles.signin_annul, {color: '#464E5F'}]}>
              <Text>mot de passe</Text>
            </Text>
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder=" Ancien mot de passe"
              style={{width:200}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 25,
          }}>
          <View>
            <Text
              style={[styles.signin_annul, {marginLeft: 30, color: '#464E5F'}]}>
              Nouveau
            </Text>
            <Text style={[styles.signin_annul, {color: '#464E5F'}]}>
              <Text>mot de passe</Text>
            </Text>
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder=" Nouveau mot de passe"
              style={{width:200}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 25,
          }}>
          <View>
            <Text
              style={[styles.signin_annul, {marginLeft: 22, color: '#464E5F'}]}>
              Confirmation
            </Text>
            <Text style={[styles.signin_annul, {color: '#464E5F'}]}>
              <Text>du mot de passe</Text>
            </Text>
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder=" Confirmation mot de passe"
              style={{width:200}}
            />
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View>
          <Text ></Text>
          </View>
          <TouchableOpacity
          onPress={handleSubmit(handlEnregistrer)} style={[styles.button_annuler,{marginLeft:100}]}>
          <Text style={styles.signin_annul}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
        <View>
        <Image source={img5} style={{width:'100%',height:230}} resizeMode="contain" />
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
  TextInput: {
    flex: 1,
    paddingRight: 25,
  },
  action: {
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f7f7f7',
  },
  button_annuler: {
    alignItems: 'center',
    marginTop: 30,
    width: ' 45%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: '#131313',
  },

  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    
  },
  imge: {
    width: 65,
    height: 60,
    right: 7,
  },
  header: {
    flex: 2,
    backgroundColor: '#FAFAFA',
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

export default Password;
