import React, { useRef, useLayoutEffect } from 'react'
import { Dimensions, View } from 'react-native'

import {
  Transitioning,
  TransitioningView,
  Transition,
} from 'react-native-reanimated'
import { linearInterpolation } from '../../../utils/linearInterpolation'
import Underlay from './Underlay'

import { GraphProps } from './types'
import { Container } from './styles'

const { width: wWidth } = Dimensions.get('window')
const aspectRatio = 195 / 305

const Graph: React.FC<GraphProps> = ({ data }) => {
  const ref = useRef<TransitioningView>(null)

  const canvasWidth = wWidth - 18 * 2
  const canvasHeight = canvasWidth * aspectRatio
  const width = canvasWidth - 18
  const height = canvasHeight - 18
  const step = width / data.length
  const values = data.map(v => v.value)
  const dates = data.map(d => d.date)
  const minY = 0
  const maxY = Math.max(...values)
  const transition = (
    <Transition.Together>
      <Transition.In
        type="slide-bottom"
        durationMs={600}
        interpolation="easeInOut"
      />
    </Transition.Together>
  )
  useLayoutEffect(() => {
    ref.current?.animateNextTransition()
  }, [])
  return (
    <Container
      style={{
        paddingBottom: 16,
        paddingLeft: 32,
      }}
    >
      <Underlay {...{ dates, minY, maxY, step }} />
      <Transitioning.View
        style={{ width, height, overflow: 'hidden' }}
        ref={ref}
        transition={transition}
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
                  borderRadius: step / 4,
                }}
              />
            </View>
          )
        })}
      </Transitioning.View>
    </Container>
  )
}

export default Graph
