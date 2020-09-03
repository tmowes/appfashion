import React, { useMemo } from 'react'
import enUS, { format } from 'date-fns'

import Link from '../../../components/Link'
import { TransactionDetailsProps } from './types'
import {
  Container,
  DetailsContent,
  IdContainer,
  TransactionTitle,
  TransactionText,
  RoundedMarker,
  SeeMoreContainer,
} from './styles'

const TransactionDetail: React.FC<TransactionDetailsProps> = ({
  transaction: { id, value, date, color },
}) => {
  const formattedDate = useMemo(
    () =>
      format(new Date(date), "MMMM' 'yyyy", {
        locale: enUS,
      }),
    [date],
  )

  return (
    <Container
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <DetailsContent>
        <IdContainer
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <RoundedMarker color={color} />
          <TransactionTitle>{`#${id}`}</TransactionTitle>
        </IdContainer>
        <TransactionText>{`$ ${value} - ${formattedDate}`}</TransactionText>
      </DetailsContent>
      <SeeMoreContainer>
        <Link label="See more" onPress={() => true} />
      </SeeMoreContainer>
    </Container>
  )
}

export default TransactionDetail
