import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplachScreen from '../screens/splashScreen';
import Iscrire from '../screens/inscrire/iscrire';
import CodeActivation from '../screens/codeActivation/codeActivation';
import Bienvenue from '../screens/bienvenue';
import PasswordOublie from '../screens/passwordoublie';
import Updatepassword from '../screens/updatePassword/updatepassword';
import Modal from '../screens/modals/modal';
import PiéreChargeCarteNational from '../screens/piéreChargeCarteNational/piéreChargeCarteNational';
import ConditionUtilisation from '../screens/conditionUtilisation/conditionUtilisation';
import TraitementCompris from '../screens/traitementCompris/traitementCompris';
import Page from '../screens/page';
import Societes from '../screens/societes/societes';
import Administration from '../screens/administration';
import Societe from '../screens/administration/societe';
import JournalEvenement from '../screens/administration/journal';
import MonCompte from '../screens/administration/monCompte';
import Gestiondesroles from '../screens/administration/societe/gestiondesroles/gestiondesroles';
import ConneterPasword from '../screens/connecterPassword';
import ContactezNous from '../screens/administration/monCompte/contacteznous';
import Toutessocietes from '../screens/administration/societe/toutessocietes';
import Notification from '../screens/administration/monCompte/notification';
import Password from '../screens/administration/monCompte/password';
import Identite from '../screens/administration/monCompte/identite';
import Gestionutilisateur from '../screens/administration/societe/gestionutilisateur/gestionutilisateur';
import Ajoutercollaboration from '../screens/administration/societe/gestionutilisateur/ajoutercollaboration';
import Ajouterprofil from '../screens/administration/societe/gestiondesroles/ajouterprofil';
import Updatecollaboration from '../screens/administration/societe/gestionutilisateur/updatecollaborateur';
import UpdateProfil from '../screens/administration/societe/gestiondesroles/updateprofil';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Administration" component={Administration} />
      <Stack.Screen name="Page" component={Page} />
      <Stack.Screen
        name="Updatecollaboration"
        component={Updatecollaboration}
      />
      <Stack.Screen name="Gestiondesroles" component={Gestiondesroles} />
      <Stack.Screen name="Ajouterprofil" component={Ajouterprofil} />
      <Stack.Screen name="UpdateProfil" component={UpdateProfil} />
      <Stack.Screen name="Gestionutilisateur" component={Gestionutilisateur} />
      <Stack.Screen
        name="Ajoutercollaboration"
        component={Ajoutercollaboration}
      />
      <Stack.Screen name="Toutessocietes" component={Toutessocietes} />
      <Stack.Screen name="Identite" component={Identite} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="SplachScreen" component={SplachScreen} />
      <Stack.Screen name="Iscrire" component={Iscrire} />
      <Stack.Screen name="CodeActivation" component={CodeActivation} />
      <Stack.Screen name="Bienvenue" component={Bienvenue} />
      <Stack.Screen name="PasswordOublie" component={PasswordOublie} />
      <Stack.Screen name="Updatepassword" component={Updatepassword} />
      <Stack.Screen name="Modal" component={Modal} />
      <Stack.Screen
        name="PiéreChargeCarteNational"
        component={PiéreChargeCarteNational}
      />
      <Stack.Screen name="Societes" component={Societes} />
      <Stack.Screen
        name="ConditionUtilisation"
        component={ConditionUtilisation}
      />
      <Stack.Screen name="TraitementCompris" component={TraitementCompris} />
      <Stack.Screen name="Societe" component={Societe} />
      <Stack.Screen name="JournalEvenement" component={JournalEvenement} />
      <Stack.Screen name="MonCompte" component={MonCompte} />
      <Stack.Screen name="ConneterPasword" component={ConneterPasword} />
      <Stack.Screen name="ContactezNous" component={ContactezNous} />
    </Stack.Navigator>
  );
};

export default Navigation;
