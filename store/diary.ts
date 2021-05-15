import { DiaryState, Levels, Moods } from '../types/Models'

const initialState: DiaryState = {
  mood: Moods.NONE,
  anxiety: Levels.NONE,
  stress: Levels.NONE,
}

export default {
  state: initialState,
  reducers: {
    setDiaryState: (state: DiaryState, payload: Record<keyof DiaryState | string, unknown>): DiaryState => ({
      ...state,
      ...payload,
    }),
    clearDiaryState: (): DiaryState => initialState,
  },
}
