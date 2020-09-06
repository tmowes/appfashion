import React, { useState } from 'react'

import { useNavigation, DrawerActions } from '@react-navigation/native'
import {
  Container,
  FooterContainer,
  FooterWrapper,
  ImageBgHeader,
} from './styles'
import Header from '../../components/Header'
import { notificationSettings } from './data'
import bgCircles from '../../assets/OnBoarding/bgcircles.jpg'
import FooterTopCurve from '../Favorites/FooterTopCurve'
import NotificationsItem from './NotificationsItem'

const Notifications: React.FC = () => {
  const { dispatch } = useNavigation()
  const [footerHeight, setFooterHeight] = useState(0)

  return (
    <Container>
      <Header
        title="Notifications settings"
        color="#0c0d34"
        left={{
          icon: 'menu',
          onPress: () => dispatch(DrawerActions.openDrawer()),
        }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
      {notificationSettings.map(({ title, description, active }) => (
        <NotificationsItem key={title} {...{ title, description, active }} />
      ))}
      <FooterTopCurve footerHeight={footerHeight} color="#EF713D" />
      <FooterContainer
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => setFooterHeight(height)}
      >
        <FooterWrapper>
          <ImageBgHeader source={bgCircles} />
        </FooterWrapper>
      </FooterContainer>
    </Container>
  )
}

export default Notifications
