import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    width: px(73),
    marginHorizontal: px(1),
    alignItems: 'center',
  },
  activeBtn: {
    width: px(60),
    height: px(60),
    borderRadius: px(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PINK,
    marginBottom: px(3),
  },
  btn: {
    width: px(60),
    height: px(60),
    borderRadius: px(30),
    borderWidth: px(1),
    borderColor: Colors.PINK,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: px(3),
  },
  text: {
    fontSize: px(10),
    fontFamily: 'Regular',
    lineHeight: px(13),
    textAlign: 'center',
    color: Colors.BLACK,
  },
  check: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.GREEN,
    width: px(18),
    height: px(18),
    borderRadius: px(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
