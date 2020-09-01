import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'
import { Container, IconView, MenuText } from './styles'
import { DrawerItemProps } from './types'

const DrawerItem: React.FC<DrawerItemProps> = ({
  icon,
  label,
  color,
  screen,
}) => {
  const { navigate } = useNavigation()
  return (
    <Container onPress={() => navigate(screen)}>
      <IconView style={{ backgroundColor: color }}>
        <Icon name={icon} size={20} color="white" />
      </IconView>
      <MenuText>{label}</MenuText>
    </Container>
  )
}

export default DrawerItem
