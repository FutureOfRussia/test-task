import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedReaction,
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { snapPoint } from 'react-native-redash'
import { View } from 'react-native'
import React from 'react'
import _ from 'lodash'

import { px, width } from '../../helpers/Dimensions'
import { Colors } from '../../constants'
import SliderProps from './types'
import styles from './styles'

export default function Slider({ value = 0, onSelect = () => {} }: SliderProps) {
  const offset = px(37)
  const step = (width(100) - px(50)) / 4
  const x = useSharedValue(step * value - offset)
  const points = _.range(5).map(i => i * step - offset)

  const colors = [Colors.levels.easy, Colors.levels.middle, Colors.levels.strong, Colors.levels.unbearable]

  const onPanGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx: { sX: number }) => {
      ctx.sX = x.value
    },
    onActive: (event, ctx: { sX: number }) => {
      x.value = snapPoint(ctx.sX + event.translationX, 0, points)
    },
  })

  useAnimatedReaction(
    () => x.value,
    data => onSelect((data + offset) / step),
  )

  const position = useAnimatedStyle(() => {
    return { transform: [{ translateX: withSpring(x.value, { damping: 50, mass: 2, stiffness: 250 }) }] }
  })

  return (
    <Animated.View style={styles.container}>
      {_.range(4).map(i => (
        <View style={[styles.dash, { backgroundColor: value > i ? colors[i] : Colors.SOFT_GRAY }]} key={i} />
      ))}
      <PanGestureHandler onGestureEvent={onPanGestureEvent}>
        <Animated.View style={[styles.indicatorBlock, position]}>
          <View style={[styles.indicator, { backgroundColor: value > 0 ? colors[value - 1] : Colors.ACTIVE }]} />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
}
