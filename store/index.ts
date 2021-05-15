import { init } from '@rematch/core'
import appState from './appState'
import diary from './diary'

export default init({ models: { appState, diary } })
