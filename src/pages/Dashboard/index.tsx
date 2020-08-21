import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container style={{ marginTop: 28, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 48, color: '#E69632' }}>Dashboard</Text>
    </Container>
  )
}

export default Dashboard
