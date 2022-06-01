import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {colors} from '../../../utils';
import ButtonIcon from './ButtonIcon';

const Button = ({title, onPress, type, nameIcon}) => {
  if(type === 'icon') {
    return <ButtonIcon nameIcon={nameIcon} onPress={onPress} />
  }
  return (
    <View>
      <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
        <Text style={styles.text.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    component: {
      backgroundColor: colors.default,
      borderRadius: 25,
      paddingVertical: 13,
    },
  },
  text: {
    title: {
      fontSize: 12,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
});
