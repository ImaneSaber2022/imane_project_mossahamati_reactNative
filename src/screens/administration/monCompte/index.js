import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../../shared/searchBar';
import user from '../../../../assests/images/user.png';
import clee from '../../../../assests/images/clee.png';
import badge from '../../../../assests/images/badge.png';
import chargement from '../../../../assests/images/chargement.png';
import files from '../../../../assests/images/files.png';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import deconnecter from '../../../../assests/images/deconnecter.png';
import mosahamatilogo from '../../../../assests/images/mosahamatilogo.png';
import userdark from '../../../../assests/images/userdark.png';
const MonCompte = () => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const contactez = () => {
    Navigation.navigate('ContactezNous');
  };
  const handleNotifier = () => {
    Navigation.navigate('Notification');
  };
  const handlepassword = () => {
    Navigation.navigate('Password');
  };
  const handleidentite = () => {
    Navigation.navigate('Identite');
  };
  const [value, setValue] = useState();
  const updateSearch = value => {};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 50,
          }}>
          <View>
            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                color: '#A2A2A5',
                cursor: 'pointer',
              }}>
              Laravel
            </Text>
          </View>
          <SearchBar
            value={value}
            updateSearch={updateSearch}
            style={{color: '#A2A2A5'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 60,
          }}>
          <View style={[styles.button_annulers, {backgroundColor: '#FFFFFF'}]}>
            <TouchableOpacity onPress={handleSubmit(handleidentite)}>
              <Image source={user} style={styles.imge} resizeMode="contain" />
              <Text style={[styles.signin_annul, {color: '#000000'}]}>
                Identité
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.button_annulers,
              {backgroundColor: '#FFFFFF', marginRight: 10},
            ]}>
            <TouchableOpacity onPress={handleSubmit(handlepassword)}>
              <Image source={clee} style={styles.imge} resizeMode="contain" />
              <Text style={[styles.signin_annul, {color: '#000000'}]}>
                Mot de passe
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 25,
          }}>
          <View style={[styles.button_annulers, {backgroundColor: '#FFFFFF'}]}>
            <TouchableOpacity onPress={handleSubmit(handleNotifier)}>
              <Image source={badge} style={styles.imge} resizeMode="contain" />
              <Text style={[styles.signin_annul, {color: '#000000'}]}>
                Notification
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.button_annulers,
              {backgroundColor: '#F39200', marginRight: 10},
            ]}>
            <TouchableOpacity onPress={handleSubmit(contactez)}>
              <Image source={files} style={styles.imge} resizeMode="contain" />
              <Text style={[styles.signin_annul, {color: '#fff'}]}>
                Contactez-nous
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MonCompte;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imge: {
    width: 140,
    height: 40,
    right: 7,
  },
  img: {
    width: 140,
    height: 50,
    marginTop: 20,
  },
  TextInput: {
    flex: 1,
  },
  action: {
    width: '50%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#f7f7f7',
    marginLeft: 50,
    height: '100%',
  },
  actionlegale: {
    width: '45%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#f7f7f7',
    height: '90%',
  },
  inputVill: {
    width: '15%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#f7f7f7',
    marginLeft: 30,
  },
  inputpays: {
    width: '15%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#f7f7f7',
    marginLeft: 35,
    marginRight: 20,
  },
  button_annulers: {
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '40%',

    padding: 20,
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',

    textAlign: 'center',
  },
});
