import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { useForm } from 'react-hook-form';
const ConfirmEmailScreen = () => {

  const {control, handleSubmit} = useForm();

  const Navigation = useNavigation();

  const onConfirmPressed = (data) => {
    console.warn(data);
    Navigation.navigate('HomeScreen');
  };
 
  const onSignInPress = () => {
    Navigation.navigate('SignIn');
  };
  const onResendPress = () => {
    Navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
        name="code" 
        control={control} rules={{required: 'Confirmation code is required'}}

          placeholder="Enter your confirmation code"
          
        />
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
        
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text=" Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },
  Link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
