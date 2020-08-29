import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Container = styled.View`
  flex: 1;
`

export const SocialWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const IconCircle = styled(RectButton)`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  background: white;
  margin: 8px 8px 0;
  align-items: center;
  justify-content: center;
`

export const FacebookIcon = styled(Icon).attrs({
  name: 'facebook',
  size: 24,
})`
  align-items: center;
  justify-content: center;
`
export const GoogleIcon = styled(Icon).attrs({
  name: 'google',
  size: 24,
})`
  align-items: center;
  justify-content: center;
`
export const AppleIcon = styled(Icon).attrs({
  name: 'apple',
  size: 24,
})`
  align-items: center;
  justify-content: center;
`

export const AlternativeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const AlternativeText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-family: 'SF-Pro-Text-Regular';
  text-align: center;
  color: white;
  padding: 8px;
`
