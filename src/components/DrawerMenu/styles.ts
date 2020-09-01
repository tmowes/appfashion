import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { BORDER_RADIUS } from '../../pages/OnBoarding/Slide/styles'

const { width } = Dimensions.get('window')

const aspectRatio = 1280 / 1856
const imgHeight = width * aspectRatio * 1.25
export const Container = styled.View`
  flex: 1;
  background: white;
`
export const DrawerHeader = styled.View`
  flex: 0.2;
  background: white;
`
export const HeaderWrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #0c0d34;

  border-bottom-right-radius: ${BORDER_RADIUS}px;
`

export const DrawerTitle = styled.Text`
  font-size: 14px;
  font-family: 'SF-Pro-Text-Regular';
  color: white;
  text-align: center;
  text-transform: uppercase;
`

export const DrawerMenuWrapper = styled.View`
  flex: 0.8;
`
export const DrawerMenuTopContainer = styled.View`
  flex: 1;
  background: #0c0d34;
`
export const DrawerMenuBottomContainer = styled.View`
  flex: 1;
  background: #ef713d;
`
export const DrawerMenuContent = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: white;
  justify-content: center;
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
`
export const UserContent = styled.View`
  margin: -64px 0 32px;
`
export const AvatarCircle = styled.View`
  align-self: center;
  background: #2cb9b080;
  height: 80px;
  width: 80px;
  border-radius: 40px;
`
export const Avatar = styled.Image`
  align-self: center;
  height: 80px;
  width: 80px;
  border-radius: 40px;
`

export const UserName = styled.Text`
  font-size: 28px;
  font-family: 'SF-Pro-Text-Semibold';
  color: #0c0d34;
  text-align: center;
  /* text-transform: uppercase; */
`
export const UserEmail = styled.Text`
  font-size: 16px;
  font-family: 'SF-Pro-Text-Regular';
  color: #0c0d3480;
  text-align: center;
  /* text-transform: uppercase; */
`

export const DrawerFooter = styled.View`
  flex: 0.2;
`
export const FooterWrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-top-left-radius: ${BORDER_RADIUS}px;
  overflow: hidden;
`
export const ImageBgHeader = styled.Image`
  width: ${width}px;
  height: ${imgHeight + 20}px;
  top: -24px;
  left: -96px;
`
