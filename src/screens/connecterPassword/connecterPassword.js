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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import CheckBox from 'react-native-check-box'

import Svg, {Circle, SvgUri} from 'react-native-svg';
import TouchID from 'react-native-touch-id';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import logo1 from '../../../assests/images/logo1.png';
import image3 from '../../../assests/images/image3.png';
import touch from '../../../assests/images/touch.jpg';

const ConnecterPassword = ({onPress}) => {
  const [name, setName] = useState('imane');
  const [supported, setSupported] = useState(null);
  useEffect(() => {
    TouchID.isSupported()
      .then(sucesso => {
        setSupported(true);
      })
      .catch(error => {
        console.log('ERRO TOUCH' + error);
        //alert('Touch ID nao suporado/habilitado');
      });
  }, []);
  const handllogin = () => {
    const configs = {
      title: 'Authticao Touch ID',
      color: '#FF0000',
      sensorErrorDescription: 'Touch ID invalide',
    };
    TouchID.authenticate('Login App youtube', configs)
      .then(success => {
        console.log('seja ben-vindo :)');
        setName('Sujeito Programador');
      })
      .catch(error => {
        console.log('FALAH HA AUTHENTICACAO', +error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo1} style={styles.imgs} resizeMode="contain" />
        <View style={styles.action}>
          <TextInput placeholder="Mr Nom Prénom" style={styles.TextInput} />
        </View>
        <Text style={styles.title_text}>Se connecter par mot de passe</Text>
        <View style={{marginRight:50}}>
          <TouchableHighlight onPress={handllogin}>
            <View style={styles.button_creer}>
            <FontAwesome5 name={'fingerprint'} size={50} color="#000000" />
            </View>
          </TouchableHighlight>
        </View>
        <Text style={[styles.title_text, {marginBottom: 35}]}>
          Utiliser l'empreinte digitale
        </Text>
        <Image source={image3} style={styles.img} resizeMode="contain" />
      </View>
    </View>
  );
};

export default ConnecterPassword;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },
  img: {
    width: '120%',
  },
  imgs: {
    width: '45%',
  },
  touch: {
    width: '65%',
    height: 145,
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
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    color: '#C0BBC0',
    marginTop: 15,
    marginBottom: 20,
  },
  header: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Link: {
    color: '#010000',
  },
  button_creer: {
    alignItems: 'center',
    // marginTop: 20,
    width: ' 200%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },

  signin: {
    fontSize: 16,
    color: '#010000',
  },
  TextInput: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    marginTop: 50,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    paddingBottom: 5,
    backgroundColor: '#f7f7f7',
    width: '90%',
    height: 70,
  },
});
