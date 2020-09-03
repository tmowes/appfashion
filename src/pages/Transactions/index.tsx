import React, { useState } from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'

import { ScrollView } from 'react-native'
import Header from '../../components/Header'
import Link from '../../components/Link'
import Graph from './Graph'
import TransactionDetail from './TransactionDetail'

import { spentData } from './data'
import {
  Container,
  ChartContent,
  ChartTitleRow,
  SpendContainer,
  SpendTitle,
  SpendValue,
  TimeFilterContainer,
  FooterContainer,
  FooterWrapper,
  ImageBgHeader,
} from './styles'

import bgCircles from '../../assets/OnBoarding/bgcircles.jpg'
import FooterTopCurve from '../Favorites/FooterTopCurve'

const Transactions: React.FC = () => {
  const { dispatch } = useNavigation()
  const [footerHeight, setFooterHeight] = useState(0)

  const transactionsValues = spentData.map(spent => spent.value)
  const totalSpent = transactionsValues.reduce(
    (accumulator, current) => accumulator + current,
  )

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
            <SpendValue>{`$${totalSpent}`}</SpendValue>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: footerHeight,
        }}
      >
        {spentData.map((transaction, index) => (
          <TransactionDetail key={index} {...{ transaction }} />
        ))}
      </ScrollView>
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

export default Transactions
