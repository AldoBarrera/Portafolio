import * as Style from './styles'
import React, { useState } from 'react'
import parsePhoneNumber from 'libphonenumber-js'
import PhoneFieldInput, {
  getCountries,
  getCountryCallingCode
} from 'react-phone-number-input/input'
import { Country } from 'react-phone-number-input/index.d'
import en from 'react-phone-number-input/locale/en.json'
import Select, { components, createFilter } from 'react-select'
import {
  useController,
  RegisterOptions,
  FieldValues,
  FieldName
} from 'react-hook-form'
import Image from 'components/Common/Image'
import theme from 'styles/theme'

export interface PhoneFieldProps extends StrictPhoneFieldProps {
  [key: string]: any
  defaultCountry?: Country
}

export interface StrictPhoneFieldProps {
  error?: string
  onChange?: (data: string) => void
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
  }
const options = getCountries().map((country) => ({
  label: en[country],
  value: country,
  image: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`
}))

const { SingleValue, Option } = components

const IconSingleValue = (props) => (
  <SingleValue {...props}>
    <Image
      alt="Country icon"
      src={props.data.image}
      style={{
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        marginRight: '10px',
        display: 'flex'
      }}
    />
    {props.data.value ? `+${getCountryCallingCode(props.data.value)}` : ''}
  </SingleValue>
)

const IconOption = (props) => (
  <Option {...props}>
    <Image
      src={props.data.image}
      alt="Country icon"
      style={{
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        marginRight: '10px',
        display: 'flex'
      }}
    />
    {props.data.label}
  </Option>
)

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
    width: '150px',
    backgroundColor: theme.colors.gray4,
    color: theme.colors.mediumDarkGray
  }),
  control: (provided) => ({
    ...provided,
    width: 150,
    height: 56,
    backgroundColor: theme.colors.gray4,
    color: theme.colors.mediumDarkGray
  }),
  menu: (provided) => ({
    ...provided,
    width: 400
  })
}

function PhoneField(props: PhoneFieldProps) {
  const {
    error,
    control,
    id,
    onChange,
    name,
    defaultValue,
    placeholder,
    defaultCountry = 'BO'
  } = props
  const [, setPhoneFieldValue] = useState(defaultValue)
  const [country, setCountry] = useState<Country>(defaultCountry)
  const {
    field: { onChange: onChangeController, name: namePhoneField, value }
  } = useController({
    name,
    control,
    rules: {
      required: {
        value: true,
        message: 'This is a required field.'
      },
      validate: {
        hasNumber: (phone: any) => {
          const phoneNumber = parsePhoneNumber(phone)
          return phoneNumber != undefined || 'The phone number is not valid'
        }
      }
    },
    defaultValue: defaultValue
  })
  const handleChange = (data: string) => {
    setPhoneFieldValue(data)
    if (onChange) onChange(data)
    if (onChangeController) onChangeController(data)
  }
  const handleChangeCountry = (newValue: {
    label: string
    value: Country
    image: string
  }) => {
    setCountry(newValue.value)
  }
  const filterConfig = {
    matchFrom: 'start' as const
  }
  return (
    <Style.PhoneFieldWrapper id={id}>
      <Style.PhoneFields>
        <Select
          id="long-value-select"
          instanceId="long-value-select"
          styles={customStyles}
          components={{ SingleValue: IconSingleValue, Option: IconOption }}
          options={options}
          defaultValue={{
            label: en[country],
            value: country,
            image: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`
          }}
          onChange={handleChangeCountry}
          filterOption={createFilter(filterConfig)}
        />
        <Style.PhoneFieldInputWrapper id={id}>
          <PhoneFieldInput
            country={country}
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
            name={namePhoneField}
          />
        </Style.PhoneFieldInputWrapper>
      </Style.PhoneFields>
      {error && <Style.Error>{error}</Style.Error>}
    </Style.PhoneFieldWrapper>
  )
}

export default PhoneField
