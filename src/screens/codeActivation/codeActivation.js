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
import img from '../../../assests/images/imag.png';
import Modale from '../modals/modal';
const CodeActivation = (props) => {
  const [show, setShow] = useState(false);
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const countries = ['Fr', 'Ar'];

  const anuuler = () => {
    Navigation.navigate('Iscrire');
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };
  const SignUpPress = () => {
    Navigation.navigate('Updatepassword');
  };
  const confirmpassword = () => {
    Navigation.navigate('Modal');
  };
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
        <Image source={img} style={styles.img} resizeMode="contain" />
        <View style={styles.dropdown}></View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Veuillez saisir</Text>
        <Text style={styles.title}>le code reçu par SMS/Email</Text>
        <Text style={styles.title_text}>
          Pour vérifier que ce compte vous appartient
        </Text>
        <View style={styles.action}>
          <TextInput placeholder="Code d'activation" style={styles.TextInput} />
        </View>
        <Text
          style={[styles.password, {}]}
          onPress={handleSubmit(setShow)}>
          Vous n'avez rien reçu?
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.button_creer}>
            <Text style={styles.signin} onPress={handleSubmit(SignUpPress)}>
              Confirmer
            </Text>
          </View>
          <View style={styles.button_annuler}>
            <Text style={styles.signin_annul} onPress={handleSubmit(anuuler)}>
              Annuler
            </Text>
          </View>
        </View>
      </View>
      <View>
        { show && <Modale setShow={setShow} />  }
      </View>
    </View>
  );
};

export default CodeActivation;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
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
  img: {
    width: '45%',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
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
    backgroundColor: '#f7f7f7',
  },
  password: {
    textAlign: 'right',
    marginTop: 10,
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
