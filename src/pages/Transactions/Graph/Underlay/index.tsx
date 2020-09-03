/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-duplicates */
import React, { useMemo } from 'react'
import { format } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

import { UnderlayProps } from './types'
import {
  Container,
  YScale,
  YWrapper,
  YLine,
  YText,
  XScale,
  XWrapper,
  XText,
} from './styles'
import { linearInterpolation } from '../../../../utils/linearInterpolation'

const Underlay: React.FC<UnderlayProps> = ({ dates, minY, maxY, step }) => {
  const formattedDate = useMemo(() => {
    return dates.map(date =>
      format(date, 'MMM', {
        locale: enUS,
      }),
    )
  }, [dates])
  return (
    <Container>
      <YScale>
        {[1, 0.66, 0.33, 0].map(spentValue => {
          return (
            <YWrapper
              key={spentValue}
              style={{
                height: 16,
                top: spentValue === 0 ? 8 : spentValue === 1 ? -8 : 0,
              }}
            >
              <YText>
                {Math.round(linearInterpolation(minY, maxY, spentValue))}
              </YText>
              <YLine />
            </YWrapper>
          )
        })}
      </YScale>
      <XScale>
        {formattedDate.map((date, index) => (
          <XWrapper key={date + index} style={{ width: step }}>
            <XText>{date}</XText>
          </XWrapper>
        ))}
      </XScale>
    </Container>
  )
}

export default Underlay
