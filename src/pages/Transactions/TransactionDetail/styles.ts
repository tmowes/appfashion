import styled, { css } from 'styled-components/native'
import { RoundedMarkerProps } from './types'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const SeeMoreContainer = styled.View``

export const RoundedMarker = styled.View<RoundedMarkerProps>`
  ${({ color }) => css`
background: ${color}
height: 16px;
width: 16px;
border-radius: 8px;
margin-right: 8px;
`}
`
export const DetailsContent = styled.View``
export const IdContainer = styled.View``

export const TransactionTitle = styled.Text``
export const TransactionText = styled.Text``
