import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

const SIZE = 60
const RADIUS = SIZE / 2
const INNERSIZE = 56
const INNERRADIUS = INNERSIZE / 2

export const Container = styled.View`
  margin: 4px;
  align-items: center;
`
export const RoundedButton = styled(RectButton)`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${RADIUS}px;
  margin: 0 8px;
  align-items: center;
  justify-content: center;
`
export const SelectedButton = styled.View`
  border: 2px solid white;
  width: ${INNERSIZE}px;
  height: ${INNERSIZE}px;
  border-radius: ${INNERRADIUS}px;
  align-self: center;
  margin: 0 8px;
`
export const CategoryLabel = styled.Text`
  text-align: center;
`
