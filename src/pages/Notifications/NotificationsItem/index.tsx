import React from 'react'

import { Container, Wrapper, Title, Description } from './styles'
import { NotificationsItemProps } from './types'
import Toggle from './Toggle'

const NotificationsItem: React.FC<NotificationsItemProps> = ({
  title,
  description,
  active,
}) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
      <Toggle active={active} />
    </Container>
  )
}

export default NotificationsItem
