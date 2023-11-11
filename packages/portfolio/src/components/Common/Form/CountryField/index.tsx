import * as Style from './styles'
import React, { useState } from 'react'
import { getCountries } from 'react-phone-number-input/input'
import { Country } from 'react-phone-number-input/index.d'
import en from 'react-phone-number-input/locale/en.json'
import Select, { createFilter } from 'react-select'
import {
  useController,
  RegisterOptions,
  FieldValues,
  FieldName
} from 'react-hook-form'
import theme from 'styles/theme'

export interface CountryFieldProps extends StrictCountryFieldProps {
  [key: string]: any
}

export interface StrictCountryFieldProps {
  error?: string
  onChange?: (data: string) => void
  control: UseControllerProps['control']
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
  }
const options = getCountries().map((country) => ({
  label: en[country],
  value: country
}))

const customStyles = {
  option: (provided) => ({
    ...provided,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }),
  singleValue: (provided) => ({
    ...provided,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.gray4,
    color: theme.colors.mediumDarkGray
  }),
  placeholder: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.gray4,
    color: theme.colors.mediumDarkGray
  }),
  control: (provided) => ({
    ...provided,
    height: 56,
    backgroundColor: theme.colors.gray4,
    color: theme.colors.mediumDarkGray
  }),
  menu: (provided) => ({
    ...provided,
    width: 400,
    paddingLeft: '1.6rem'
  })
}

function CountryField(props: CountryFieldProps) {
  const { error, control, id, onChange, name, defaultValue, placeholder } =
    props
  const [, setCountryFieldValue] = useState(defaultValue)
  const {
    field: { onChange: onChangeController }
  } = useController({
    name,
    control,
    rules: {
      required: {
        value: true,
        message: 'This is a required field.'
      }
    },
    defaultValue: defaultValue
  })

  const handleChangeCountry = (newValue: { label: string; value: Country }) => {
    setCountryFieldValue(newValue.value)
    if (onChange) onChange(newValue.value)
    if (onChangeController) onChangeController(newValue.value)
  }
  const filterConfig = {
    matchFrom: 'start' as const
  }
  return (
    <Style.CountryFieldWrapper id={id}>
      <Select
        id="country-value-select"
        instanceId="country-value-select"
        name={name}
        placeholder={placeholder}
        styles={customStyles}
        options={options}
        onChange={handleChangeCountry}
        filterOption={createFilter(filterConfig)}
      />
      {error && <Style.Error>{error}</Style.Error>}
    </Style.CountryFieldWrapper>
  )
}

export default CountryField
