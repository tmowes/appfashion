import React from 'react'
import { Text } from 'react-native'
import bgCircles from '../../assets/OnBoarding/bgcircles.jpg'

import { Container, ImageBgHeader } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container
      style={{
        // marginTop: 28,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageBgHeader source={bgCircles} />
      <Text style={{ fontSize: 48, color: '#000' }}>Dashboard</Text>
      <Text style={{ fontSize: 32, color: '#000' }}>COMMING SOON...</Text>
    </Container>
  )
}

export default Dashboard
