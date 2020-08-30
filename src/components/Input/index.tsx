/* eslint-disable no-nested-ternary */
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import { Container, ValidContainer } from './styles'
import { InputProps, InputRef } from './types'

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { icon, error, touched, ...props },
  ref,
) => {
  const inputElementRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    },
  }))
  const color = touched ? (!error ? '#2cb9b0' : '#ff0058') : '#8a8d90'
  return (
    <Container borderColor={color}>
      <Feather name={icon} size={16} {...{ color }} />
      <TextInput
        ref={inputElementRef}
        underlineColorAndroid="transparent"
        placeholderTextColor="#15162480"
        {...props}
      />
      {touched && (
        <ValidContainer style={{ backgroundColor: color }}>
          <Feather name={!error ? 'check' : 'x'} size={16} color="white" />
        </ValidContainer>
      )}
    </Container>
  )
}

export default forwardRef(Input)
