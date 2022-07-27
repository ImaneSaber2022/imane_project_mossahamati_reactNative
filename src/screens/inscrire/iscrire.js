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
import CheckBox from '@react-native-community/checkbox';
import logo1 from '../../../assests/images/logo1.png';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Btnclik from '../../components/buttonclik/btnclik';
const Inscrire = ({onPress}) => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const countries = ['Fr', 'Ar'];

  const SignUpPress = () => {
    Navigation.navigate('CodeActivation');
  };
  const anuuler = () => {
    Navigation.navigate('SplachScreen');
  };

  const [adressEmail, setAdressEmail] = useState('email');
  const [telephone, setTelephone] = useState('telephone');
  const [type, setType] = useState('email');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dropdown}></View>
        <Image source={logo1} style={styles.img} resizeMode="contain" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>S'inscrire</Text>

        <View style={styles.action}>
          <TextInput placeholder=" Email" style={styles.TextInput} />
        </View>

        <View style={styles.action}>
          <TextInput placeholder="Pays" style={styles.TextInput} />
        </View>

        <View style={[styles.action, {marginTop: 20}]}>
          <TextInput
            secureTextEntry={true}
            placeholder="Mot de Passe"
            style={styles.TextInput}
          />
        </View>
        <View style={[styles.action, {marginTop: 20}]}>
          <TextInput
            secureTextEntry={true}
            placeholder=" Confirmation du Mot de Passe"
            style={styles.TextInput}
          />
        </View>
        <View style={{flexDirection: 'row',marginTop:10}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={{marginTop: 5}}>J'accepte les <Text style={styles.Link}>termes et conditions d'utilisation</Text ></Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.button_creer}>
            <Text style={styles.signin} onPress={handleSubmit(SignUpPress)}>
              Créer un compte
            </Text>
          </View>
          <View style={styles.button_annuler}>
            <Text style={styles.signin_annul} onPress={handleSubmit(anuuler)}>
              Annuler
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Inscrire;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  Link: {
    color: '#010000',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  styleButton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000000',
    marginBottom: 25,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  img: {
    width: '40%',
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
    marginTop: 5,
  },
  button_creer: {
    alignItems: 'center',
    marginTop: 10,
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
    marginTop: 10,
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
});
