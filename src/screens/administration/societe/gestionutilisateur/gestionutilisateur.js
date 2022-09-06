import {View, Text, StyleSheet, Image, TouchableOpacity,TextInput} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import deconnecter from '../../../../../assests/images/deconnecter.png';
import mosahamatilogo from '../../../../../assests/images/mosahamatilogo.png';
import userdark from '../../../../../assests/images/userdark.png';
import SearchBar from '../../../shared/searchBar';
import laravel from '../../../../../assests/images/laravel.png';
import gestionroles from '../../../../../assests/images/gestionroles.png';
import user from '../../../../../assests/images/user.png';
import aidecomptable from '../../../../../assests/images/aidecomptable.png';
import imgupdate from '../../../../../assests/images/imgupdate.png';
import imgdelete from '../../../../../assests/images/imgdelete.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const Gestionutilisateur = () => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const chargementdocuments = () => {
    Navigation.navigate('ConneterPasword');
  };
  const ajouterCollaboration = () => {
    Navigation.navigate('Ajoutercollaboration');
  };
  const updateCollaboration = () => {
    Navigation.navigate('Updatecollaboration');
  };
  const handlesociete = () => {
    Navigation.navigate('Administration');
  };
  const [value, setValue] = useState();
  const updateSearch = value => {};
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#131313',
        }}>
          <TouchableOpacity onPress={handleSubmit(handlesociete)}>
      <FontAwesome5 name={'angle-double-left'} size={20} color="gray" solid style={{marginTop:35,marginLeft:10}} />
       </TouchableOpacity >
        <Image
          source={mosahamatilogo}
          style={styles.imgs}
          resizeMode="contain"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={userdark}
            style={{marginTop: 29,marginLeft:100}}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={handleSubmit(chargementdocuments)}>
            <Image
              source={deconnecter}
              style={{height: 90, marginRight: 15}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.header}>
        <View style={{backgroundColor: '#ffa726', height: 190}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 50,
              marginRight: 50,
            }}>
            <View>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 20,
                  color: '#A2A2A5',
                  marginRight: 100,
                }}>
                Laravel
              </Text>
            </View>
            <View
              style={[
                styles.action,
                {width: '40%', height: 40, borderRadius: 12},
              ]}>
              <FontAwesome5
                name={'search'}
                size={25}
                color="white"
                style={{marginTop: 6, marginLeft: 5}}
              />
              <TextInput placeholder=" Search..." style={styles.TextInput} />
            </View>
          </View>
          <View style={{right: 100, top: 10}}>
            <LineChart
              data={{
                labels: [],
                datasets: [
                  {
                    data: [2, 5, 2, 5, 2, 5, 2, 5, 2, 5, 2, 5],
                  },
                ],
              }}
              width={1020} // from react-native
              height={100}
              withHorizontalLabels={false}
              withDots={false}
              withInnerLines={false}
              chartConfig={{
                backgroundColor: '#ffa726',
                backgroundGradientFrom: '#ffa726',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(245, 30, 13, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 0,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
        <View
          style={[
            styles.button_annulers,
            {backgroundColor: '#FFFFFF', marginLeft: 120, width: '35%'},
          ]}>
          <TouchableOpacity onPress={handleSubmit(ajouterCollaboration)}>
            <Image source={user} resizeMode="contain" />
            <Text
              style={[
                styles.signin_annul,
                {maxWidth: '100%', textAlign: 'center'},
              ]}>
              Gestion des utilisateur
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
            <Text style={{color: '#A2A2A5', fontWeight: 'bold', fontSize: 16}}>
              Intitule / Description
            </Text>
          </View>
          <View>
            <Text style={{color: '#A2A2A5', fontWeight: 'bold', fontSize: 16}}>
              Action
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#00000029',
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image source={aidecomptable} resizeMode="contain" />
              <View style={{flexDirection: 'column'}}>
                <Text>Aide copmtable</Text>
                <Text>Saisie de ecriture</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={handleSubmit(updateCollaboration)}>
                <Image
                  source={imgupdate}
                  resizeMode="contain"
                  style={{marginTop: 10}}
                />
              </TouchableOpacity>
              <Image
                source={imgupdate}
                resizeMode="contain"
                style={{marginTop: 10}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#00000029',
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image source={aidecomptable} resizeMode="contain" />
              <View style={{flexDirection: 'column'}}>
                <Text>Aide copmtable</Text>
                <Text>Saisie de ecriture</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={handleSubmit(updateCollaboration)}>
                <Image
                  source={imgupdate}
                  resizeMode="contain"
                  style={{marginTop: 10}}
                />
              </TouchableOpacity>
              <Image
                source={imgupdate}
                resizeMode="contain"
                style={{marginTop: 10}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#00000029',
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image source={aidecomptable} resizeMode="contain" />
              <View style={{flexDirection: 'column'}}>
                <Text>Aide copmtable</Text>
                <Text>Saisie de ecriture</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={handleSubmit(updateCollaboration)}>
                <Image
                  source={imgupdate}
                  resizeMode="contain"
                  style={{marginTop: 10}}
                />
              </TouchableOpacity>
              <Image
                source={imgupdate}
                resizeMode="contain"
                style={{marginTop: 10}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#00000029',
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image source={aidecomptable} resizeMode="contain" />
              <View style={{flexDirection: 'column'}}>
                <Text>Aide copmtable</Text>
                <Text>Saisie de ecriture</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={handleSubmit(updateCollaboration)}>
                <Image
                  source={imgupdate}
                  resizeMode="contain"
                  style={{marginTop: 10}}
                />
              </TouchableOpacity>
              <Image
                source={imgupdate}
                resizeMode="contain"
                style={{marginTop: 10}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Gestionutilisateur;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  button_annulers: {
    textAlign: 'center',
    borderRadius: 3,
    borderColor: '#e8e8e8',
    borderWidth: 1,
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272427',
    textAlign: 'center',
  },
  TextInput: {
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button_annulers: {
    borderRadius: 25,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '85%',
    padding: 20,
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272427',
  },
  imgs: {
    width: '30%',
    height: 90,
    left:20
  },
});
