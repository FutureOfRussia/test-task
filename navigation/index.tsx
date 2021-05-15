import { createStackNavigator, HeaderStyleInterpolators, StackNavigationOptions } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, View } from 'react-native'
import * as Localization from 'expo-localization'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as React from 'react'

import LinkingConfiguration from '../helpers/LinkingConfiguration'
import { RootStackParamList } from '../types/Navigation'
import { Colors, Styles } from '../constants'
import { Diary, Filling } from '../screens'
import { Dispatch } from '../types/Models'
import { px } from '../helpers/Dimensions'
import { useTerms } from '../hooks'

const Stack = createStackNavigator<RootStackParamList>()

export default function Navigation(): JSX.Element {
  const {
    appState: { setAppState },
  } = useDispatch<Dispatch>()
  const [loading, setLoading] = useState(false)
  const { titles, back } = useTerms()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      let [locale] = await Localization.locale.split('-')
      if (locale !== 'ru') locale = 'en'
      setAppState({ locale })
      setLoading(false)
    })()
  }, [setAppState])

  const screenOptions: StackNavigationOptions = {
    cardStyle: {
      backgroundColor: Colors.WHITE,
    },
    headerTitleStyle: {
      fontSize: px(16),
      lineHeight: px(22),
      fontFamily: 'Medium',
      color: Colors.TEXT,
      paddingHorizontal: px(5),
    },
    headerTruncatedBackTitle: back,
    headerTintColor: Colors.ACTIVE,
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  }

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      {loading ? (
        <View style={[Styles.fullFlex, Styles.centered]}>
          <ActivityIndicator size="large" color={Colors.ACTIVE} />
        </View>
      ) : (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Diary">
          <Stack.Screen name="Diary" component={Diary} options={{ title: titles.diary }} />
          <Stack.Screen name="Filling" component={Filling} options={{ title: titles.filling }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
