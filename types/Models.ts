// AppState
export interface AppState {
  locale: 'ru' | 'en'
}

export interface AppStateDispatch {
  setAppState: (payload: Record<string, unknown>) => AppState
}

// Diary
export type Level = 'none' | 'easy' | 'middle' | 'strong' | 'unbearable'

export enum Levels {
  NONE = 0,
  EASY = 1,
  MIDDLE = 2,
  STRONG = 3,
  UNBEARABLE = 4,
}

export type Mood = 'happy' | 'calm' | 'swings' | 'sad' | 'depressed'

export enum Moods {
  NONE = -1,
  HAPPY = 0,
  CALM = 1,
  SWINGS = 2,
  SAD = 3,
  DEPRESSED = 4,
}

export interface DiaryState {
  mood: Moods
  anxiety: Levels
  stress: Levels
}

export interface DiaryDispatch {
  setDiaryState: (payload: Record<keyof DiaryState | string, unknown>) => DiaryState
  clearDiaryState: () => DiaryState
}

// Full State
export interface State {
  appState: AppState
  diary: DiaryState
}

// Full Dispatch
export interface Dispatch {
  appState: AppStateDispatch
  diary: DiaryDispatch
}
