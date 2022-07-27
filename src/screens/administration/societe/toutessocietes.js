import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Card} from 'native-base';
import React from 'react';
import Societe from '../societe/societe';
import JournalEvenement from '../journal';
import MonCompte from '../monCompte';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import deconnecter from '../../../../assests/images/deconnecter.png';
import side from '../../../../assests/images/side.png';
import entrer from '../../../../assests/images/entrer.png';
import logowhite from '../../../../assests/images/logowhite.png';
import userdark from '../../../../assests/images/userdark.png';
import logoside from '../../../../assests/images/logoside.png';
import administration from '../../../../assests/images/administration.png';
import sidebuttom from '../../../../assests/images/sidebuttom.png';
import logo2mosahamati from '../../../../assests/images/logo2mosahamati.png';
import comptabilité from '../../../../assests/images/comptabilité.png';
import commercial from '../../../../assests/images/commercial.png';
import titres from '../../../../assests/images/titres.png';
import social from '../../../../assests/images/social.png';
import out from '../../../../assests/images/out.png';
import plusss from '../../../../assests/images/plusss.png';
import laravel from '../../../../assests/images/laravel.png';
import react from '../../../../assests/images/react.png';
import vue from '../../../../assests/images/vue.png';
import image1 from '../../../../assests/images/image1.png';
//  import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//  const Tab = createMaterialTopTabNavigator();
const Toutessocietes = onPress => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const chargementdocuments = () => {
    Navigation.navigate('ConneterPasword');
  };
  const pluschargement = () => {
    Navigation.navigate('PiéreChargeCarteNational');
  };
  const handleSociete = () => {
    Navigation.navigate('Administration');
  };
  return (
    <View style={styles.container}>
      {/* <View style={{flexDirection: 'row',justifyContent:'space-around',backgroundColor:'#000000'}}>
        <Image
          source={logo2mosahamati}
          style={{height: 80, width: 175}}
          resizeMode="contain"
        />
        <Image
          source={entrer}
          style={{height: 60, width: 25,marginTop:12,marginLeft:85}}
          resizeMode="contain"
        />
      </View>
      <View style={{marginTop:30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around',backgroundColor:'#000000'}}>
          <Image
            source={administration}
            style={{height: 55, width: 80}}
            resizeMode="contain"
          />
          <Text style={{color: '#fff', marginTop: 18}}>Administration</Text>
          <Image
            source={sidebuttom}
            style={{height: 35, width: 90,marginTop:10}}
            resizeMode="contain"
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around',marginTop:30}}>
          <Image
            source={comptabilité}
            style={{height: 40, width: 100}}
            resizeMode="contain"
          />
          <Text style={{color: '#fff', marginTop: 8}}>Administration</Text>
          <Image
            source={out}
            style={{height: 35, width: 90,marginTop:4}}
            resizeMode="contain"
          />
        </View> 
        <View style={{flexDirection: 'row', justifyContent: 'space-around',marginTop:30}}>
          <Image
            source={commercial}
            style={{height: 40, width: 100}}
            resizeMode="contain"
          />
          <Text style={{color: '#fff', marginTop: 8}}>Administration</Text>
          <Image
            source={out}
            style={{height: 35, width: 90,marginTop:4}}
            resizeMode="contain"
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around',marginTop:30}}>
          <Image
            source={titres}
            style={{height: 40, width: 100}}
            resizeMode="contain"
          />
          <Text style={{color: '#fff', marginTop: 8}}>Administration</Text>
          <Image
            source={out}
            style={{height: 35, width: 90,marginTop:4}}
            resizeMode="contain"
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around',marginTop:30}}>
          <Image
            source={social}
            style={{height: 40, width: 100}}
            resizeMode="contain"
          />
          <Text style={{color: '#fff', marginTop: 8}}>Administration</Text>
          <Image
            source={out}
            style={{height: 35, width: 90,marginTop:4}}
            resizeMode="contain"
          />
        </View>
      </View> */}
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image source={side} style={styles.imgs} resizeMode="contain" />
        <Image source={logowhite} style={styles.imgs} resizeMode="contain" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={handleSubmit(chargementdocuments)}>
            <Image
              source={userdark}
              style={{marginTop: 29}}
              resizeMode="contain"
            />
          </TouchableOpacity>
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
        <TouchableOpacity onPress={handleSubmit(pluschargement)}>
          <Image
            source={plusss}
            style={{height: 90, width: 80}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit(handleSociete)}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '85%',
              height: 120,
              marginTop: 25,
              backgroundColor: '#FFFFFF',
              borderWidth: 2,
              borderRadius: 8,
              shadowColor: 'red',
              borderColor: 'white',
            }}>
            <Image
              source={laravel}
              style={{height: 100, width: 40}}
              resizeMode="contain"
            />
            <View>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: '#000000',
                }}>
                Laravel
              </Text>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                identifiant Fiscal
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>C000224</Text>
            </View>
            <Image
              source={image1}
              style={{height: 100, width: 100}}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit(handleSociete)}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '85%',
              height: 120,
              marginTop: 25,
              backgroundColor: '#FFFFFF',
              borderWidth: 2,
              borderRadius: 8,
              shadowColor: 'red',
              borderColor: 'white',
            }}>
            <Image
              source={react}
              style={{height: 100, width: 50}}
              resizeMode="contain"
            />
            <View>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: '#000000',
                }}>
                React
              </Text>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                identifiant Fiscal
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>C000224</Text>
            </View>
            <Image
              source={image1}
              style={{height: 100, width: 100}}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit(handleSociete)}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '85%',
              height: 120,
              marginTop: 25,
              backgroundColor: '#FFFFFF',
              borderWidth: 2,
              borderRadius: 8,
              shadowColor: 'red',
              borderColor: 'white',
            }}>
            <Image
              source={vue}
              style={{height: 100, width: 50}}
              resizeMode="contain"
            />
            <View>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: '#000000',
                }}>
                VueJs
              </Text>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                identifiant Fiscal
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>C000224</Text>
            </View>
            <Image
              source={image1}
              style={{height: 100, width: 100}}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Toutessocietes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
    backgroundColor: '#F5F8FA',
    alignItems: 'center',
  },

  imgs: {
    width: '20%',
    height: 90,
  },
});
