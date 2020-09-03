import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const YScale = styled.View`
  flex: 1;
  justify-content: space-between;
`
export const YWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const YText = styled.Text`
  font-size: 12px;
  line-height: 18px;
  font-family: 'SF-Pro-Text-Semibold';
  text-transform: uppercase;
  color: #0c0d34;
  opacity: 0.4;
`
export const YLine = styled.View`
  flex: 1;
  height: 1px;
  margin-left: 4px;
  background: #0c0d341c;
`

export const XScale = styled.View`
  flex-direction: row;
  margin-left: 32px;
  margin-right: 16px;
  height: 16px;
  text-align: center;
`
export const XWrapper = styled.View``

export const XText = styled.Text`
  font-size: 12px;
  line-height: 18px;
  font-family: 'SF-Pro-Text-Semibold';
  text-transform: uppercase;
  color: #0c0d34;
  opacity: 0.4;
`
