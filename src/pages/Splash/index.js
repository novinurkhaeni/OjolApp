import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {welcomeAuth} from '../../assets';
import {colors} from '../../utils';
// import {useRoute} from '@react-navigation/native';

const Splash = ({navigation}) => {
  // const route = useRoute();
  // console.log(route.name);

  useEffect(() => {
    setTimeout(() => {
      // .navigate() bisa kembali ke screen sebelumnya
      //  .replace() tdk bisa back
      navigation.replace('WelcomeAuth');
    }, 2000);
  });

  return (
    <View style={styles.wrapper.page}>
      <Image source={welcomeAuth} style={styles.wrapper.illustration} />
      <Text style={styles.text}>O-JOL</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
    },
    illustration: {
      width: 219,
      height: 117,
      marginBottom: 10,
    },
  },
  text: {
    color: colors.default,
    fontSize: 20,
    fontWeight: 'bold',
  }
});

