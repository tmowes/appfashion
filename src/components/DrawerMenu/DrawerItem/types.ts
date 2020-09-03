// import { useNavigation } from '@react-navigation/native'

// export interface BaseDrawerItemProps {
//   icon: string
//   label: string
//   color: string
// }

// export interface ScreenDrawerItemProps extends BaseDrawerItemProps {
//   screen: string
// }
// export interface OnPressDrawerItemProps extends BaseDrawerItemProps {
//   onPress: (navigation: ReturnType<typeof useNavigation>) => void
// }

// export type DrawerItemProps = ScreenDrawerItemProps | OnPressDrawerItemProps
export interface DrawerItemProps {
  icon: string
  label: string
  color: string
  screen: string
}
