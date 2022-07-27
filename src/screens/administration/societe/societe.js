import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../../shared/searchBar';
import gestionroles from '../../../../assests/images/gestionroles.png';
import user from '../../../../assests/images/user.png';
import parametre from '../../../../assests/images/parametre.png';
import chargement from '../../../../assests/images/chargement.png';
import laravel from '../../../../assests/images/laravel.png';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
const Societe = () => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const chargementdocuments = () => {
    Navigation.navigate('PiéreChargeCarteNational');
  };
  const gestionDesRoles = () => {
    Navigation.navigate('Gestiondesroles');
  };
  const gestionutilisateur = () => {
    Navigation.navigate('Gestionutilisateur');
  };
  
  const [value, setValue] = useState();
  const updateSearch = value => {};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 80,
          }}>
          <View style={[styles.button_annulers, {backgroundColor: '#FFFFFF'}]}>
            <TouchableOpacity onPress={handleSubmit(gestionDesRoles)}>
              <Image
                source={gestionroles}
                style={styles.imge}
                resizeMode="contain"
              />
              <Text style={styles.signin_annul}>Gestion des roles</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.button_annulers,
              {backgroundColor: '#FFFFFF', marginRight: 10},
            ]}>
              <TouchableOpacity onPress={handleSubmit(gestionutilisateur)}>
            <Image source={user} style={styles.imge} resizeMode="contain" />
            <Text style={styles.signin_annul}>Gestion des Utilisateurs</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 25,
          }}>
          <View style={[styles.button_annulers, {backgroundColor: '#FFFFFF'}]}>
            <Image
              source={parametre}
              style={styles.imge}
              resizeMode="contain"
            />
            <Text style={styles.signin_annul}>Paramétres</Text>
          </View>
          <View
            style={[
              styles.button_annulers,
              {backgroundColor: '#F39200', marginRight: 10},
            ]}>
            <TouchableOpacity onPress={handleSubmit(chargementdocuments)}>
              <Image
                source={chargement}
                style={styles.imge}
                resizeMode="contain"
              />
              <Text style={[styles.signin_annul, {color: '#fff'}]}>
                Chargement des documents
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 50,
          }}>
          <Text style={{fontWeight: 'bold', color: '#000000'}}>
            Information de Société
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: '#A2A2A5',
                marginRight: 30,
              }}>
              Logo
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <View
              style={{
                backgroundColor: '#EBEDF3',
                width: '95%',
                height: 100,
                borderWidth: 1,
                borderColor: '#fff',
              }}>
              <Image source={laravel} style={styles.img} resizeMode="contain" />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#545454',
                marginLeft: 55,
                marginTop: 15,
              }}>
              Société
            </Text>
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Société" style={styles.TextInput} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#545454',
                marginLeft: 55,
                marginTop: 15,
              }}>
              Adresse
            </Text>
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Adresse" style={styles.TextInput} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View style={{marginTop: 15, marginLeft: 100}}>
            <Text>pays</Text>
          </View>
          <View style={styles.inputpays}>
            <TextInput placeholder="pays" />
          </View>
          <View>
            <Text style={{marginTop: 15}}>Ville</Text>
          </View>
          <View style={styles.inputVill}>
            <TextInput placeholder="ville" />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#545454',

                marginTop: 15,
              }}>
              N° de téléphone
            </Text>
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Adresse" style={styles.TextInput} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#545454',
                marginTop: 15,
              }}>
              Adresse éléctrique
            </Text>
          </View>
          <View style={styles.action}>
            <TextInput placeholder="Adresse" style={styles.TextInput} />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#00000029',
            borderBottomWidth: 1,
            width: '75%',
            marginLeft: 50,
            marginTop: 25,
          }}
        />
        <View>
          <Text
            style={{
              marginLeft: 50,
              fontSize: 15,
              fontWeight: 'bold',
              color: '#000000',
              marginTop: 30,
            }}>
            Information Légale
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 25,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#545454',
                maxWidth: '55%',
                marginLeft: 20,
              }}>
              Registre de commerce
            </Text>
          </View>
          <View style={styles.actionlegale}>
            <TextInput placeholder="Société" style={styles.TextInput} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 15,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#545454',
                maxWidth: '80%',
                marginLeft: 25,
              }}>
              identification fiscale
            </Text>
          </View>
          <View style={styles.actionlegale}>
            <TextInput placeholder="Société" style={styles.TextInput} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 15,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#545454',
                maxWidth: '80%',
                marginLeft: 25,
              }}>
              Taxe professionelle
            </Text>
          </View>
          <View style={styles.actionlegale}>
            <TextInput placeholder="Société" style={styles.TextInput} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 15,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#545454',
                maxWidth: '65%',
                marginLeft: 16,
              }}>
              N° d'affiliation à la cnss
            </Text>
          </View>
          <View style={styles.actionlegale}>
            <TextInput placeholder="Société" style={styles.TextInput} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 15,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#545454',
                maxWidth: '55%',
                marginLeft: 16,
              }}>
              identifiant commun de l'entreprise
            </Text>
          </View>
          <View style={styles.actionlegale}>
            <TextInput placeholder="Société" style={styles.TextInput} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Societe;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imge: {
    width: 140,
    height: 40,
    right: 7,
  },
  img: {
    width: 140,
    height: 50,
    marginTop: 20,
  },
  TextInput: {
    flex: 1,
  },
  action: {
    width: '50%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#f7f7f7',
    marginLeft: 50,
    height: '100%',
  },
  actionlegale: {
    width: '45%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#f7f7f7',
    height: '90%',
  },
  inputVill: {
    width: '15%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#f7f7f7',
    marginLeft: 30,
  },
  inputpays: {
    width: '15%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#f7f7f7',
    marginLeft: 35,
    marginRight: 20,
  },
  button_annulers: {
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '40%',

    padding: 20,
  },
  signin_annul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272427',
    textAlign: 'center',
  },
});
