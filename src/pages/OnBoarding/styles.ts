import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import { SLIDE_HEIGHT } from './Slide/styles'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  margin-top: 28px;
  flex: 1;
  background: white;
`

export const Slider = styled.View`
  height: ${SLIDE_HEIGHT};
  background: orange;
  border-bottom-right-radius: 75px;
`

export const HorizontalScroll = styled(ScrollView).attrs({
  horizontal: true,
  snapToInterval: width,
  decelerationRate: 'fast',
  showsHorizontalScrollIndicator: false,
  bounces: false,
})``

export const Footer = styled.View`
  flex: 1;
`

export const FooterContent = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: orange;
`
export const BorderTopLeft = styled.View`
  flex: 1;
  background: white;
  border-top-left-radius: 75px;
`
