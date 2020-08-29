import { TextInputProperties } from 'react-native'

export interface InputProps extends TextInputProperties {
  icon: string
  placeholder: string
  touched?: boolean
  error: string | undefined
  validator?: (input: string) => boolean
}

export const Valid = true
export const Invalid = false
export const Pristine = null

export type InputStateProps = typeof Valid | typeof Invalid | typeof Pristine

export interface ContainerProps {
  borderColor: string
}
