import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StackNavigationProp } from '@react-navigation/stack'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { RouteProp } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { runOnJS } from 'react-native-reanimated'
import { Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'

import { pushNotification } from '../../components/LocaleNotification'
import { BounceButton, MoodItem, Slider } from '../../components'
import { DiaryState, Dispatch, State } from '../../types/Models'
import { RootStackParamList } from '../../types/Navigation'
import { levels, moods } from '../../constants/Data'
import { Colors, Styles } from '../../constants'
import { px } from '../../helpers/Dimensions'
import { useTerms } from '../../hooks'
import styles from './styles'

type Navigation = StackNavigationProp<RootStackParamList, 'Filling'>
type Route = RouteProp<RootStackParamList, 'Filling'>
type Props = { navigation: Navigation; route: Route }

export default function Filling({ navigation, route }: Props) {
  const { mood, anxiety, stress } = useSelector<State, DiaryState>(state => state.diary)
  const {
    diary: { setDiaryState },
  } = useDispatch<Dispatch>()
  const [selectedMood, setSelectedMood] = useState(route.params.mood)
  const [selectedAnxiety, setSelectedAnxiety] = useState(anxiety)
  const [selectedStress, setSelectedStress] = useState(stress)

  const { save, moods: moodsTerms, mood: moodTerm, stressLevel, anxietyLevel, level, success } = useTerms()
  const insets = useSafeAreaInsets()

  useEffect(() => {
    Haptics.selectionAsync()
  }, [selectedAnxiety, selectedStress])

  const buttonIsDisabled = () => selectedMood === mood && selectedAnxiety === anxiety && selectedStress === stress

  const onSave = () => {
    setDiaryState({ mood: selectedMood, anxiety: selectedAnxiety, stress: selectedStress })
    pushNotification({ msg: success })
    navigation.goBack()
  }

  return (
    <View style={Styles.fullFlex}>
      <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.container}>
        <Text style={styles.title}>{moodTerm}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={px(75)}
          decelerationRate="fast"
          contentContainerStyle={styles.carousel}
        >
          {moods.map((el, i) => (
            <MoodItem
              key={el}
              icon={i}
              label={moodsTerms[el]}
              onPress={() => setSelectedMood(i)}
              active={i === selectedMood}
              haptic
            />
          ))}
        </ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{anxietyLevel}</Text>
          <Text style={[styles.sectionSubtitle, { color: Colors.levels[levels[selectedAnxiety]] }]}>
            {level[levels[selectedAnxiety]]}
          </Text>
          <Slider
            value={selectedAnxiety}
            onSelect={value => {
              'worklet'

              runOnJS(setSelectedAnxiety)(value)
            }}
          />
        </View>
        <View style={styles.dash} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{stressLevel}</Text>
          <Text style={[styles.sectionSubtitle, { color: Colors.levels[levels[selectedStress]] }]}>
            {level[levels[selectedStress]]}
          </Text>
          <Slider
            value={selectedStress}
            onSelect={value => {
              'worklet'

              runOnJS(setSelectedStress)(value)
            }}
          />
        </View>
        <View style={styles.dash} />
      </ScrollView>
      <View style={[styles.buttonBlock, { bottom: insets.bottom }]}>
        <BounceButton
          style={[styles.button, { backgroundColor: buttonIsDisabled() ? Colors.DARK_GRAY : Colors.ACTIVE }]}
          onPress={onSave}
          disabled={buttonIsDisabled()}
          debounce
          haptic
        >
          <Text style={styles.buttonText}>{save}</Text>
        </BounceButton>
      </View>
    </View>
  )
}
