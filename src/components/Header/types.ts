export interface HeaderProps {
  left: {
    icon: string
    onPress: () => void
  }
  title: string
  color: string
  right: {
    icon: string
    onPress: () => void
  }
}
