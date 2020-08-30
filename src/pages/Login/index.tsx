import React, { useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'

import { TextInput } from 'react-native'
import {
  Container,
  Title,
  Description,
  CheckboxContainer,
  ButtonContainer,
} from './styles'
import PagesContainer from '../../components/PagesContainer'
import SocialLogin from '../../components/SocialLogin'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import Link from '../../components/Link'

const Login: React.FC = () => {
  const { navigate } = useNavigation()

  const password = useRef<TextInput>(null)

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail required')
      .email('Enter a valid e-mail'),
    password: Yup.string().required('Password required'),
  })
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '', remember: true },
    onSubmit: () => navigate('Dashboard'),
  })

  return (
    <Container>
      <PagesContainer
        footer={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <SocialLogin
            alterLabel="Don't have an account?"
            buttonLabel="Sign Up here"
            action={() => navigate('SignUp')}
          />
        }
      >
        <Title>Welcome back</Title>
        <Description>
          Use your credentials below and login to your account
        </Description>
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
          returnKeyType="next"
          onSubmitEditing={() => password.current?.focus()}
        />
        <Input
          ref={password}
          icon="lock"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="password"
          placeholder="Enter your password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password}
          touched={touched.password}
          returnKeyType="send"
          onSubmitEditing={() => handleSubmit()}
        />
        <CheckboxContainer>
          <Checkbox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue('remember', !values.remember)}
          />
          <Link
            variant="primary"
            label="Forgot password"
            onPress={() => navigate('ForgotPassword')}
          />
        </CheckboxContainer>
        <ButtonContainer>
          <Button
            variant="primary"
            label="Log into your account"
            onPress={handleSubmit}
          />
        </ButtonContainer>
      </PagesContainer>
    </Container>
  )
}

export default Login
