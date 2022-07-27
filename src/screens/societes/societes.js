import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import logomosahamati from '../../../assests/images/logomosahamati.png';
import imgsociete from '../../../assests/images/imgsociete.png';
import imge from '../../../assests/images/camera.png';
import laravel from '../../../assests/images/laravel.png';
import vue from '../../../assests/images/vue.png';
import toutes from '../../../assests/images/toutes.png';
import react from '../../../assests/images/react.png';
import SearchBar from '../shared/searchBar';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const Societes = () => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const handlelaravel = () => {
    Navigation.navigate('Administration');
  };
  const handetoutessocietes = () => {
    Navigation.navigate('Toutessocietes');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={logomosahamati}
          style={styles.imgs}
          resizeMode="contain"
        />
        <Text style={styles.title}>Choisissez votre Société </Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 15,
          }}>
          <View style={styles.button_annulers}>
            <TouchableOpacity onPress={handleSubmit(handlelaravel)}>
              <Image
                source={laravel}
                style={styles.imge}
                resizeMode="contain"
              />
              <Text style={styles.signin_annul}>Laravel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_annulers}>
            <TouchableOpacity onPress={handleSubmit(handlelaravel)}>
              <Image source={react} style={styles.imge} resizeMode="contain" />
              <Text style={styles.signin_annul}>React</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={styles.button_annulers}>
            <TouchableOpacity onPress={handleSubmit(handlelaravel)}>
              <Image source={vue} style={styles.imge} resizeMode="contain" />
              <Text style={styles.signin_annul}>VueJs</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_annulers}>
            <TouchableOpacity onPress={handleSubmit(handetoutessocietes)}>
              <Image source={toutes} style={styles.imge} resizeMode="contain" />
              <Text style={styles.signin_annul}>Toutes les SOCIETES</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image source={imgsociete} style={styles.img} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Societes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imge: {
    width: 120,
    height: 50,
    right: 8,
  },
  button_annulers: {
    textAlign: 'center',
    borderRadius: 7,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '40%',
    backgroundColor: '#fbf4ee',
    padding: 20,
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272427',
    textAlign: 'center',
  },
  img: {
    width: '100%',
  },
  imgs: {
    width: '40%',
    marginTop: 15,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000000',
    marginTop: 10,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 18,
  },

  Link: {
    color: '#010000',
  },
  button_creer: {
    alignItems: 'center',
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
