import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import notificationimg from '../../../../../assests/images/notificationimg.png';
import deconnecter from '../../../../../assests/images/deconnecter.png';
import mosahamatilogo from '../../../../../assests/images/mosahamatilogo.png';
import userdark from '../../../../../assests/images/userdark.png';
import photo1 from '../../../../../assests/images/photo1.png';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Select from '@redmin_delishaj/react-native-select';
const Tab = createMaterialTopTabNavigator();
const Updatecollaboration = () => {
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
    Navigation.navigate('Gestionutilisateur');
  };
  const handlesociete = () => {
    Navigation.navigate('Gestionutilisateur');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={userdark}
              style={{marginTop: 30,marginLeft:120}}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={handleSubmit(chargementdocuments)}>
              <Image
                source={deconnecter}
                style={{height: 90, marginRight: 15}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
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
              Modifier un Collaboration
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#00000029',
              borderBottomWidth: 1,
              width: '80%',
              marginLeft: 50,
              marginTop: 15,
            }}
          />
          {/*  card1*/}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: '#A2A2A5',
                  marginRight: 30,
                }}>
                photo
              </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: '#EBEDF3',
                  width: '95%',
                  height: 100,
                  borderWidth: 1,
                  borderColor: '#fff',
                }}>
                <Image
                  source={photo1}
                  style={styles.img}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <View>
              <Text
                style={[
                  styles.signin_annul,
                  {marginLeft: 40, color: '#464E5F', marginTop: 10},
                ]}>
                Matricule
              </Text>
            </View>
            <View style={styles.action}>
              <TextInput placeholder="26453285" style={{width: 200}} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <View>
              <Text
                style={[
                  styles.signin_annul,
                  {marginLeft: 60, color: '#464E5F', marginTop: 10},
                ]}>
                Nom
              </Text>
            </View>
            <View style={styles.action}>
              <TextInput placeholder=" Nom" style={{width: 200}} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <View>
              <Text
                style={[
                  styles.signin_annul,
                  {marginLeft: 40, color: '#464E5F', marginTop: 10},
                ]}>
                Prénom
              </Text>
            </View>
            <View style={styles.action}>
              <TextInput placeholder="Prénom" style={{width: 200}} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <View>
              <Text
                style={[
                  styles.signin_annul,
                  {marginLeft: 55, color: '#464E5F', marginTop: 10},
                ]}>
                Login
              </Text>
            </View>
            <View style={styles.action}>
              <TextInput placeholder="Login" style={{width: 200}} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <View style={{marginLeft: 20}}>
              <Text
                style={[
                  styles.signin_annul,
                  {color: '#464E5F', marginTop: 15},
                ]}>
                Mot de passe
              </Text>
            </View>
            <View style={styles.action}>
              <TextInput placeholder="Mot de passe" style={{width: 200}} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 23,
              marginLeft:102
            
            }}>
            <View style={{marginTop: 8}}>
              <Text>Societe</Text>
            </View>
            <View style={{height: 35, width: '75%', justifyContent: 'center'}}>
              <Select placeholder="Societe"></Select>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
              marginLeft:102
            
            }}>
            <View style={{marginTop: 8}}>
              <Text>Profil</Text>
            </View>
            <View style={{height: 35, width: '75%', justifyContent: 'center'}}>
              <Select placeholder="Profil"></Select>
            </View>
          </View>
          {/* button enregistrer */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 10,
            }}>
            <View>
              <TouchableOpacity
                onPress={handleSubmit(handlEnregistrer)}
                style={[
                  styles.button_annulers,
                  {marginLeft: 35, marginTop: 30},
                ]}>
                <Text style={styles.signin_annuls}>Anuuler</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleSubmit(handlEnregistrer)}
              style={[styles.button_annuler]}>
              <Text style={styles.signin_annul}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
  img: {
    width: 100,
    height: 100,
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
    width: ' 40%',
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

    color: '#464E5F',
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
    borderRadius: 7,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    padding: 12,
  },
  signin_annuls: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#464E5F',
  },
  imgs: {
    width: '30%',
    height: 90,
    left:20
  },
});

export default Updatecollaboration;
