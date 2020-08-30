import React, { useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'

import { TextInput } from 'react-native'
import { Container, Title, Description, ButtonContainer } from './styles'
import PagesContainer from '../../components/PagesContainer'
import SocialLogin from '../../components/SocialLogin'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => {
  const { navigate } = useNavigation()

  const email = useRef<TextInput>(null)
  const password = useRef<TextInput>(null)
  const confirmPassword = useRef<TextInput>(null)

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail required')
      .email('Enter a valid e-mail'),
    password: Yup.string().required('Password required'),
    confirmPassword: Yup.string()
      .equals([Yup.ref('password')], "Passwords don't match")
      .required('Password required'),
  })
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: { email: '', password: '', confirmPassword: '' },
    onSubmit: submitValues => console.log(submitValues),
  })

  return (
    <Container>
      <PagesContainer
        footer={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <SocialLogin
            alterLabel="Already have an account?"
            buttonLabel="Login here"
            action={() => navigate('Login')}
          />
        }
      >
        <Title>Create account</Title>
        <Description>
          Let's us know what your name, email and your password
        </Description>
        {/* <Input
          icon="user"
          placeholder="Enter your name"
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          error={errors.name}
          touched={touched.name}
          returnKeyType="next"
          onSubmitEditing={() => password.current?.focus()}
        /> */}
        <Input
          ref={email}
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
          returnKeyType="next"
          onSubmitEditing={() => confirmPassword.current?.focus()}
        />
        <Input
          ref={confirmPassword}
          icon="lock"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="password"
          placeholder="Confirm your password"
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
          value={values.confirmPassword}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
          returnKeyType="send"
          onSubmitEditing={() => handleSubmit()}
        />
        <ButtonContainer>
          <Button
            variant="primary"
            label="Create your account"
            onPress={handleSubmit}
          />
        </ButtonContainer>
      </PagesContainer>
    </Container>
  )
}

export default SignUp
