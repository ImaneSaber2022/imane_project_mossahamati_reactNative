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
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import notificationimg from '../../../../../assests/images/notificationimg.png';
import deconnecter from '../../../../../assests/images/deconnecter.png';
import mosahamatilogo from '../../../../../assests/images/mosahamatilogo.png';
import userdark from '../../../../../assests/images/userdark.png';
import profil1 from '../../../../../assests/images/profil1.png';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Select from '@redmin_delishaj/react-native-select';
const Tab = createMaterialTopTabNavigator();
const Ajouterprofil = () => {
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
    Navigation.navigate('Gestiondesroles');
  };
  const handlesociete = () => {
    Navigation.navigate('Gestiondesroles');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
              style={{marginTop: 30,marginLeft:100}}
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
                marginTop: 15,
                marginLeft: 30,
              }}>
              Ajouter un profil
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#00000029',
              borderBottomWidth: 1,
              width: '80%',
              marginLeft: 50,
              marginTop: 10,
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
                  marginRight: 10,
                  marginLeft: 90,
                }}>
                choix d'icone
              </Text>
            </View>
            <View>
              {/* <Icon name="sr-user" color="#ccc" size={25} /> */}
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 5,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#A2A2A5',
                    width: '22%',
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                    opacity: 0.6,
                  }}>
                  <Image
                    source={profil1}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#A2A2A5',
                    width: '22%',
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                    marginLeft: 10,
                    opacity: 0.6,
                  }}>
                  <Image
                    source={profil1}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#A2A2A5',
                    width: '22%',
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                    marginLeft: 10,
                    opacity: 0.6,
                  }}>
                  <Image
                    source={profil1}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                {/*  */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 5,
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#A2A2A5',
                    width: '22%',
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                    opacity: 0.6,
                  }}>
                  <Image
                    source={profil1}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#A2A2A5',
                    width: '22%',
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                    marginLeft: 10,
                    opacity: 0.6,
                  }}>
                  <Image
                    source={profil1}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#A2A2A5',
                    width: '22%',
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                    marginLeft: 10,
                    opacity: 0.6,
                  }}>
                  <Image
                    source={profil1}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                {/*  */}
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,marginRight:20
            }}>
            <View>
              <Text
                style={[
                  styles.signin_annul,
                  {marginLeft: 60, color: '#464E5F', marginTop: 10},
                ]}>
                intitule
              </Text>
            </View>
            <View style={styles.action}>
              <TextInput placeholder="intitule" style={{width: 200}} />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,marginRight:25
            }}>
            <View>
              <Text
                style={[
                  styles.signin_annul,
                  {marginLeft: 40, color: '#464E5F', marginTop: 10},
                ]}>
                Description
              </Text>
            </View>
            <View style={styles.action}>
              <TextInput placeholder=" Description" style={{width: 200}} />
            </View>
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
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: '#000000',
                marginTop: 30,
                marginLeft: 30,
              }}>
              Modules autorisés
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: 100,
            }}>
            <View style={{marginTop: 8,fontSize:15}}>
              <Text style={{fontSize:16,alignItems:'center'}}>Societe</Text>
            </View>
            <View style={{height: 45, width: '65%', justifyContent: 'center'}}>
              <Select placeholder="Societe"></Select>
            </View>
          </View>

          {/* button enregistrer */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 25,
              paddingBottom:50
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
    height:900
   
  },
  TextInput: {
    flex: 1,
    paddingRight: 25,
  },
  img: {
    width: 55,
    height: 55,
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

export default Ajouterprofil;
