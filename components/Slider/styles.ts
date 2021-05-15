import { StyleSheet } from 'react-native'

import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: px(26),
    paddingHorizontal: px(11.5),
  },
  indicatorBlock: {
    position: 'absolute',
    width: px(100),
    height: px(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: px(26),
    height: px(26),
    borderRadius: px(13),
    backgroundColor: Colors.ACTIVE,
    ...shadow({
      shadowColor: Colors.black(0.1),
      shadowOpacity: 1,
      shadowRadius: px(4),
      shadowOffset: { height: px(2) },
    }),
  },
  dash: {
    flex: 1,
    height: px(2),
    borderRadius: px(1),
    marginHorizontal: px(1.5),
  },
})
