import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Platform,
  TouchableHighlight,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import logo1 from '../../../assests/images/logo1.png';
// import CheckBox from 'react-native-check-box'
import Touche from '../../svg/touche.svg';
import Svg, {Circle, SvgUri} from 'react-native-svg';
import TouchID from 'react-native-touch-id';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import touch0 from '../../../assests/images/touch0.png';
import CheckBox from '@react-native-community/checkbox';
import Select from '@redmin_delishaj/react-native-select';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const SplachScreen = ({onPress}) => {
  const [name, setName] = useState('imane');
  const [supported, setSupported] = useState(null);
  useEffect(() => {
    TouchID.isSupported()
      .then(sucesso => {
        setSupported(true);
      })
      .catch(error => {
        console.log('ERRO TOUCH' + error);
       // alert('Touch ID nao suporado/habilitado');
      });
  }, []);
  const handllogin = () => {
    const configs = {
      title: 'Authticao Touch ID',
      color: '#FF0000',
      sensorErrorDescription: 'Touch ID invalide',
    };
    TouchID.authenticate('Login ', configs)
      .then(success => {
        console.log('bien :)');
        setName('Sujeito Programador');
      })
      .catch(error => {
        console.log('errrrror', +error);
      });
  };
  const {height} = useWindowDimensions();
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const countries = ['Fr', 'Ar'];
  const onTermsOfUsePressed = () => {
    Navigation.navigate('Iscrire');
  };

  const SignUpPress = () => {
    Navigation.navigate('Societes');
  };
  const confirmpassword = () => {
    Navigation.navigate('PasswordOublie');
  };
  const handeltelephone = () => {
    setType('telephone');
  };

  const AdressEmail = () => {
    setType('email');
  };
  const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ];
  const [adressEmail, setAdressEmail] = useState('email');
  const [telephone, setTelephone] = useState('telephone');
  const [type, setType] = useState('email');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo1} style={styles.img} resizeMode="contain" />
      </View>
      <View style={styles.footer}>
        <Text style={[styles.title, {fontFamily: 'MMA Champ'}]}>
          Bienvenue à Mossahamati
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
        <View style={[styles.action, {marginTop: 20}]}>
          <TextInput
            secureTextEntry={true}
            placeholder="Mot de Passe"
            style={styles.TextInput}
          />
        </View>
        <Text
          style={[styles.password, {marginBottom: 10}]}
          onPress={handleSubmit(confirmpassword)}>
          Mot de passe oublié?
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={{marginTop: 5}}>Se souvenir de moi</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={handleSubmit(SignUpPress)}>
            <View style={styles.button}>
              <Text style={styles.signin}>S'identifier</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.button_creer}>
            <TouchableHighlight onPress={handllogin}>
              <FontAwesome5 name={'fingerprint'} size={40} color="white" />
            </TouchableHighlight>
          </View>
        </View>
        <Text style={styles.inscrit}>
          Vous n'etes pas encoreinscrit?{' '}
          <Text style={styles.Link} onPress={handleSubmit(onTermsOfUsePressed)}>
            Créer un compte
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SplachScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  btn: {
    borderRadius: 20,
    backgroundColor: '#0391D7',
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
    fontSize: 25,
    color: '#000000',
    marginBottom: 25,
    textAlign: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  img: {
    width: '40%',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 15,
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
  },
  action: {
    flexDirection: 'row',
    marginTop: 18,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 8,
    backgroundColor: '#f7f7f7',
  },
  password: {
    textAlign: 'right',
    marginTop: 5,
  },

  inscrit: {
    textAlign: 'left',
    marginTop: 8,
  },
  button: {
    alignItems: 'center',
    marginTop: 15,
    width: ' 260%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#000000',
  },
  touch: {
    width: '100%',
    height: 100,
    marginTop: 4,
  },
  signin: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  Link: {
    color: '#010000',
  },

  checkBox: {
    alignSelf: 'center',
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
  button_creer: {
    alignItems: 'center',
    marginTop: 15,
    width: ' 20%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: '#000000',
    marginRight: 10,
  },
});
