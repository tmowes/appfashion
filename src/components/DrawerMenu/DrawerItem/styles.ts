import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin: 4px 32px;
  border-radius: 16px;
  background: #f4f0ef1c;
`
export const IconView = styled.View`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`
export const MenuText = styled.Text`
  font-size: 16px;
`
