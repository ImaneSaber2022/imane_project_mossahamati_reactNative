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
} from 'react-native';
import img from '../../../assests/images/imag.png';
import imge from '../../../assests/images/camera.png';
import data from '../../../assests/images/data.png';
// import CheckBox from 'react-native-check-box'
import Touche from '../../svg/touche.svg';
import Svg, {Circle, SvgUri} from 'react-native-svg';
import TouchID from 'react-native-touch-id';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
const PiéreChargeCarteNational = ({onPress}) => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const countries = ['Fr', 'Ar'];
  const confirmer = () => {
    Navigation.navigate('TraitementCompris');
  };
  const Annuler = () => {
    Navigation.navigate('Bienvenue');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={img} style={styles.img} resizeMode="contain" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>
          Piere de charger votre carte nationale d'identité recto
        </Text>
        <Text style={{fontWeight: 'bold', marginTop: 4}}>
          Vos informations sont en sécurité
        </Text>
        <View style={styles.borderhache}>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            <Text> Cliquez pour charger votre document</Text>
          </Text>
          <Text style={{marginTop: 10}}>
            <View
              style={[
                styles.button_annulers,
                {paddingBottom: 20, paddingTop: 20},
              ]}>
              <Image source={imge} style={styles.imge} resizeMode="contain" />
              <Text style={styles.signin_annul}>Prendre une photo</Text>
            </View>
          </Text>

          <Text style={{marginTop: 10}}>
            <View
              style={[
                styles.button_annulers,
                {paddingBottom: 20, paddingTop: 20},
              ]}>
              <Image source={data} style={styles.imge} resizeMode="contain" />
              <Text style={styles.signin_annul}>Prendre une photo</Text>
            </View>
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.button_creer}>
            <Text style={styles.signin} onPress={handleSubmit(confirmer)}>
              Confirmer
            </Text>
          </View>
          <View style={styles.button_annuler}>
            <Text style={styles.signin_annul} onPress={handleSubmit(Annuler)}>
              Annuler
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PiéreChargeCarteNational;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  borderhache: {
    fontSize: 30,
    borderWidth: 2,
    alignSelf: 'center',
    borderColor: '#3F3D3F',
    borderStyle: 'dashed',
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    height: 290,
  },

  button_annulers: {
    textAlign: 'center',
    borderRadius: 7,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '20%',
    backgroundColor: '#FAF8FA',
    paddingLeft: 70,
    paddingRight: 70,
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272427',
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

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
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

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },

  text_footer: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  Link: {
    color: '#010000',
  },
  img: {
    width: '40%',
  },
  imge: {
    width: 25,
    height: 25,
    left: 50,
  },
});
