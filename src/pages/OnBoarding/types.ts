import { ImageRequireSource } from 'react-native'

export interface OnBoardingProps {
  picture: {
    uri: ImageRequireSource
    width: number
    height: number
  }
}
