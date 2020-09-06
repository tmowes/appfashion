import React, { useState, useCallback } from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native'

import Header from '../../components/Header'
import Button from '../../components/Button'
import {
  Container,
  ProfileHeader,
  HeaderWrapper,
  ProfileWrapper,
  ProfileTopContainer,
  ProfileContent,
  UserContent,
  AvatarCircle,
  Avatar,
  UserName,
  UserEmail,
  ProfileTabs,
  ProfileFooter,
  ProfileBottomContainer,
  TabsTitle,
  ProfileTabButton,
  TabActive,
} from './styles'
import TabConfiguration from './TabConfiguration'
import TabPersonalInfo from './TabPersonalInfo'

const Profile: React.FC = () => {
  const { dispatch } = useNavigation()
  const [activeConfigTab, setActiveConfigTab] = useState(false)
  const [activeInfoTab, setActiveInfoTab] = useState(!activeConfigTab)

  const handleActiveTabChange = useCallback(() => {
    setActiveConfigTab(prev => !prev)
    setActiveInfoTab(prev => !prev)
  }, [])

  return (
    <Container>
      <ProfileHeader>
        <HeaderWrapper>
          <Header
            title="Profile"
            color="white"
            left={{
              icon: 'menu',
              onPress: () => dispatch(DrawerActions.openDrawer()),
            }}
            right={{ icon: 'log-out', onPress: () => true }}
          />
        </HeaderWrapper>
      </ProfileHeader>
      <ProfileWrapper>
        <ProfileTopContainer />
        <ProfileBottomContainer />
        <ProfileContent>
          <UserContent>
            <AvatarCircle>
              <Avatar source={{ uri: 'https://github.com/tmowes.png' }} />
            </AvatarCircle>
            <UserName>Julius Mowes</UserName>
            <UserEmail>julius.mowes@gmail.com</UserEmail>
          </UserContent>
          <ProfileTabs>
            <ProfileTabButton onPress={handleActiveTabChange}>
              <TabsTitle active={activeConfigTab}>Configuration</TabsTitle>
              <TabActive active={activeConfigTab} />
            </ProfileTabButton>
            <ProfileTabButton onPress={handleActiveTabChange}>
              <TabsTitle active={activeInfoTab}>Personal Info</TabsTitle>
              <TabActive active={activeInfoTab} />
            </ProfileTabButton>
          </ProfileTabs>
          {activeConfigTab && <TabConfiguration />}
          {activeInfoTab && <TabPersonalInfo />}
        </ProfileContent>
      </ProfileWrapper>
      <ProfileFooter>
        <Button
          variant="primary"
          label="Swipe to save changes"
          onPress={() => true}
        />
      </ProfileFooter>
    </Container>
  )
}

export default Profile
