import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    paddingVertical: px(28),
  },
  title: {
    paddingHorizontal: px(14),
    fontSize: px(16),
    fontFamily: 'Medium',
    color: Colors.TEXT,
    lineHeight: px(22),
    marginBottom: px(16),
  },
  carousel: {
    paddingHorizontal: px(6),
  },
  content: {
    flexDirection: 'row',
    paddingLeft: px(6),
    paddingRight: px(16),
  },
  dash: {
    width: px(1),
    height: '100%',
    backgroundColor: Colors.GRAY,
    marginLeft: px(11.5),
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: px(15.5),
  },
  infoItem: {
    flexDirection: 'row',
    marginVertical: px(5.5),
  },
  infoTextBlock: {
    marginLeft: px(8),
  },
  indicator: {
    marginTop: px(7),
    width: px(6),
    height: px(6),
    borderRadius: px(3),
  },
  infoTitle: {
    fontSize: px(14),
    fontFamily: 'Medium',
    color: Colors.TEXT,
    lineHeight: px(18),
    marginBottom: px(1),
  },
  infoValue: {
    fontSize: px(10),
    fontFamily: 'Regular',
    lineHeight: px(13),
  },
  edit: {
    marginTop: px(7),
    height: px(20),
  },
})
