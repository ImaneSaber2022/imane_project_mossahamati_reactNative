import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    TextInput,
    Platform,
    TouchableHighlight,
    useWindowDimensions,
    Image,
    ScrollView,
  } from 'react-native';
  import CustomButton from '../../components/CustomButton';
  import {CheckBox} from 'react-native-base';
  
  
  // import CheckBox from 'react-native-check-box'
  import Touche from '../../svg/touche.svg';
  import Svg, {Circle, SvgUri} from 'react-native-svg';
  import TouchID from 'react-native-touch-id';
  import React, {useEffect, useState} from 'react';
  import SelectDropdown from 'react-native-select-dropdown';
  import img from '../../../assests/images/imag.png';
  import imge from '../../../assests/images/img11.jpeg';
  
  const EnvoyerTraitement = ({onPress}) => {
    const {height} = useWindowDimensions();
  
    const SignUpPress = () => {
      console.warn('SignUpPress');
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Image
            source={img}
            style={[styles.img, {height: height * 0.3}]}
            resizeMode="contain"
          />
          <Text style={styles.title}>Vos donnée ont bien été envoyées pour traitement  </Text>
          <Text style={styles.title_text}>
            il est temps de vous concentrer sur votre activité.Mossahamati se charge du reste!
          </Text>
          <View style={styles.button}>
            <Text style={styles.signin} onPress={SignUpPress}>
              S'identifier
            </Text>
          </View>
          <Image
          source={imge}
          style={[styles.img,{marginTop:20}, {height: height * 0.3}]}
          resizeMode="contain"
        />
        </View>
      </View>
    );
  };
  
  export default EnvoyerTraitement;
  
  const {height} = Dimensions.get('screen');
  const height_logo = height * 0.28;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginBottom: 40,
    },
    img: {
      width: '100%',
    },
   
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: '#000000',
      marginBottom: 5,
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'gray',
      marginBottom: 15,
      textAlign: 'center',
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      
    },
   
    text: {
      textAlign: 'center',
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 100,
      marginTop: 100,
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        width: ' 100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#000000',
      },
      signin: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
      },
  
   
    Link: {
      color: '#010000',
    },
  
  });
  