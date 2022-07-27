import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'
import search from '../../../assests/images/search.png';
const searchBar = (value, updateSearch,style) => {
  const [query, setQuery] = useState();
  return (
    <View style={[styles.container,style]}>
      <View style={styles.searchcontainer}>
        <Image source={search} style={styles.imgs} resizeMode="contain" />
      </View>
    </View>
  );
};

export default searchBar;
const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center',
  },
  
  searchcontainer: {
    width: '260%',
    height: 35,
    backgroundColor: '#F39200',
    borderRadius: 10,
    left:50
  },
  imgs: {
    width: 20,
    height: 25,
    margin: 5,
  },
});
