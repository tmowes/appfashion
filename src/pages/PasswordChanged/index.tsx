import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Wrapper,
  IconContainer,
  SuccessIcon,
  Title,
  Description,
  ButtonContainer,
  IconCircle,
} from './styles'
import PagesContainer from '../../components/PagesContainer'
import Button from '../../components/Button'
import CloseFooter from '../../components/CloseFooter'

const PasswordChanged: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <PagesContainer
        footer={<CloseFooter onPress={() => navigate('OnBoarding')} />}
      >
        <Wrapper>
          <IconContainer>
            <IconCircle>
              <SuccessIcon />
            </IconCircle>
          </IconContainer>
          <Title>Your password was successfully changed</Title>
          <Description>Close this window and login again</Description>
          <ButtonContainer>
            <Button
              variant="primary"
              label="Login again"
              onPress={() => navigate('Login')}
            />
          </ButtonContainer>
        </Wrapper>
      </PagesContainer>
    </Container>
  )
}

export default PasswordChanged
