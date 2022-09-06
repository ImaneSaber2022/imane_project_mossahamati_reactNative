import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import petiteLogo from '../../../assests/images/petiteLogo.png';
import petitelogo2 from '../../../assests/images/petitelogo2.png';
import logoS from '../../../assests/images/logoS.png';
import separateur from '../../../assests/images/separateur.png';
import userfile from '../../../assests/images/userfile.png';
import fileclee from '../../../assests/images/fileclee.png';
import deuxuser from '../../../assests/images/deuxuser.png';

const Tabs = () => {
 

  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
      }}>
        
      <Image
        source={petiteLogo}
        resizeMode="contain"
        style={{width: '15%', height: 35,marginTop: 3}}
      />
     
      <Image
        source={petitelogo2}
        resizeMode="contain"
        style={{width: '15%', height: 35,marginTop: 3}}
      />
      <Image source={separateur} resizeMode="contain" style={{marginTop: 5}} />

      <Image
        source={logoS}
        resizeMode="contain"
        style={{width: '15%', height: 35, marginTop: 5}}
      />
      <Image
        source={userfile}
        resizeMode="contain"
        style={{width: '15%', height: 35, marginTop: 5}}
      />
      <Image
        source={fileclee}
        resizeMode="contain"
        style={{width: '20%', height: 35, marginTop: 5}}
      />
      <Image
        source={deuxuser}
        resizeMode="contain"
        style={{width: '20%', height: 35, marginTop: 5}}
      />
      
    </View>
  );
};

export default Tabs;
