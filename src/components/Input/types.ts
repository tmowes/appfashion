import { TextInputProperties } from 'react-native'

export interface InputProps extends TextInputProperties {
  icon: string
  placeholder: string
  touched?: boolean
  error: string | undefined
}

export interface ContainerProps {
  borderColor: string
}
