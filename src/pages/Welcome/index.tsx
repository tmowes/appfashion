/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Dimensions } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import {
  Container,
  FooterWrapper,
  Slider,
  ImageContainer,
  FooterContent,
  BorderTopLeft,
  SubTitle,
  Description,
} from './styles'
import picture from '../../data/picture'
import Button from '../../components/Button'

const { width } = Dimensions.get('window')

const Welcome: React.FC = () => {
  const { navigate } = useNavigation()
  return (
    <Container>
      <Slider>
        <ImageContainer
          source={picture.uri}
          style={{
            width: width - 65,
            height: ((width - 65) * picture.height) / picture.width,
            resizeMode: 'cover',
          }}
        />
      </Slider>
      <FooterWrapper>
        <BorderTopLeft />
        <FooterContent>
          <SubTitle>Lets get started</SubTitle>
          <Description>
            Login to your account below or signup for amazing experience
          </Description>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigate('Login')}
          />
          <Button label="Join us, its free" onPress={() => {}} />
          <Button
            variant="transparent"
            label="Forgot password"
            onPress={() => {}}
          />
        </FooterContent>
      </FooterWrapper>
    </Container>
  )
}

export default Welcome
