import { Moods } from '../../types/Models'

export default interface MoodItemProps {
  icon: Moods
  label: string
  check?: boolean
  active?: boolean
  debounce?: boolean
  haptic?: boolean
  onPress?: () => void
}
