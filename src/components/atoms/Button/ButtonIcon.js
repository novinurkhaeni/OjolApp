import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {IconBack} from '../../../assets'

const ButtonIcon = ({...rest}) => {
  return (
    <View>
        <TouchableOpacity {...rest}>
            {rest.nameIcon === 'back' && <Image source={IconBack} style={styles.iconBack} />}
        </TouchableOpacity>
    </View>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    iconBack: {
        width: 25,
        height: 25,
    },
})