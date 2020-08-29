export interface ButtonProps {
  label: string
  variant?:
    | 'default'
    | 'primary'
    | 'transparent'
    | 'transparent2'
    | 'transparent3'
  onPress: () => void
}
export interface ButtonContainerProps {
  variant?:
    | 'default'
    | 'primary'
    | 'transparent'
    | 'transparent2'
    | 'transparent3'
}
