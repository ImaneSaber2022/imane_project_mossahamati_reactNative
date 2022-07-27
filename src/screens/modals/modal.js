import {View, Text, Button, Modal, StyleSheet, Image,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import exclamationwarning from '../../../assests/images/exclamationwarning.png';
const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = useState(visible);
  return (
    <Modal transparent visible={true}>
      <View style={styles.ModalBackground}>
        <View style={[styles.modalContainer]}>{children}</View>
      </View>
    </Modal>
  );
};
const Modale = (props) => {
  const Navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const handlSuivant = () => {
    Navigation.navigate('CodeActivation');
  };
  const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}></View>
        <View style={{alignItems: 'center'}}>
          {/* <FontAwesome5 name={'exclamation-circle'} size={50}color='#F39200'/> */}
          <Image source={exclamationwarning} resizeMode="contain" />
        </View>
        <Text
          style={{
            marginVertical: 20,
            fontSize: 20,
            textAlign: 'center',
            color: '#212121',
            marginTop: 15,
          }}>
          Si vous ne n'avez pas reçu le code vous pouvez nous contacter au
          numéro:{' '}
          <Text style={{fontWeight: 'bold', color: '#131313', fontSize: 16}}>
            +2120 654 000 232
          </Text>
        </Text>
        <View style={styles.button_creer}>
          <TouchableOpacity onPress={()=>props.setShow(false)}>
            <Text style={styles.signin}>Suivant</Text>
          </TouchableOpacity>
        </View>
      </ModalPoup>
    </View>
  );
};
const styles = StyleSheet.create({
  ModalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: 270,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 10,
  },
  button_creer: {
    width: ' 100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: '#000000',
    marginTop: 15,
  },

  signin: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Modale;
