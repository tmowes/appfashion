import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'
import { WrapperProps } from './types'

const { width, height } = Dimensions.get('window')

export const SLIDE_HEIGHT = 0.61 * height

export const SLIDE_WIDTH = width
export const SLIDE_TRANSLY = (SLIDE_HEIGHT - 100) / 2
export const SLIDE_TRANSLX = width / 2
export const SLIDE_TRANSLR = width / 2 - 50
export const SLIDE_TRANSLL = -width / 2 + 50
export const BORDER_RADIUS = 75

export const Container = styled.View.attrs({
  width,
})`
  flex: 1;
  width: ${SLIDE_WIDTH}px;
  overflow: hidden;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
`
export const Underlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
  justify-content: flex-end;
`
export const ImageContainer = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: undefined;
  height: undefined;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
`

export const Wrapper = styled.View<WrapperProps>`
  justify-content: center;
  height: 100px;
  z-index: 10;
  transform: rotate(90deg) translateX(${SLIDE_TRANSLL}px)
    translateY(${SLIDE_TRANSLY}px);
  ${({ isRight }) =>
    isRight &&
    css`
      transform: rotate(-90deg) translateX(${SLIDE_TRANSLR}px)
        translateY(${SLIDE_TRANSLY}px);
    `}
`

export const Title = styled.Text`
  font-size: 80px;
  line-height: 80px;
  font-family: 'SF-Pro-Text-Bold';
  text-align: center;
  color: white;
`