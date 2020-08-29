import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Link from '../Link'
import {
  Container,
  SocialWrapper,
  IconCircle,
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
  AlternativeWrapper,
  AlternativeText,
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
        <Link
          variant="primary"
          label="Sign Up here"
          onPress={() => navigate('Login')}
        />
      </AlternativeWrapper>
    </Container>
  )
}

export default SocialLogin
