import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

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
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail required')
      .email('Enter a valid e-mail'),
    password: Yup.string().required('Password required'),
  })

  return (
    <Container>
      <PagesContainer footer={<SocialLogin />}>
        <Title>Welcome back</Title>
        <Description>
          Use your credentials below and login to your account
        </Description>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: '', password: '', remember: false }}
          onSubmit={values => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              <Input
                icon="mail"
                placeholder="Enter your email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
                touched={touched.email}
              />
              <Input
                icon="lock"
                secureTextEntry
                placeholder="Enter your password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
                touched={touched.password}
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
                  onPress={() => true}
                />
              </CheckboxContainer>
              <ButtonContainer>
                <Button
                  variant="primary"
                  label="Log into your account"
                  onPress={handleSubmit}
                />
              </ButtonContainer>
            </>
          )}
        </Formik>
      </PagesContainer>
    </Container>
  )
}

export default Login
