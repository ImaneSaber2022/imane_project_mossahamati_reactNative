import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assests/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const Navigation = useNavigation();
  const {control, handleSubmit, formState: {errors},} = useForm();
  const onSignInPressed = data => {
    console.log(data);
    // validate user
    Navigation.navigate('HomeScreen');
  };
  const onForgotPasswordPressed = () => {
    Navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    Navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput name="username" 
        placeholder="Username" 
        control={control} rules={{required: 'Username is required'}} />

        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{required: 'Password is required',
          minLength: {
            value: 3,
            message: 'Password should be minimun 3 characters long',
          },}}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
});

export default SignInScreen;
