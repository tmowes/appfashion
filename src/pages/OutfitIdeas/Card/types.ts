import Animated from 'react-native-reanimated'
import { State } from 'react-native-gesture-handler'
import { ImageRequireSource } from 'react-native'

export interface CardProps {
  position: Animated.Node<number>
  // step: Animated.Node<number>
  step: number
  onSwipe: () => void
  source: ImageRequireSource
}

export interface WithSpringParams {
  value: Animated.Node<number>
  velocity: Animated.Node<number>
  state: Animated.Node<State>
  snapPoints: number[]
  onSnap?: ((values: readonly number[]) => void) | undefined
  // onSnap?: (values: readonly number[]) => false | void | undefined
}
