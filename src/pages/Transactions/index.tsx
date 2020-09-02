import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import Link from '../../components/Link'
import Graph from './Graph'

import { spentData } from './data'
import {
  Container,
  ChartContent,
  ChartTitleRow,
  SpendContainer,
  SpendTitle,
  SpendValue,
  TimeFilterContainer,
} from './styles'

const Transactions: React.FC = () => {
  const { dispatch } = useNavigation()

  return (
    <Container>
      <Header
        title="Transaction History"
        color="#0c0d34"
        left={{
          icon: 'menu',
          onPress: () => dispatch(DrawerActions.openDrawer()),
        }}
        right={{ icon: 'share', onPress: () => true }}
      />
      <ChartContent>
        <ChartTitleRow>
          <SpendContainer>
            <SpendTitle>Total Spent</SpendTitle>
            <SpendValue>$ 869,69</SpendValue>
          </SpendContainer>
          <TimeFilterContainer>
            <Link
              variant="primaryFilled"
              label="All Time"
              onPress={() => true}
            />
          </TimeFilterContainer>
        </ChartTitleRow>
        <Graph data={spentData} />
      </ChartContent>
    </Container>
  )
}

export default Transactions
