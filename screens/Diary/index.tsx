import { StackNavigationProp } from '@react-navigation/stack'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesome5 } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'
import React from 'react'

import { DiaryState, Levels, Moods, State } from '../../types/Models'
import { RootStackParamList } from '../../types/Navigation'
import { MoodItem, OpacityButton } from '../../components'
import { moods, levels } from '../../constants/Data'
import { hitSlop } from '../../helpers/Utilities'
import { Colors, Styles } from '../../constants'
import { px } from '../../helpers/Dimensions'
import { useTerms } from '../../hooks'
import styles from './styles'

type Navigation = StackNavigationProp<RootStackParamList, 'Diary'>

export default function Diary({ navigation }: { navigation: Navigation }) {
  const { mood, anxiety, stress } = useSelector<State, DiaryState>(state => state.diary)
  const { moods: moodsTerms, mood: moodTerm, stress: stressTerm, anxiety: anxietyTerm, anxieties, level } = useTerms()

  const onPressMood = (value: Moods) => navigation.navigate('Filling', { mood: value })

  const onPressEdit = () => navigation.navigate('Filling', { mood })

  return (
    <ScrollView style={Styles.fullFlex} contentContainerStyle={styles.container}>
      <Text style={styles.title}>{moodTerm}</Text>
      {mood === Moods.NONE ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={px(75)}
          decelerationRate="fast"
          contentContainerStyle={styles.carousel}
        >
          {moods.map((el, i) => (
            <MoodItem key={el} icon={i} label={moodsTerms[el]} onPress={() => onPressMood(i)} debounce />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.content}>
          <MoodItem icon={mood} label={moodsTerms[moods[mood]]} check />
          <View style={styles.dash} />
          <View style={styles.infoBlock}>
            <View style={styles.infoItem}>
              <View style={[styles.indicator, { backgroundColor: Colors.levels[levels[anxiety]] }]} />
              <View style={styles.infoTextBlock}>
                <Text style={styles.infoTitle}>{anxietyTerm}</Text>
                <Text style={[styles.infoValue, { color: anxiety === Levels.NONE ? Colors.DARK_GRAY : Colors.BLACK }]}>
                  {anxieties[levels[anxiety]]}
                </Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <View style={[styles.indicator, { backgroundColor: Colors.levels[levels[stress]] }]} />
              <View style={styles.infoTextBlock}>
                <Text style={styles.infoTitle}>{stressTerm}</Text>
                <Text style={[styles.infoValue, { color: stress === Levels.NONE ? Colors.DARK_GRAY : Colors.BLACK }]}>
                  {level[levels[stress]]}
                </Text>
              </View>
            </View>
          </View>
          <OpacityButton style={styles.edit} hitSlop={hitSlop(px(30))} onPress={onPressEdit} debounce>
            <FontAwesome5 name="edit" size={px(18)} color={Colors.SECONDARY} />
          </OpacityButton>
        </View>
      )}
    </ScrollView>
  )
}
