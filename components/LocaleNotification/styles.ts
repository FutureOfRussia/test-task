import { StyleSheet } from 'react-native'

import { shadow } from '../../helpers/Utilities'
import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    zIndex: 999,
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: px(16),
    ...shadow({ shadowOpacity: 0.4, elevation: 1 }),
  },
  content: {
    flex: 1,
    paddingLeft: px(15),
    paddingTop: px(20),
    paddingBottom: px(10),
    paddingRight: px(10),
    borderRadius: px(5),
    borderWidth: px(1),
    borderColor: Colors.SOFT_GRAY,
    backgroundColor: Colors.WHITE,
    overflow: 'hidden',
  },
  textBlock: {
    paddingRight: px(5),
    paddingBottom: px(10),
  },
  text: {
    fontFamily: 'Regular',
    fontSize: px(14),
    color: Colors.TEXT,
  },
  btnBlock: {
    alignItems: 'flex-end',
  },
  btnText: {
    fontFamily: 'Regular',
    fontSize: px(14),
    color: Colors.ACTIVE,
  },
})
