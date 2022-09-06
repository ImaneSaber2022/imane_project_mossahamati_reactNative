import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Deconnecter from '../../../assests/images/deconnecter1.png';
import userprofil from '../../../assests/images/userprofil.png';
import laravel from '../../../assests/images/laravel.png';
import {ScrollView} from 'react-native-gesture-handler';
import vue from '../../../assests/images/vue.png';
import toutes from '../../../assests/images/toutes.png';
import react from '../../../assests/images/react.png';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
const DrawerCustom = props => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const Moncompte = () => {
    Navigation.navigate('Administration');
  };
  const Notification = () => {
    Navigation.navigate('Notification');
  };
  const Contactez = () => {
    Navigation.navigate('ContactezNous');
  };
  const handletoutes = () => {
    Navigation.navigate('Toutessocietes');
  };
  return (
    <ScrollView>
      <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={userprofil}
              style={{marginTop: 15, marginLeft: 20}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  marginTop: 20,
                  marginLeft: 15,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Nom Prénom
              </Text>
            </TouchableOpacity>
            <Text style={{marginLeft: 15, color: '#B7B5C3'}}>Roles</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 15}}>
            <View>
              <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold'}}>
                Email:
              </Text>
            </View>

            <View>
              <Text style={{marginLeft: 10, color: '#B7B5C3'}}>
                imanesaber@gmail.com
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15}}>
            <View>
              <Text style={{marginLeft: 9, fontSize: 14, fontWeight: 'bold'}}>
                Téléphone:
              </Text>
            </View>
            <View>
              <Text style={{marginLeft: 10, color: '#B7B5C3'}}>
                06 XX XX XX XX
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15}}>
            <View>
              <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold'}}>
                Ville:
              </Text>
            </View>
            <View>
              <Text style={{marginLeft: 10, color: '#B7B5C3'}}>Casablanca</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit(Moncompte)}>
          <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 50}}>
            <FontAwesome5
              name={'user'}
              size={20}
              color="gray"
              solid
              style={{}}
            />
            <Text
              style={{
                marginLeft: 10,
                marginTop: 2,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Mon compte
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit(Notification)}>
          <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 50}}>
            <FontAwesome5
              name={'bell'}
              size={20}
              color="gray"
              solid
              style={{}}
            />
            <Text
              style={{
                marginLeft: 10,
                marginTop: 2,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Notification
            </Text>
            <View
              style={{
                backgroundColor: '#F39200',
                width: 25,
                height: 25,
                borderRadius: 30,
                marginLeft: 20,
              }}>
              <Text style={{textAlign: 'center', marginTop: 2}}>2</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit(Contactez)}>
          <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 50}}>
            <FontAwesome5
              name={'comment-alt'}
              size={20}
              color="gray"
              solid
              style={{}}
            />
            <Text
              style={{
                marginLeft: 10,
                marginTop: 2,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Contactez-nous
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 50}}>
            <FontAwesome5
              name={'language'}
              size={20}
              color="gray"
              solid
              style={{}}
            />
            <Text
              style={{
                marginLeft: 10,
                marginTop: 2,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Langue
            </Text>
            <FontAwesome5
              name={'angle-right'}
              size={20}
              color="gray"
              solid
              style={{marginTop: 1, marginLeft: 4}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit(handletoutes)}>
          <View
            style={{
              backgroundColor: '#ECEEF4',
              marginLeft: 30,
              marginRight: 30,
              marginTop: 30,
            }}>
            <View style={{marginTop: 10, marginLeft: 50}}>
              <Text
                style={{fontSize: 14, fontWeight: 'bold', color: '#464E64'}}>
                Switcher vers une
              </Text>
              <Text
                style={{fontSize: 14, fontWeight: 'bold', color: '#464E64'}}>
                autre Societé :
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                marginLeft: 10,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  textAlign: 'center',
                  borderRadius: 7,
                  borderColor: '#e8e8e8',
                  borderWidth: 1,
                  width: '35%',
                  backgroundColor: '#F8F8F8',
                  padding: 4,
                }}>
                <Image
                  source={laravel}
                  style={{width: '55%', height: 30, marginLeft: 15}}
                  resizeMode="contain"
                />
                <Text style={{marginLeft: 10}}>laravel</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  textAlign: 'center',
                  borderRadius: 7,
                  borderColor: '#e8e8e8',
                  borderWidth: 1,
                  width: '35%',
                  backgroundColor: '#F8F8F8',
                  padding: 4,
                }}>
                <Image
                  source={react}
                  style={{width: '100%', height: 40}}
                  resizeMode="contain"
                />
                <Text style={{marginLeft: 12}}>react</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 4,
                marginBottom: 15,
                marginLeft: 10,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  textAlign: 'center',
                  borderRadius: 7,
                  borderColor: '#e8e8e8',
                  borderWidth: 1,
                  width: '35%',
                  backgroundColor: '#F8F8F8',
                  padding: 4,
                }}>
                <Image
                  source={vue}
                  style={{width: '100%', height: 35, marginTop: 10}}
                  resizeMode="contain"
                />
                <Text style={{marginLeft: 12}}>VueJs</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  textAlign: 'center',
                  borderRadius: 7,
                  borderColor: '#e8e8e8',
                  borderWidth: 1,
                  width: '35%',
                  backgroundColor: '#F8F8F8',
                  padding: 0,
                }}>
                <Image
                  source={toutes}
                  style={{
                    width: '65%',
                    height: 35,
                    marginLeft: 12,
                    marginTop: 10,
                  }}
                  resizeMode="contain"
                />
                <Text style={{marginLeft: 12}}>Toutes</Text>
                <Text style={{marginLeft: 8, fontSize: 12}}>les Societe</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', marginLeft: 45, marginTop: 60}}>
            <Image source={Deconnecter} resizeMode="contain" />
            <Text
              style={{
                marginLeft: 10,
                marginTop: 2,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Se déconnecter
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DrawerCustom;
