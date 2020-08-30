/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import DrawerItem from './DrawerItem'
import bgCircles from '../../assets/OnBoarding/bgcircles.jpg'
import { menuItems } from './data'

import {
  Container,
  DrawerHeader,
  HeaderWrapper,
  DrawerMenuWrapper,
  DrawerMenuContainer,
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

const DrawerMenu = () => {
  return (
    <Container>
      <DrawerHeader>
        <HeaderWrapper>
          <Header
            title="Menu"
            left={{ icon: 'x', onPress: () => true }}
            right={{ icon: 'shopping-bag', onPress: () => true }}
          />
        </HeaderWrapper>
      </DrawerHeader>
      <DrawerMenuWrapper>
        <DrawerMenuContainer />
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
