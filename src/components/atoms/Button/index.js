import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {colors} from '../../../utils';

const Button = ({title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.wrapper.component}>
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
