import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

export const Container = styled.View``
export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-evenly;
  margin: 64px 0;
`
export const Title = styled.Text`
  font-size: 28px;
  line-height: 32px;
  font-family: 'SF-Pro-Text-Semibold';
  text-align: center;
  color: #0c0d34;
  padding: 16px 16px 8px;
`
export const Description = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-family: 'SF-Pro-Text-Regular';
  text-align: center;
  color: #0c0d34;
  opacity: 0.7;
  padding: 8px 16px;
`
export const CheckboxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const ButtonContainer = styled.View`
  align-items: center;
  margin: 8px 0;
`

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const IconCircle = styled(RectButton)`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background: #2cb9b01a;
  margin: 24px 24px 0;
  align-items: center;
  justify-content: center;
`

export const SuccessIcon = styled(Icon).attrs({
  name: 'check',
  size: 48,
})`
  color: #2cb9b0;
  align-items: center;
  justify-content: center;
`
