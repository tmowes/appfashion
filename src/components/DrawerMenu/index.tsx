import React from 'react'

import { DrawerActions, useNavigation } from '@react-navigation/native'
import DrawerItem from './DrawerItem'
import bgCircles from '../../assets/OnBoarding/bgcircles.jpg'
import { menuItems } from './data'

import {
  Container,
  DrawerHeader,
  HeaderWrapper,
  DrawerMenuWrapper,
  DrawerMenuTopContainer,
  DrawerMenuBottomContainer,
  DrawerMenuContent,
  AvatarCircle,
  Avatar,
  UserContent,
  UserName,
  UserEmail,
  DrawerFooter,
  FooterWrapper,
  ImageBgHeader,
} from './styles'
import Header from '../Header'

const DrawerMenu: React.FC = () => {
  const { dispatch } = useNavigation()
  return (
    <Container>
      <DrawerHeader>
        <HeaderWrapper>
          <Header
            title="Menu"
            color="white"
            left={{
              icon: 'x',
              // onPress: () => true,
              onPress: () => dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: 'shopping-bag', onPress: () => true }}
          />
        </HeaderWrapper>
      </DrawerHeader>
      <DrawerMenuWrapper>
        <DrawerMenuTopContainer />
        <DrawerMenuBottomContainer />
        <DrawerMenuContent>
          <UserContent>
            <AvatarCircle>
              <Avatar source={{ uri: 'https://github.com/tmowes.png' }} />
            </AvatarCircle>
            <UserName>Julius Mowes</UserName>
            <UserEmail>julius.mowes@gmail.com</UserEmail>
          </UserContent>
          {menuItems.map(item => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </DrawerMenuContent>
      </DrawerMenuWrapper>
      <DrawerFooter>
        <FooterWrapper>
          <ImageBgHeader source={bgCircles} />
        </FooterWrapper>
      </DrawerFooter>
    </Container>
  )
}

export default DrawerMenu
