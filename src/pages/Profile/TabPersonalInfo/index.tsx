import React, { useCallback, useState } from 'react'

import {
  Container,
  TitleInfo,
  GenderContent,
  GenderButton,
  GenderText,
} from './styles'
import { accountData } from './data'
import ProfileForm from './ProfileForm'

const TabPersonalInfo: React.FC = () => {
  const [male, setMale] = useState(true)
  const [female, setFemale] = useState(!male)

  const handleGenderSelection = useCallback(() => {
    setMale(prev => !prev)
    setFemale(prev => !prev)
  }, [])
  return (
    <Container>
      {accountData.user.map(({ title, userData, secureTextEntry }) => (
        <ProfileForm key={title} {...{ title, userData, secureTextEntry }} />
      ))}
      <TitleInfo>{accountData.gender.title}</TitleInfo>
      <GenderContent>
        <GenderButton selected={male} onPress={handleGenderSelection}>
          <GenderText selected={male}>
            {accountData.gender.gender[0]}
          </GenderText>
        </GenderButton>
        <GenderButton selected={female} onPress={handleGenderSelection}>
          <GenderText selected={female}>
            {accountData.gender.gender[1]}
          </GenderText>
        </GenderButton>
      </GenderContent>
    </Container>
  )
}

export default TabPersonalInfo
