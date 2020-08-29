import React from 'react'

import {
  Container,
  HeaderWrapper,
  ImageBgHeader,
  ContentWrapper,
  ContentContainer,
  ImageBgHeaderRadius,
  FooterContent,
} from './styles'
import bgCircles from '../../assets/OnBoarding/bgcircles.jpg'
import { PageContainerProps } from './types'

const PagesContainer: React.FC<PageContainerProps> = ({ children, footer }) => {
  return (
    <Container>
      <HeaderWrapper>
        <ImageBgHeader source={bgCircles} />
      </HeaderWrapper>
      <ContentWrapper>
        <ImageBgHeaderRadius source={bgCircles} />
        <ContentContainer>{children}</ContentContainer>
      </ContentWrapper>
      <FooterContent>{footer}</FooterContent>
    </Container>
  )
}

export default PagesContainer
