import React from 'react'
import { Dimensions, View } from 'react-native'
import { GraphProps } from './types'

import { Container } from './styles'
import { linearInterpolation } from '../../../utils/linearInterpolation'

const { width: wWidth } = Dimensions.get('window')
const aspectRatio = 195 / 305

const Graph: React.FC<GraphProps> = ({ data }) => {
  const width = wWidth - 18 * 2
  const height = width * aspectRatio
  const step = width / data.length
  const values = data.map(v => v.value)
  // const dates = data.map(d => d.date)
  // const minX = Math.min(...dates)
  // const maxX = Math.max(...dates)
  // const minY = Math.min(...values)
  const maxY = Math.max(...values)
  return (
    <Container
      style={{
        width,
        height,
      }}
    >
      {data.map((bar, index) => {
        if (bar.value === 0) {
          return null
        }
        return (
          <View
            key={bar.date}
            style={{
              position: 'absolute',
              width: step / 2,
              left: index * step,
              bottom: 0,
              backgroundColor: `${bar.color}26`,
              borderTopLeftRadius: step / 4,
              borderTopRightRadius: step / 4,
              height: linearInterpolation(0, height, bar.value / maxY),
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: step / 1.5,
                backgroundColor: bar.color,
                opacity: 1,
                borderRadius: step / 4,
              }}
            />
          </View>
        )
      })}
    </Container>
  )
}

export default Graph
