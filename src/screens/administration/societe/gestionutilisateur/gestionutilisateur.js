import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import deconnecter from '../../../../../assests/images/deconnecter.png'
import mosahamatilogo from '../../../../../assests/images/mosahamatilogo.png';
import userdark from '../../../../../assests/images/userdark.png';
import SearchBar from '../../../shared/searchBar'
import laravel from '../../../../../assests/images/laravel.png';
import gestionroles from '../../../../../assests/images/gestionroles.png';
import user from '../../../../../assests/images/user.png';
const Gestionutilisateur = () => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const chargementdocuments = () => {
    Navigation.navigate('ConneterPasword');
  };
  const ajouterCollaboration = () => {
    Navigation.navigate('Ajoutercollaboration');
  };
  const [value, setValue] = useState();
  const updateSearch = value => {};
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={mosahamatilogo}
          style={styles.imgs}
          resizeMode="contain"
        />
        <View
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={userdark}
            style={{marginTop: 29}}
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 50,
          }}>
          <View>
            <Text style={{marginTop: 5, fontSize: 20, color: '#A2A2A5'}}>
              Laravel
            </Text>
          </View>
          <SearchBar
            value={value}
            updateSearch={updateSearch}
            style={{color: '#A2A2A5'}}
          />
        </View>
        <View style={[styles.button_annulers, {backgroundColor: '#FFFFFF',marginLeft:140,width:'35%'}]}>
            <TouchableOpacity onPress={handleSubmit(ajouterCollaboration)}>
              <Image
                source={user}
                resizeMode="contain"
              />
              <Text style={[styles.signin_annul,{maxWidth:'80%',textAlign:'center',marginLeft:12}]}>Gestion des utilisateur</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default Gestionutilisateur;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  button_annulers: {
    textAlign: 'center',
    borderRadius: 3,
    borderColor: '#e8e8e8',
    borderWidth: 1,
   
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272427',
    textAlign: 'center',
    
  },
  
  header: {
    flex: 2,
    backgroundColor: '#fff',
  },
  button_annulers: {
    borderRadius: 25,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '85%',
    padding: 20,
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272427',
  },
  imgs: {
    width: '30%',
    height: 90,
  },
});
