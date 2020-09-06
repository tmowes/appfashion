import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { BORDER_RADIUS } from '../OnBoarding/Slide/styles'
import { TabProps } from './types'

export const Container = styled.View`
  flex: 1;
  background: white;
`
export const ProfileHeader = styled.View`
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
export const ProfileWrapper = styled.View`
  flex: 0.9;
`
export const ProfileTopContainer = styled.View`
  flex: 1;
  background: #0c0d34;
`
export const ProfileBottomContainer = styled.View`
  flex: 1;
  background: white;
`
export const ProfileContent = styled.View`
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
  margin: -48px 0 32px;
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
`
export const UserEmail = styled.Text`
  font-size: 16px;
  font-family: 'SF-Pro-Text-Regular';
  color: #0c0d3480;
  text-align: center;
`

export const ProfileTabs = styled.View`
  flex-direction: row;
  justify-content: space-around;
`
export const ProfileTabButton = styled(RectButton)`
  border-radius: 32px;
  padding: 4px 16px;
  background: #f4f0ef1c;
`

export const TabActive = styled.View<TabProps>`
  align-self: center;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background: transparent;
  ${({ active }) =>
    active &&
    css`
      background: #2cb9b0;
    `}
`
export const TabsTitle = styled.Text<TabProps>`
  font-size: 16px;
  font-family: 'SF-Pro-Text-Semibold';
  text-align: center;
  margin-bottom: 8px;
  color: #0c0d3480;
  ${({ active }) =>
    active &&
    css`
      color: #0c0d34;
    `}
`

export const ProfileFooter = styled.View`
  flex: 0.1;
  margin: 0 auto;
`
export const FooterWrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`
