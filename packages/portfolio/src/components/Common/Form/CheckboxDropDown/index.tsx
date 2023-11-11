import * as Style from './styles'
import React, { useState } from 'react'
import Select from 'components/Common/Form/Select'
import Text from 'components/Common/Text'
import Checkbox from 'components/Common/Form/Checkbox'
import { useForm } from 'react-hook-form'
import { EditOutline } from '@styled-icons/evaicons-outline/EditOutline'

export interface CheckboxDropdownProps extends StrictCheckboxDropdownProps {
  [key: string]: any
}

export interface StrictCheckboxDropdownProps {
  error?: string
  validation?: any
  onChangeCheckbox?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxDropdownProps
  ) => void
  onChangeDropdown?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxDropdownProps
  ) => void
  label?: string
  fontWeightLabel?: string
  textTransformLabel?: string
  dropdown?: string[]
}

function CheckboxDropdown(props: CheckboxDropdownProps) {
  const { id, checked, onChangeCheckbox, onChangeDropdown, dropdown, label } =
    props
  const {
    register,
    formState: { errors }
  } = useForm<any>()
  const [isChecked, setIsChecked] = useState(checked)
  const [isFocusSelect, setIsFocusSelect] = useState(false)
  const [isFocusCheckbox, setIsFocusCheckbox] = useState(false)
  const [, setIsFocusDiv] = useState(false)
  const [selectedItem, setSelectedItem] = useState(false)
  const handleChangeCheckbox = (e) => {
    if (onChangeCheckbox) {
      onChangeCheckbox(e, {
        ...props,
        checked: !isChecked
      })
    }
    setIsChecked(!isChecked)
  }
  const handleChangeSelect = (e, item) => {
    if (onChangeDropdown) {
      onChangeDropdown(e, {
        ...props,
        value: item
      })
    }
    setSelectedItem(item)
  }
  const handleOnBlurSelect = () => {
    setIsFocusSelect(false)
  }
  const handleOnFocusSelect = () => {
    setIsFocusSelect(true)
  }
  const handleOnBlurCheckbox = () => {
    setIsFocusCheckbox(false)
  }
  const handleOnFocusCheckbox = () => {
    setIsFocusCheckbox(true)
    setIsFocusSelect(true)
  }
  const handleOnBlurDdiv = () => {
    setIsFocusDiv(false)
  }
  const handleOnFocusDiv = () => {
    setIsFocusDiv(true)
    setIsFocusSelect(true)
  }
  return (
    <Style.CheckboxDropdownWrapper id={id}>
      <Checkbox
        {...props}
        id={label}
        name={label}
        onChange={handleChangeCheckbox}
        onBlur={() => handleOnBlurCheckbox()}
        onFocus={() => handleOnFocusCheckbox()}
      />

      {dropdown.length !== 0 &&
        isChecked &&
        (isFocusSelect || isFocusCheckbox) && (
          <Select
            id={`${label}-dropdown`}
            name={`${label}-dropdown`}
            defaultOption={'Select an Option'}
            placeholder={label}
            options={dropdown}
            validation={{
              ...register(`${label}-dropdown`, { required: true })
            }}
            error={errors.country && 'You should select an Country'}
            onChange={(e) => handleChangeSelect(e, e.target.value)}
            onBlur={() => handleOnBlurSelect()}
            onFocus={() => handleOnFocusSelect()}
          />
        )}
      {isChecked && !isFocusSelect && !isFocusCheckbox && (
        <Style.CheckboxDropdownOptionWraper
          tabIndex={1}
          onBlur={() => handleOnBlurDdiv()}
          onFocus={() => handleOnFocusDiv()}
        >
          <Text>({selectedItem})</Text>
          <EditOutline size={16} />
        </Style.CheckboxDropdownOptionWraper>
      )}
    </Style.CheckboxDropdownWrapper>
  )
}

export default CheckboxDropdown
