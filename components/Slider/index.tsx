import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedReaction,
  withTiming,
  Easing,
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { snapPoint } from 'react-native-redash'
import { Pressable } from 'react-native'
import React from 'react'
import _ from 'lodash'

import { px, width } from '../../helpers/Dimensions'
import { Colors, Styles } from '../../constants'
import SliderProps from './types'
import styles from './styles'

export default function Slider({ value = 0, onSelect = () => {} }: SliderProps) {
  const offset = px(37)
  const step = (width(100) - px(50)) / 4
  const x = useSharedValue(step * value - offset)
  const scale = useSharedValue(1)
  const points = _.range(5).map(i => i * step - offset)

  const colors = [Colors.levels.easy, Colors.levels.middle, Colors.levels.strong, Colors.levels.unbearable]

  const onPressIn = () => {
    'worklet'

    scale.value = withTiming(1.15, { duration: 250, easing: Easing.linear })
  }

  const onPressOut = () => {
    'worklet'

    scale.value = withTiming(1, { duration: 250, easing: Easing.linear })
  }

  const onPanGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx: { sX: number }) => {
      ctx.sX = x.value
      onPressIn()
    },
    onActive: (event, ctx: { sX: number }) => {
      x.value = snapPoint(ctx.sX + event.translationX, 0, points)
    },
    onEnd: () => {
      onPressOut()
    },
  })

  useAnimatedReaction(
    () => x.value,
    data => onSelect((data + offset) / step),
  )

  const position = useAnimatedStyle(() => {
    return { transform: [{ translateX: withSpring(x.value, { damping: 50, mass: 2, stiffness: 250 }) }] }
  })

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: (x.value + offset) / step > 0 ? colors[(x.value + offset) / step - 1] : Colors.ACTIVE,
    }
  })

  return (
    <Animated.View style={styles.container}>
      {_.range(4).map(i => {
        'worklet'

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const dashStyle = useAnimatedStyle(() => {
          return { backgroundColor: (x.value + offset) / step > i ? colors[i] : Colors.SOFT_GRAY }
        })

        return <Animated.View style={[styles.dash, dashStyle]} key={i} />
      })}
      <PanGestureHandler onGestureEvent={onPanGestureEvent}>
        <Animated.View style={[styles.indicatorBlock, position]}>
          <Pressable onPressIn={onPressIn} onPress={onPressOut} style={[Styles.full, Styles.centered]}>
            <Animated.View style={[styles.indicator, indicatorStyle]} />
          </Pressable>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
}
