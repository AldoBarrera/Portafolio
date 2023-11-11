import * as Style from './styles'
import React, { useState } from 'react'
import Text from 'components/Common/Text'
import CheckboxDropdown from 'components/Common/Form/CheckboxDropDown'
import {
  useController,
  RegisterOptions,
  FieldValues,
  FieldName
} from 'react-hook-form'

export interface CheckboxDropdownGroupProps
  extends StrictCheckboxDropdownGroupProps {
  [key: string]: any
}

export interface StrictCheckboxDropdownGroupProps {
  error?: string
  validation?: any
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxDropdownGroupProps
  ) => void
  title?: string
  items?: { checkbox: string; dropdown: string[] }[]
  control?: UseControllerProps['control']
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

function CheckboxDropdownGroup({
  items,
  onChange,
  title,
  name,
  control,
  error
}: CheckboxDropdownGroupProps) {
  const [resultData, setResultData] = useState({})

  const {
    field: { onChange: onChangeController }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: ''
  })

  const handleChangeCheckbox = (e) => {
    if (e.target.name) {
      resultData[e.target.name] = {
        checked: e.target.checked
      }
      setResultData(resultData)
    }
    let isEmpty = true
    for (const item in resultData) {
      if (resultData[item].checked) {
        isEmpty = false
        break
      }
    }
    onChangeController(isEmpty ? null : resultData)
    if (onChange) onChange(e, resultData)
  }
  const handleChangeDropdown = (e, item) => {
    if (item.label) {
      resultData[item.label].dropdown = e.target.value
      setResultData(resultData)
    }
    onChangeController(resultData)
    if (onChange) onChange(e, resultData)
  }
  return (
    <Style.CheckboxDropdownGroupWrapper>
      <Text type="p">{title}</Text>
      {items.map((item, index) => (
        <CheckboxDropdown
          key={index}
          title={item.checkbox}
          label={item.checkbox}
          dropdown={item.dropdown}
          onChangeCheckbox={handleChangeCheckbox}
          onChangeDropdown={handleChangeDropdown}
        />
      ))}
      {error && <Style.Error>{error}</Style.Error>}
    </Style.CheckboxDropdownGroupWrapper>
  )
}

export default CheckboxDropdownGroup
