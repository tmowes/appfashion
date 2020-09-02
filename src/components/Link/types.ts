export interface LinkProps {
  label: string
  variant?: 'default' | 'primary' | 'white' | 'primaryFilled'
  onPress: () => void
}
export interface LinkContainerProps {
  variant?: 'default' | 'primary' | 'white' | 'primaryFilled'
}
