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
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerCustom from '../components/drawercustom';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation drawerContent={props => <DrawerCustom{...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Page" component={Page} />
      <Drawer.Screen name="SplachScreen" component={SplachScreen} />

      <Drawer.Screen
        name="PiéreChargeCarteNational"
        component={PiéreChargeCarteNational}
      />

      <Drawer.Screen name="Administration" component={Administration} />
      <Drawer.Screen 
        name="Updatecollaboration"
        component={Updatecollaboration}
      />
      <Drawer.Screen  name="Gestiondesroles" component={Gestiondesroles} />
      <Drawer.Screen  name="Ajouterprofil" component={Ajouterprofil} />
      <Drawer.Screen  name="UpdateProfil" component={UpdateProfil} />
      <Drawer.Screen  name="Gestionutilisateur" component={Gestionutilisateur} />
     
      <Drawer.Screen 
        name="Ajoutercollaboration"
        component={Ajoutercollaboration}
      />
      <Drawer.Screen name="Toutessocietes" component={Toutessocietes} />
      <Drawer.Screen name="Identite" component={Identite} />
      <Drawer.Screen name="Password" component={Password} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Iscrire" component={Iscrire} />
      <Drawer.Screen name="CodeActivation" component={CodeActivation} />
      <Drawer.Screen name="Bienvenue" component={Bienvenue} />
      <Drawer.Screen name="PasswordOublie" component={PasswordOublie} />
      <Drawer.Screen name="Updatepassword" component={Updatepassword} />
      <Drawer.Screen name="Modal" component={Modal} />
      <Drawer.Screen name="Societes" component={Societes} />
      <Drawer.Screen
        name="ConditionUtilisation"
        component={ConditionUtilisation}
      />
      <Drawer.Screen name="TraitementCompris" component={TraitementCompris} />
      <Drawer.Screen name="Societe" component={Societe} />
      <Drawer.Screen name="JournalEvenement" component={JournalEvenement} />
      <Drawer.Screen name="MonCompte" component={MonCompte} />
      <Drawer.Screen name="ConneterPasword" component={ConneterPasword} />
      <Drawer.Screen name="ContactezNous" component={ContactezNous} />
    </Drawer.Navigator>
  );
};

export default Navigation;
