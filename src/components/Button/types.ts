export interface ButtonProps {
  label: string
  variant?: 'default' | 'primary' | 'transparent'
  onPress: () => void
}
export interface ButtonContainerProps {
  variant?: 'default' | 'primary' | 'transparent'
}
