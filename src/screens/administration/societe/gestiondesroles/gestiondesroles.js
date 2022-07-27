import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import deconnecter from '../../../../../assests/images/deconnecter.png';
import mosahamatilogo from '../../../../../assests/images/mosahamatilogo.png';
import userdark from '../../../../../assests/images/userdark.png';
import SearchBar from '../../../shared/searchBar';
import laravel from '../../../../../assests/images/laravel.png';
import gestionroles from '../../../../../assests/images/gestionroles.png';
import {DataTable} from 'react-native-paper';
import aidecomptable from '../../../../../assests/images/aidecomptable.png';
import imgupdate from '../../../../../assests/images/imgupdate.png';
import imgdelete from '../../../../../assests/images/imgdelete.png';

const Gestiondesroles = () => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const ajouterprofil = () => {
    Navigation.navigate('Ajouterprofil');
  };
  const updateprofil = () => {
    Navigation.navigate('UpdateProfil');
  };
  const chargementdocuments = () => {
    Navigation.navigate('ConneterPasword');
  };
  const [value, setValue] = useState();
  const updateSearch = value => {};
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#000000',
        }}>
        <Image
          source={mosahamatilogo}
          style={styles.imgs}
          resizeMode="contain"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={userdark}
            style={{marginTop: 29}}
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 50,
          }}>
          <View>
            <Text style={{marginTop: 5, fontSize: 20, color: '#A2A2A5'}}>
              Laravel
            </Text>
          </View>
          <SearchBar
            value={value}
            updateSearch={updateSearch}
            style={{color: '#A2A2A5'}}
          />
        </View>
        <View
          style={[
            styles.button_annulers,
            {backgroundColor: '#FFFFFF', marginLeft: 140, width: '35%'},
          ]}>
          <TouchableOpacity onPress={handleSubmit(ajouterprofil)}>
            <Image
              source={gestionroles}
              resizeMode="contain"
              style={{marginLeft: 15}}
            />
            <Text
              style={[
                styles.signin_annul,
                {maxWidth: '70%', textAlign: 'center', marginLeft: 15},
              ]}>
              Gestion des roles
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginBottom: 30}}>
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
              <TouchableOpacity onPress={handleSubmit(updateprofil)}>
                <Image source={imgupdate} resizeMode="contain" style={{marginTop:10}} />
              </TouchableOpacity>
              <Image source={imgupdate} resizeMode="contain" style={{marginTop:10}} />
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
              <TouchableOpacity onPress={handleSubmit(updateprofil)}>
              <Image source={imgupdate} resizeMode="contain" style={{marginTop:10}} />
              </TouchableOpacity>
              <Image source={imgupdate} resizeMode="contain" style={{marginTop:10}} />
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
              <TouchableOpacity onPress={handleSubmit(updateprofil)}>
              <Image source={imgupdate} resizeMode="contain" style={{marginTop:10}} />
              </TouchableOpacity>
              <Image source={imgupdate} resizeMode="contain" style={{marginTop:10}} />
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
              <TouchableOpacity onPress={handleSubmit(updateprofil)}>
              <Image source={imgupdate} resizeMode="contain" style={{marginTop:10}} />
              </TouchableOpacity>
              <Image source={imgupdate} resizeMode="contain" style={{marginTop:10}} />
            </View>
          </View>
        </View>

      </View>

      {/* <View style={{marginBottom: 60}}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{marginLeft: 40}}>
              INTITULE / DESCRIPTION
            </DataTable.Title>
            <DataTable.Title style={{marginLeft: 40}}>ACTION</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>
              {' '}
              <View style={{flexDirection: 'row'}}>
                <Image source={aidecomptable} resizeMode="contain" />
                <View style={{flexDirection: 'column'}}>
                  <Text>Aide copmtable</Text>
                  <Text>Saisie de ecriture</Text>
                </View>
              </View>
            </DataTable.Cell>
            <DataTable.Cell>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={handleSubmit(updateprofil)}>
                  <Image
                    source={imgupdate}
                    resizeMode="contain"
                    style={{marginLeft: 40}}
                  />
                </TouchableOpacity>
                <Image source={imgupdate} resizeMode="contain" />
              </View>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              {' '}
              <View style={{flexDirection: 'row'}}>
                <Image source={aidecomptable} resizeMode="contain" />
                <View style={{flexDirection: 'column'}}>
                  <Text>Agent de traitement </Text>
                  <Text>Saisie RH</Text>
                </View>
              </View>
            </DataTable.Cell>
            <DataTable.Cell>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imgupdate}
                  resizeMode="contain"
                  style={{marginLeft: 40}}
                />
                <Image source={imgupdate} resizeMode="contain" />
              </View>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              {' '}
              <View style={{flexDirection: 'row'}}>
                <Image source={aidecomptable} resizeMode="contain" />
                <View style={{flexDirection: 'column'}}>
                  <Text>Agent d'appel</Text>
                  <Text>Saisie de ecriture</Text>
                </View>
              </View>
            </DataTable.Cell>
            <DataTable.Cell>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imgupdate}
                  resizeMode="contain"
                  style={{marginLeft: 40}}
                />
                <Image source={imgupdate} resizeMode="contain" />
              </View>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              {' '}
              <View style={{flexDirection: 'row'}}>
                <Image source={aidecomptable} resizeMode="contain" />
                <View style={{flexDirection: 'column'}}>
                  <Text>Facilités</Text>
                  <Text>Saisie RH</Text>
                </View>
              </View>
            </DataTable.Cell>
            <DataTable.Cell>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imgupdate}
                  resizeMode="contain"
                  style={{marginLeft: 40}}
                />
                <Image source={imgupdate} resizeMode="contain" />
              </View>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View> */}
    </View>
  );
};

export default Gestiondesroles;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

  header: {
    flex: 2,
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
    left: 20,
  },
});
