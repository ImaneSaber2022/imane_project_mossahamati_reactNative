import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TextInput,
  Platform,
  TouchableHighlight,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {CheckBox} from 'react-native-base';

// import CheckBox from 'react-native-check-box'
import Touche from '../../svg/touche.svg';
import Svg, {Circle, SvgUri} from 'react-native-svg';
import TouchID from 'react-native-touch-id';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import img from '../../../assests/images/imag.png';
import imge from '../../../assests/images/img11.jpeg';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const Bienvenue = ({onPress}) => {

  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {height} = useWindowDimensions();

  const SignUpPress = () => {
    Navigation.navigate('PiéreChargeCarteNational');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={img} style={styles.imgs} resizeMode="contain" />
        <Text style={styles.title}>Bienvenue ! </Text>
        <Text style={styles.title_text}>
          Votre mot de passe est enregistré. Félicitations, votre compte est
          crér. Mais tout d'abord, commençons par paramétrer votre compte! ça ne
          prendra que quelques minures!
        </Text>
        <View style={styles.button_creer}>
            <Text style={styles.signin} onPress={handleSubmit(SignUpPress)} >
              C'est parti !
            </Text>
          </View>
        <Image
          source={imge}
          style={[styles.img, {marginTop: 20}, {height: height * 0.3}]}
          resizeMode="contain" 
        />
      </View>
    </View>
  );
};

export default Bienvenue;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 40,
  },
  img: {
    width: '100%',
  },
  imgs: {
    width: '45%',
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000000',
    marginBottom: 5,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
    textAlign: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 100,
    marginTop: 100,
  },
  Button:{
borderRadius: 5,
paddingTop:5,
paddingBottom:5
  },

  Link: {
    color: '#010000',
  },
  button_creer: {
    alignItems: 'center',
    marginTop: 30,
    width: ' 90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: '#000000',
  },
 
  signin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
