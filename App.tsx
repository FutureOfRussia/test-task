// eslint-disable-next-line camelcase
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import React, { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar, View } from 'react-native'
import { Provider } from 'react-redux'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'

import { LocaleNotification } from './components/LocaleNotification'
import { Images, Styles } from './constants'
import { useDebounce } from './hooks'
import Navigation from './navigation'
import store from './store'

export default function App(): JSX.Element | null {
  const [appIsReady, setAppIsReady] = useState(false)

  useDebounce()

  useEffect(() => {
    ;(async () => {
      try {
        StatusBar.setBarStyle('dark-content')
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({ Regular: Montserrat_400Regular, Medium: Montserrat_500Medium })
        await Asset.loadAsync(Images.list)
      } finally {
        setAppIsReady(true)
      }
    })()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <View style={Styles.fullFlex} onLayout={onLayoutRootView}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Provider store={store}>
          <Navigation />
          <LocaleNotification />
        </Provider>
      </SafeAreaProvider>
    </View>
  )
}
