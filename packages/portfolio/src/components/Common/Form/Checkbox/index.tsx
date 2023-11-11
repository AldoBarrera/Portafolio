import * as Style from './styles'
import React, { useState } from 'react'
import Text from 'components/Common/Text'

export interface CheckboxProps extends StrictCheckboxProps {
  [key: string]: any
}

export interface StrictCheckboxProps {
  error?: string
  validation?: any
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => void
  onBlur?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => void
  onFocus?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => void
  label?: string
  fontWeightLabel?: string
  textTransformLabel?: string
  hasLabelLink?: boolean
  typeLabel?:
    | 'cta'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'pHero'
    | 'placeholder'
    | 'bSmall'
    | 'bMedium'
    | 'bLarge'
    | 'bHuge'
}

function Checkbox(props: CheckboxProps) {
  const {
    label,
    name,
    id,
    placeholder,
    type = 'checkbox',
    validation,
    checked,
    value,
    onChange,
    onBlur,
    onFocus,
    fontWeightLabel,
    textTransformLabel,
    typeLabel = '',
    error,
    hasLabelLink = false
  } = props
  const [isChecked, setIsChecked] = useState(checked)
  const handleChange = (e) => {
    if (onChange) {
      onChange(e, {
        ...props,
        checked: !checked
      })
    }
    setIsChecked(!isChecked)
  }
  return (
    <Style.CheckboxWrapper id={id} onChange={handleChange}>
      <Style.Input
        value={value}
        checked={checked}
        type={type}
        name={name}
        placeholder={placeholder}
        {...validation}
        readOnly
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <Style.Label
        fontWeightLabel={fontWeightLabel}
        textTransformLabel={textTransformLabel}
      >
        {hasLabelLink ? (
          <p
            dangerouslySetInnerHTML={{
              __html: label
            }}
          />
        ) : typeLabel ? (
          <Text type={typeLabel}>{label}</Text>
        ) : (
          <Text>{label}</Text>
        )}
      </Style.Label>
      <Style.Span></Style.Span>
      {error && <Style.Error>{error}</Style.Error>}
    </Style.CheckboxWrapper>
  )
}

export default Checkbox
