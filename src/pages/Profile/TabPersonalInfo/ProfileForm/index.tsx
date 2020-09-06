import React from 'react'

import { Container, TitleInput, TextInput } from './styles'
import { ProfileFormProps } from './types'

const ProfileForm: React.FC<ProfileFormProps> = ({
  title,
  userData,
  secureTextEntry,
}) => {
  return (
    <Container>
      <TitleInput>{title}</TitleInput>
      <TextInput value={userData} secureTextEntry={secureTextEntry} />
    </Container>
  )
}

export default ProfileForm
