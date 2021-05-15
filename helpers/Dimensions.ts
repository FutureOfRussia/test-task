import Layout from '../constants/Layout'

const handleSize = (num: number): number => {
  'worklet'

  if (num <= 0) return 0
  if (num > 100) return 1

  return num / 100
}

const myWidth = Layout.window.width
const myHeight = Layout.window.height

export const width = (num: number): number => {
  'worklet'

  return myWidth * handleSize(num)
}
export const height = (num: number): number => {
  'worklet'

  return myHeight * handleSize(num)
}

export const px = (num: number): number => {
  'worklet'

  return num * (width(1) / 3.2)
}
