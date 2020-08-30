import React from 'react'

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
import { SocialLoginProps } from './types'

const SocialLogin: React.FC<SocialLoginProps> = ({
  alterLabel,
  buttonLabel,
  action,
}) => {
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
        <AlternativeText>{alterLabel}</AlternativeText>
        <Link variant="primary" label={buttonLabel} onPress={action} />
      </AlternativeWrapper>
    </Container>
  )
}

export default SocialLogin
