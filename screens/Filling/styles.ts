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
    marginBottom: px(19),
  },
  section: {
    paddingHorizontal: px(12),
  },
  sectionTitle: {
    marginLeft: px(2),
    fontSize: px(16),
    fontFamily: 'Regular',
    lineHeight: px(19.5),
    color: Colors.TEXT,
    marginBottom: px(1),
  },
  sectionSubtitle: {
    fontSize: px(16),
    fontFamily: 'Regular',
    lineHeight: px(19.5),
    color: Colors.TEXT,
    textTransform: 'lowercase',
    marginBottom: px(13),
  },
  dash: {
    width: '100%',
    height: px(1),
    backgroundColor: Colors.GRAY,
    marginTop: px(25),
    marginBottom: px(12),
  },
  buttonBlock: {
    position: 'absolute',
    width: '100%',
    padding: px(8),
  },
  button: {
    width: '100%',
    height: px(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ACTIVE,
    borderRadius: px(30),
  },
  buttonText: {
    fontSize: px(16),
    fontFamily: 'Medium',
    lineHeight: px(24),
    color: Colors.WHITE,
    textAlign: 'center',
  },
})
