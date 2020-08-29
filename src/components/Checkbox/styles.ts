import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`
export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #2cb9b0;
  margin-right: 8px;
`
