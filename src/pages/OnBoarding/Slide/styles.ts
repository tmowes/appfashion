import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'
import { WrapperProps } from './types'

const { width, height } = Dimensions.get('window')

export const SLIDE_HEIGHT = Math.floor(0.61 * height)

export const SLIDE_WIDTH = width
export const SLIDE_TRANSLY = (SLIDE_HEIGHT - 100) / 2
export const SLIDE_TRANSLX = width / 2
export const SLIDE_TRANSLR = width / 2 - 50
export const SLIDE_TRANSLL = -width / 2 + 50
export const BORDER_RADIUS = 48

export const IMAGE_WIDTH = width
export const IMAGE_HEIGHT = (width - BORDER_RADIUS) * 2

export const Container = styled.View.attrs({
  width,
})`
  flex: 1;
  width: ${SLIDE_WIDTH}px;
  overflow: hidden;
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
  font-size: 72px;
  line-height: 72px;
  font-family: 'SF-Pro-Text-Bold';
  text-align: center;
  color: white;
`
