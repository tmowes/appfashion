import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
  Container,
  SocialWrapper,
  IconCircle,
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
  AlternativeWrapper,
  AlternativeText,
  AlternativeButton,
  ButtonText,
} from './styles'

const SocialLogin: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <SocialWrapper>
        <IconCircle>
          <FacebookIcon />
        </IconCircle>
        <IconCircle>
          <GoogleIcon />
        </IconCircle>
        <IconCircle>
          <AppleIcon />
        </IconCircle>
      </SocialWrapper>
      <AlternativeWrapper>
        <AlternativeText>Don't have an account?</AlternativeText>
        <AlternativeButton onPress={() => navigate('Login')}>
          <ButtonText>Sign Up here</ButtonText>
        </AlternativeButton>
      </AlternativeWrapper>
    </Container>
  )
}

export default SocialLogin
