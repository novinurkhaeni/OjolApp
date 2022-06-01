import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';

import {colors} from '../../utils';
import {Input, Button} from '../../components';
import {IconBack, RegisterImage} from '../../assets';

const Register = ({navigation}) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log('Hello');
  }, []);

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const sendData = () => {
    console.log('send', form);
  };

  return (
    <SafeAreaView style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={IconBack} style={styles.iconBack} />
        </TouchableOpacity>
        <RegisterImage width={106} height={115} style={styles.illustration}/>
        <Text style={styles.text.desc}>
          Mohon mengisis beberapa data untuk proses daftar anda
        </Text>
        <View style={styles.space(64)} />
        <Input 
          placeholder="Nama Lengkap" 
          value={form.fullName} 
          onChangeText={value => {
            onInputChange(value, 'fullName')
          }}
        />
        <View style={styles.space(33)} />
        <Input 
          placeholder="Email" 
          value={form.email} 
          onChangeText={value => onInputChange(value, 'email')} />
        <View style={styles.space(33)} />
        <Input 
          placeholder="Password" 
          value={form.password} 
          onChangeText={value => onInputChange(value, 'password')} 
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
