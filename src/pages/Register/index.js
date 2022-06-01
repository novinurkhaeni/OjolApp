import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';

import {colors} from '../../utils';
import {Input, Button} from '../../components';
import {IconBack, RegisterImage} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

const Register = ({navigation}) => {
  const {form} = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });

  // useEffect(() => {
  //   console.log(form);
  // }, []);

  const onInputChange = (inputType, value) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });

    dispatch(setForm(inputType, value))
  };

  const sendData = () => {
    console.log('SEND DATA =>', form);
  };

  return (
    <SafeAreaView style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button onPress={() => navigation.goBack()} type="icon" nameIcon="back" />
        <RegisterImage width={106} height={115} style={styles.illustration}/>
        <Text style={styles.text.desc}>
          Mohon mengisisi beberapa data untuk proses daftar anda
        </Text>
        <View style={styles.space(64)} />
        <Input 
          placeholder="Nama Lengkap" 
          value={form.fullName} 
          onChangeText={value => {
            onInputChange('fullName', value)
          }}
        />
        <View style={styles.space(33)} />
        <Input 
          placeholder="Email" 
          value={form.email} 
          onChangeText={value => onInputChange('email', value)} />
        <View style={styles.space(33)} />
        <Input 
          placeholder="Password" 
          value={form.password} 
          onChangeText={value => onInputChange('password', value)} 
          secureTextEntry= {true} />
        <View style={styles.space(83)} />
        <Button title="Simpan" onPress={sendData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    page: {padding: 20, backgroundColor: 'white', flex: 1},
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  iconBack: {
    width: 25,
    height: 25,
  },
  illustration: {
    // width: 106,
    // height: 115,
    // backgroundColor: 'red',
    marginTop: 8,
  },
  space: value => {
    return {
      height: value,
    };
  },
});
