import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 32,
})``
export const TitleConfig = styled.Text`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 18px;
  font-family: 'SF-Pro-Text-Regular';
  color: #0c0d34;
  opacity: 0.4;
`
export const ConfigList = styled.View``

export const ScrollBrands = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-wrap: wrap;
  width: 100%;
`
