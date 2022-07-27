/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Btnclik from './src/components/buttonclik/btnclik';
import Navigation from './src/navigation';
import SplachScreen from './src/screens/splashScreen';
import Iscrire from './src/screens/inscrire/iscrire';
import CodeActivation from './src/screens/codeActivation/codeActivation';
import Bienvenue from './src/screens/bienvenue';
import PasswordOublie from './src/screens/passwordoublie';
import Updatepassword from './src/screens/updatePassword/updatepassword';
import ConditionUtilisation from './src/screens/conditionUtilisation/conditionUtilisation';
import EnvoyerTraitement from './src/screens/envoyerTraitement';
import Modal from './src/screens/modals/modal';
import PiéreChargeCarteNational from './src/screens/piéreChargeCarteNational/piéreChargeCarteNational';
import TraitementCompris from './src/screens/traitementCompris/traitementCompris';
import ConnecterPassword from './src/screens/connecterPassword/connecterPassword';
import Page from './src/screens/page';
import Societes from './src/screens/societes';
import Administration from './src/screens/administration';
import Chart from './src/screens/chart';
import {NavigationContainer} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectDropdown from 'react-native-select-dropdown';
import Select from '@redmin_delishaj/react-native-select';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const App = () => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['ABC']);
  const [items, setItems] = useState([
    {label: 'ABC', value: 'ABC'},
    // {label: 'Madrid', value: 'madrid', parent: 'ABC'},
    // {label: 'Barcelona', value: 'barcelona', parent: 'spain'},

    // {label: 'Italy', value: 'italy'},
    // {label: 'Rome', value: 'rome', parent: 'italy'},

    // {label: 'Finland', value: 'finland'}
  ]);
  return (


    
    // <SafeAreaView style={styles.root}>
     <NavigationContainer>
      <Navigation />
    </NavigationContainer> 
    

    //  <View>
    //    <View style={{
    //     backgroundColor: '#F3F6F9',
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     paddingHorizontal: 15
    //   }}>
    //     <DropDownPicker
    //       open={open}
    //       value={value}
    //       items={items}
    //       setOpen={setOpen}
    //       setValue={setValue}
    //       setItems={setItems}
    //       multiple={true}
    //       mode="BADGE"

    //     />
    //   </View>
    //    <SelectDropdown
    //       data={countries}
    //       onSelect={(selectedItem, index) => {
    //         console.log(selectedItem, index);
    //       }}
    //       buttonTextAfterSelection={(selectedItem, index) => {
    //         // text represented after item is selected
    //         // if data array is an array of objects then return selectedItem.property to render after item is selected
    //         return selectedItem;
    //       }}
    //       rowTextForSelection={(item, index) => {
    //         // text represented for each item in dropdown
    //         // if data array is an array of objects then return item.property to represent item in dropdown
    //         return item;
    //       }}
    //     />
    //     <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
    //       <View style={{marginTop:8}}>
    //        <Text>SOCIETE</Text>
    //       </View>
    //       <View style={{height: 35, width: '50%', justifyContent: 'center'}}>
    //         <Select placeholder="Societe"></Select>
    //       </View>
    //     </View>
    //   </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
// import { LineChart } from "react-native-gifted-charts"
// const App = () => {
// const [currentData, setCurrentData] = useState(latestData);
// const latestData = [
//     {
//       value: 100,
//       labelComponent: () => lcomp('22 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 120,
//       hideDataPoint: true,
//     },
//     {
//       value: 210,
//       customDataPoint: dPoint,
//     },
//     {
//       value: 250,
//       hideDataPoint: true,
//     },
//     {
//       value: 320,
//       labelComponent: () => lcomp('24 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 310,
//       hideDataPoint: true,
//     },
//     {
//       value: 270,
//       customDataPoint: dPoint,
//     },
//     {
//       value: 240,
//       hideDataPoint: true,
//     },
//     {
//       value: 130,
//       labelComponent: () => lcomp('26 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 120,
//       hideDataPoint: true,
//     },
//     {
//       value: 100,
//       customDataPoint: dPoint,
//     },
//     {
//       value: 210,
//       hideDataPoint: true,
//     },
//     {
//       value: 270,
//       labelComponent: () => lcomp('28 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 240,
//       hideDataPoint: true,
//     },
//     {
//       value: 120,
//       hideDataPoint: true,
//     },
//     {
//       value: 100,
//       customDataPoint: dPoint,
//     },
//     {
//       value: 210,
//       labelComponent: () => lcomp('28 Nov'),
//       customDataPoint: dPoint,
//     },
//     {
//       value: 20,
//       hideDataPoint: true,
//     },
//     {
//       value: 100,
//       customDataPoint: dPoint,
//     },
//   ];
//   const dPoint = () => {
//     return (
//       <View
//         style={{
//           width: 14,
//           height: 14,
//           backgroundColor: 'white',
//           borderWidth: 3,
//           borderRadius: 7,
//           borderColor: '#07BAD1',
//         }}
//       />
//     );
//   };
// return (
//     <View>
//       <View
//         style={{
//           marginVertical: 100,
//           paddingVertical: 50,
//           backgroundColor: '#414141',
//         }}>
//         <LineChart
//           isAnimated
//           thickness={3}
//           color="#07BAD1"
//           maxValue={600}
//           noOfSections={3}
//           animateOnDataChange
//           animationDuration={1000}
//           onDataChangeAnimationDuration={300}
//           areaChart
//           yAxisTextStyle={{color: 'lightgray'}}
//           data={currentData}
//           hideDataPoints
//           startFillColor={'rgb(84,219,234)'}
//           endFillColor={'rgb(84,219,234)'}
//           startOpacity={0.4}
//           endOpacity={0.1}
//           spacing={22}
//           backgroundColor="#414141"
//           rulesColor="gray"
//           rulesType="solid"
//           initialSpacing={10}
//           yAxisColor="lightgray"
//           xAxisColor="lightgray"
//         />
//       </View>
//     </View>
//     );
// };
//  export default App;
