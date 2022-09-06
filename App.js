/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React, {useState, useEffect} from 'react';

// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableHighlight,
// } from 'react-native';
// import Btnclik from './src/components/buttonclik/btnclik';
// import Navigation from './src/navigation';
// import SplachScreen from './src/screens/splashScreen';
// import Iscrire from './src/screens/inscrire/iscrire';
// import CodeActivation from './src/screens/codeActivation/codeActivation';
// import Bienvenue from './src/screens/bienvenue';
// import PasswordOublie from './src/screens/passwordoublie';
// import Updatepassword from './src/screens/updatePassword/updatepassword';
// import ConditionUtilisation from './src/screens/conditionUtilisation/conditionUtilisation';
// import EnvoyerTraitement from './src/screens/envoyerTraitement';
// import Modal from './src/screens/modals/modal';
// import PiéreChargeCarteNational from './src/screens/piéreChargeCarteNational/piéreChargeCarteNational';
// import TraitementCompris from './src/screens/traitementCompris/traitementCompris';
// import ConnecterPassword from './src/screens/connecterPassword/connecterPassword';
// import Page from './src/screens/page';
// import Societes from './src/screens/societes';
// import Administration from './src/screens/administration';
// import Chart from './src/screens/chart';
// import {NavigationContainer} from '@react-navigation/native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import SelectDropdown from 'react-native-select-dropdown';
// import Select from '@redmin_delishaj/react-native-select';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from 'react-native-chart-kit';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Navigation />
//     </NavigationContainer>
//   );
// };
// export default App;
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    
  );
}
