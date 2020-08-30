import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const IconCircle = styled(RectButton)`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background: white;
  margin: 8px 8px 0;
  align-items: center;
  justify-content: center;
`

export const CloseIcon = styled(Icon).attrs({
  name: 'x',
  size: 40,
})`
  align-items: center;
  justify-content: center;
`
