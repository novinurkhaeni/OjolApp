import {StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';

import {colors} from '../../utils';
import {Input} from '../../components';
import {IconBack, RegisterImage} from '../../assets';

const Register = () => {
  return (
    <SafeAreaView style={styles.wrapper.page}>
      <Image source={IconBack} style={styles.iconBack} />
      <RegisterImage width={106} height={115} style={styles.illustration}/>
      <Text style={styles.text.desc}>
        Mohon mengisis beberapa data untuk proses daftar anda
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="Nama Lengkap" />
      <View style={styles.space(33)} />
      <Input placeholder="Email" />
      <View style={styles.space(33)} />
      <Input placeholder="Password" />
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
