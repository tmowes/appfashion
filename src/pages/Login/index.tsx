import React from 'react'

import { Text } from 'react-native'
import { Container } from './styles'
import PagesContainer from '../../components/PagesContainer'
import SocialLogin from '../../components/SocialLogin'

const Login: React.FC = () => {
  return (
    <Container>
      <PagesContainer footer={<SocialLogin />}>
        <Text>Children</Text>
      </PagesContainer>
    </Container>
  )
}

export default Login
