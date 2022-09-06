import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Societe from './societe/societe';
import JournalEvenement from './journal';
import MonCompte from './monCompte';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import deconnecter from '../../../assests/images/deconnecter.png';
import mosahamatilogo from '../../../assests/images/mosahamatilogo.png';
import userdark from '../../../assests/images/userdark.png';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Tabs from '../tabs/tabs';
const Tab = createMaterialTopTabNavigator();
const Administration = onPress => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const chargementdocuments = () => {
    Navigation.navigate('ConneterPasword');
  };
  const handlesociete = () => {
    Navigation.navigate('Societes');
  };
  const [activitab, setActivtab] = useState('Societe');
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={handleSubmit(handlesociete)}>
      <FontAwesome5 name={'angle-double-left'} size={20} color="gray" solid style={{marginTop:35,marginLeft:10}} />
       </TouchableOpacity >
        <Image
          source={mosahamatilogo}
          style={styles.imgs}
          resizeMode="contain"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={userdark}
            style={{marginTop: 30,marginLeft:100}}
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

      <Tab.Navigator>
        <Tab.Screen name="Societe" component={Societe} />
        <Tab.Screen name="JournalEvenement" component={JournalEvenement} />
        <Tab.Screen name="MonCompte" component={MonCompte} />
      </Tab.Navigator>
      <View>
        <Tabs />
      </View>
    </View>
  );
};

export default Administration;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },

  imgs: {
    width: '30%',
    height: 90,
    marginLeft:20
  },
});
