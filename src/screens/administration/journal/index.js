import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../../shared/searchBar';
import telecharger from '../../../../assests/images/telecharger.png';
import telechargerblak from '../../../../assests/images/telechargerblak.png';
import radius from '../../../../assests/images/radius.png';
import radiusorange from '../../../../assests/images/radiusorange.png';
import radiuswarning from '../../../../assests/images/radiuswarning.png';
const JournalEvenement = () => {
  const [value, setValue] = useState();
  const updateSearch = value => {};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{backgroundColor: '#F39200'}}>
          <View
            style={{
              flexDirection: 'row',
              left: 15,
              marginTop: 30,
              marginBottom: 70,
            }}>
            <View>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 20,
                  color: '#FFFFFF',
                  cursor: 'pointer',
                }}>
                Laravel
              </Text>
            </View>
            <View
              style={[
                styles.action,
                {width: '25%', height: 40, marginLeft: 25},
              ]}>
              <TextInput placeholder=" Filtre" style={styles.TextInput} />
            </View>
            <View
              style={[
                styles.action,
                {width: '30%', height: 40, marginLeft: 10},
              ]}>
              <TextInput placeholder=" Search..." style={styles.TextInput} />
            </View>
            <Image
              source={telecharger}
              style={{width: '20%', height: 40, right: 5}}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginTop: 15,
                  marginLeft: 25,
                }}>
                Laravel
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  marginTop: 5,
                  marginLeft: 25,
                  color: '#80808F',
                }}>
                01/07/2022
              </Text>
            </View>
            <Image
              source={telechargerblak}
              style={{width: '130%', height: 60, marginTop: 10}}
              resizeMode="contain"
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 26}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 6}}>
              08:42
            </Text>
            <Image
              source={radius}
              style={{padding: 10, height: 40, marginLeft: 10, marginRight: 10}}
              resizeMode="contain"
            />
             
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#000000',
                }}>
                Acces comptabilité:
              </Text>
              <Text style={{marginTop: 5}}>
                Ali Ali:1000001(Lorem ipsum dolor sit
              </Text>
              <Text style={{marginTop: 5}}>
                amet,consecteur adipiscing elit)
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 25}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 6}}>
              10:00
            </Text>
            <Image
              source={radiusorange}
              style={{padding: 13, height: 30, marginLeft: 10, marginRight: 10}}
              resizeMode="contain"
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#000000',
                }}>
                Acces comptabilité:
              </Text>
              <Text style={{marginTop: 5}}>
                Sara Sara:100000120(Lorem ipsum dolor)
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 25}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 6}}>
              14:37
            </Text>
            <Image
              source={radiuswarning}
              style={{padding: 12, height: 40, marginLeft: 11, marginRight: 10}}
              resizeMode="contain"
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#000000',
                }}>
                Acces comptabilité:
              </Text>
              <Text style={{marginTop: 5}}>
                Sara Sara:100000120(Lorem ipsum dolor)
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 25}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 6}}>
              14:37
            </Text>
            <Image
              source={radiuswarning}
              style={{padding: 10, height: 40, marginLeft: 13, marginRight: 10}}
              resizeMode="contain"
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#000000',
                }}>
                Acces comptabilité:
              </Text>
              <Text style={{marginTop: 6}}>
                Sara Sara:100000120(Lorem ipsum dolor)
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card2}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginTop: 15,
                  marginLeft: 25,
                }}>
                Laravel
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  marginTop: 5,
                  marginLeft: 25,
                  color: '#80808F',
                }}>
                01/07/2022
              </Text>
            </View>
            <Image
              source={telechargerblak}
              style={{width: '130%', height: 60, marginTop: 10}}
              resizeMode="contain"
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 26}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 6}}>
              08:42
            </Text>
            <Image
              source={radius}
              style={{padding: 10, height: 40, marginLeft: 10, marginRight: 10}}
              resizeMode="contain"
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#000000',
                }}>
                Acces comptabilité:
              </Text>
              <Text style={{marginTop: 5}}>
                Ali Ali:1000001(Lorem ipsum dolor sit
              </Text>
              <Text style={{marginTop: 5}}>
                amet,consecteur adipiscing elit)
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 25}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 6}}>
              10:00
            </Text>
            <Image
              source={radiusorange}
              style={{padding: 13, height: 30, marginLeft: 10, marginRight: 10}}
              resizeMode="contain"
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#000000',
                }}>
                Acces comptabilité:
              </Text>
              <Text style={{marginTop: 5}}>
                Sara Sara:100000120(Lorem ipsum dolor)
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 25}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 6}}>
              14:37
            </Text>
            <Image
              source={radiuswarning}
              style={{padding: 12, height: 40, marginLeft: 11, marginRight: 10}}
              resizeMode="contain"
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#000000',
                }}>
                Acces comptabilité:
              </Text>
              <Text style={{marginTop: 5}}>
                Sara Sara:100000120(Lorem ipsum dolor)
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 25}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 6}}>
              14:37
            </Text>
            <Image
              source={radiuswarning}
              style={{padding: 10, height: 40, marginLeft: 13, marginRight: 10}}
              resizeMode="contain"
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#000000',
                }}>
                Acces comptabilité:
              </Text>
              <Text style={{marginTop: 6}}>
                Sara Sara:100000120(Lorem ipsum dolor)
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default JournalEvenement;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EAEE',
  },
  header: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#fff',
  },
  card2: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  TextInput: {
    flex: 1,
    marginLeft: 10,
  },
  action: {
    flexDirection: 'row',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
});
