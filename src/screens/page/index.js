import {View, Text, StyleSheet, Image,StatusBar} from 'react-native';
import React from 'react';
import image2 from '../../../assests/images/image2.png';
import page1 from '../../../assests/images/page1.png';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
const Page = ({}) => {
 const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
 
    setTimeout(()=>{
        Navigation.navigate('SplachScreen')
    },3000)
    
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={page1}
          style={styles.imgs}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Page;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },

  imgs: {
    width: '120%',
    height: 755,
    marginTop: 15,
  },

  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
