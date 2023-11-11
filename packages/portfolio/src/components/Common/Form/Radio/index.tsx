import React from 'react'
import * as Style from './styles'
import Checkbox from 'components/Common/Form/Checkbox'

export interface RadioProps extends StrictCheckboxProps {
  [key: string]: any
}

export interface StrictCheckboxProps {
  error?: string
  validation?: any
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: RadioProps
  ) => void
  label?: string
  fontWeightLabel?: string
  textTransformLabel?: string
}

function Radio(props: RadioProps) {
  const { id } = props
  return (
    <Style.RadioWrapper id={id}>
      <Checkbox {...props} type="radio" />
    </Style.RadioWrapper>
  )
}

export default Radio
