import { Moods } from './Models'

export type RootStackParamList = {
  Diary: undefined
  Filling: { mood: Moods }
}
