import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation} from '@react-navigation/native';
import { useForm } from 'react-hook-form';
const ForgotPasswordScreen = () => {

  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const onSendPressed = (data) => {
    console.warn(data);
    navigation.navigate('NewPassword')
  };
  const onSignInPress = () => {
    navigation.navigate('SignIn')
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
         name="username" 
         control={control} rules={{required: 'Username  is required'}}
 
          placeholder="Username"
          
        />
        <CustomButton text="send" onPress={handleSubmit(onSendPressed)} />

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

export default ForgotPasswordScreen;
