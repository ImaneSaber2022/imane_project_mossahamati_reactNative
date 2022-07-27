import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TextInput,
  Platform,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';
import {CheckBox} from 'react-native-base';
// import CheckBox from 'react-native-check-box'
import Touche from '../../svg/touche.svg';
import Svg, {Circle, SvgUri} from 'react-native-svg';
import TouchID from 'react-native-touch-id';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const PasswordOublie = ({onPress}) => {

  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const handleAnnuler = () => {
    Navigation.navigate('SplachScreen');
  };
const handleConfirm = () => {
    Navigation.navigate('Bienvenue');
}
 
  const handeltelephone = () => {
    setType('telephone');
  };


  const AdressEmail = () => {
    setType('email');
  };
  const [adressEmail, setAdressEmail] = useState('email');
  const [telephone, setTelephone] = useState('telephone');
  const [type, setType] = useState('email');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dropdown}></View>
        <Text style={styles.text}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Veuillez choisir</Text>
        <Text style={styles.title}>le mode de récupération</Text>
        <Text style={styles.title_text}>
          Entrez votre e-mail ou numéro de téléphone pour réinitialiser votre
          mot de passe
        </Text>

        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <Text
            style={[
              styles.text_footer,
              styles.Link,
              type === 'email' ? {color: '#000000'} : {color: '#969696'},
            ]}
            onPress={AdressEmail}>
            Adresse Email
            <Text style={styles.Title_border1}></Text>
          </Text>
          <Text
            style={[
              styles.text_footer,
              styles.Link,
              type === 'email' ? {color: '#969696'} : {color: '#000000'},
            ]}
            onPress={handeltelephone}>
            Numéro de Téléphone
          </Text>
        </View>
        <Text style={styles.Title_border}></Text>

        {type === 'email' ? (
          <View style={styles.action}>
            <TextInput placeholder="Adresse Email" style={styles.TextInput} />
          </View>
        ) : (
          <View style={styles.action}>
            <TextInput placeholder="Téléphone" style={styles.TextInput} />
          </View>
        )}
       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles. button_creer}>
            <Text style={styles.signin} onPress={handleSubmit(handleConfirm)}>Confirmer</Text>
          </View>
          <View style={styles. button_annuler}>
            <Text style={styles.signin_annul} onPress={handleSubmit(handleAnnuler)}>Annuler</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PasswordOublie;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0DFDF',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:10,
    paddingTop: 10,
    paddingBottom: 10,

  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    marginBottom: 5,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray',
    marginBottom: 25,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },

  text_footer: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  TextInput: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    marginTop: 18,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 8,
    backgroundColor: 'white',
  },
  password: {
    textAlign: 'right',
    marginTop: 5,
  },

  inscrit: {
    textAlign: 'left',
    marginTop: 5,
  },
  button_creer: {
    alignItems: 'center',
    marginTop: 30,
    width: ' 50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: '#000000',
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
    backgroundColor: '#f7f7f7',
  },
  signin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  Link: {
    color: '#010000',
  },

  checkBox: {
    alignSelf: 'center',
  },
  dropdown: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  Title_border: {
    borderBottomColor: '#363434',
    borderBottomWidth: 2,
  },
  btn: {
    borderRadius: 3,
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#000000',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 15,
  },
  textchek: {
    lineHeight: 30,
    marginLeft: 10,
  },
});
