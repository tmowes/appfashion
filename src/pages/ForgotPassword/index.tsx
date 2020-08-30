import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'

import { Linking } from 'react-native'
import { Container, Title, Description, ButtonContainer } from './styles'
import PagesContainer from '../../components/PagesContainer'
import SocialLogin from '../../components/SocialLogin'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => {
  const { navigate } = useNavigation()

  const ForgotSchema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail required')
      .email('Enter a valid e-mail'),
  })
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: ForgotSchema,
    initialValues: { email: '' },
    onSubmit: () => navigate('PasswordChanged'),
  })

  return (
    <Container>
      <PagesContainer
        footer={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <SocialLogin
            alterLabel="Don't work?"
            buttonLabel="Try another way"
            action={() => Linking.openURL('mailto:help@support.com')}
          />
        }
      >
        <Title>Forgot password?</Title>
        <Description>Enter the email associated with your account</Description>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          icon="mail"
          placeholder="Enter your email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          error={errors.email}
          touched={touched.email}
          returnKeyType="send"
          onSubmitEditing={() => handleSubmit()}
        />
        <ButtonContainer>
          <Button
            variant="primary"
            label="Reset password"
            onPress={handleSubmit}
          />
          <Button label="Back to login" onPress={() => navigate('Login')} />
        </ButtonContainer>
      </PagesContainer>
    </Container>
  )
}

export default SignUp
