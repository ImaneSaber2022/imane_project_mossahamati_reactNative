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
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  
  // import CheckBox from 'react-native-check-box'
  import Touche from '../../svg/touche.svg';
  import Svg, {Circle, SvgUri} from 'react-native-svg';
  import TouchID from 'react-native-touch-id';
  import React, {useEffect, useState} from 'react';
  import SelectDropdown from 'react-native-select-dropdown';

  import imgcondition from '../../../assests/images/imgcondition.png';
  const ConditionUtilisation = ({onPress}) => {
    const {height} = useWindowDimensions();
  
    const SignUpPress = () => {
      console.warn('SignUpPress');
    };

  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Image
            source={imgcondition}
            style={[styles.img, {height: height * 0.3}]}
            resizeMode="contain"
          />
          <Text style={styles.title}>Les conditions d'utilisation  </Text>
        
         
          <Text style={styles.title_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et 
           dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia
             deserunt mollit anim id est laborum. 
             Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          </Text>
          
          <View style={styles.button}>
            <Text style={styles.signin} onPress={SignUpPress}>
              Retour
            </Text>
          </View>
          
        </View>
      </View>
    );
  };
  
  export default ConditionUtilisation;
  
  const {height} = Dimensions.get('screen');
  const height_logo = height * 0.28;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
     
    },
    img: {
      width: '100%',
    },
   
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: '#1E1F20',
      marginBottom: 5,
      fontFamily: 'sans-serif',
    },
    title_text: {
     textAlign:'center',
      fontSize: 16,
      color: '#1E1F20',
     
    
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
      fontFamily: 'Open Sans',
    },
    button: {
      alignItems: 'center',
      marginTop: 20,
      width: ' 100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: '#e8e8e8',
      borderWidth: 1,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#1E1F20',
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
  