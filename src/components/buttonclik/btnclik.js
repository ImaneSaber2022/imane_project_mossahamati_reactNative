import {View, Text, StyleSheet,Button} from 'react-native';
import React from 'react';

const btnclik = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Button  
          title="Confirmer"color="#000000"
          onPress={handleSubmit(SignUpPress)}
        />
        <Button
          title="Annuler"color='gray'
          onPress={handleSubmit(anuuler)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 40,
  },
  
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:10,
    paddingTop: 10,
    paddingBottom: 10,

  },
});
export default btnclik;
