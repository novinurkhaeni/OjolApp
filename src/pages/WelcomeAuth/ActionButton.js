import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

import {colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = ({desc, title}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} />
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  wrapper: {
    component: {marginBottom: 43, maxWidth: 225},
  },
  text: {
    desc: {
      fontSize: 10,
      color: colors.text.default,
      textAlign: 'center',
      marginBottom: 6,
      paddingHorizontal: '15%',
    },
  },
});
