import React from 'react'

import { Container, Title, Description } from './styles'
import PagesContainer from '../../components/PagesContainer'
import SocialLogin from '../../components/SocialLogin'

const Login: React.FC = () => {
  return (
    <Container>
      <PagesContainer footer={<SocialLogin />}>
        <Title>Welcome back</Title>
        <Description>
          Use your credentials below to login to your account
        </Description>
      </PagesContainer>
    </Container>
  )
}

export default Login
