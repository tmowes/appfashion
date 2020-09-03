import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { FooterTopCurveProps } from './types'
import { BORDER_RADIUS } from '../../OnBoarding/Slide/styles'

const FooterTopCurve: React.FC<FooterTopCurveProps> = ({
  footerHeight,
  color = '#0c0d34',
}) => {
  const size = BORDER_RADIUS
  return (
    <Svg
      width={size}
      height={size}
      style={{
        position: 'absolute',
        bottom: footerHeight,
        right: 0,
      }}
      viewBox="0 0 1 1"
    >
      <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill={color} />
    </Svg>
  )
}

export default FooterTopCurve
