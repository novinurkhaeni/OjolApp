import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
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
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
