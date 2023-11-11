import * as Style from './styles'
import React, { useState } from 'react'
import Radio, { RadioProps } from 'components/Common/Form/Radio'
import {
  useController,
  RegisterOptions,
  FieldValues,
  FieldName
} from 'react-hook-form'

export interface RadioGroupProps extends StrictRadioGroupProps {
  [key: string]: any
}

export interface StrictRadioGroupProps {
  error?: string
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: RadioGroupProps
  ) => void
  items?: RadioProps[]
  fontWeightLabel?: string
  textTransformLabel?: string
  control?: UseControllerProps['control']
  defaultValue?: UseControllerProps['defaultValue']
}

export type UseControllerProps<TFieldValues extends FieldValues = FieldValues> =
  {
    name: FieldName<TFieldValues>
    rules?: Exclude<
      RegisterOptions,
      'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >
    onFocus?: () => void
    defaultValue?: unknown
    control?: any
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

function RadioGroup(props: RadioGroupProps) {
  const {
    error,
    control,
    id,
    onChange,
    items,
    name,
    fontWeightLabel,
    textTransformLabel,
    defaultValue,
    typeLabel
  } = props
  const [radioValue, setRadioValue] = useState(defaultValue ? defaultValue : '')
  const {
    field: { onChange: onChangeController }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: defaultValue ? defaultValue : items[0]?.label
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: RadioGroupProps
  ) => {
    setRadioValue(data.value)
    if (onChange) onChange(e, data)
    if (onChangeController) onChangeController(data.value)
  }

  return (
    items && (
      <Style.RadioGroupWrapper id={id}>
        {items?.map((item, index) => (
          <Radio
            key={index}
            label={item.label}
            name={'radio' + name}
            value={item.value}
            checked={radioValue === item.value}
            onChange={handleChange}
            fontWeightLabel={fontWeightLabel}
            textTransformLabel={textTransformLabel}
            typeLabel={typeLabel}
          />
        ))}
        {error && <Style.Error>{error}</Style.Error>}
      </Style.RadioGroupWrapper>
    )
  )
}

export default RadioGroup
