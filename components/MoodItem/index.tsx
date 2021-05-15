import { FontAwesome5 } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import React from 'react'

import { px } from '../../helpers/Dimensions'
import BounceButton from '../BounceButton'
import { Colors } from '../../constants'
import MoodItemProps from './types'
import MoodIcon from '../MoodIcon'
import styles from './styles'

export default function MoodItem({
  icon,
  label,
  check = false,
  active = false,
  onPress = () => {},
  debounce = false,
  haptic = false,
}: MoodItemProps) {
  return (
    <View style={[styles.container, { justifyContent: check ? 'center' : 'flex-start' }]}>
      <BounceButton
        style={check || active ? styles.activeBtn : styles.btn}
        onPress={onPress}
        disabled={check}
        debounce={debounce}
        haptic={haptic}
      >
        <MoodIcon icon={icon} color={check || active ? Colors.WHITE : Colors.PINK} />
        {check ? (
          <View style={styles.check}>
            <FontAwesome5 name="check" color={Colors.WHITE} size={px(10)} />
          </View>
        ) : null}
      </BounceButton>
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}
