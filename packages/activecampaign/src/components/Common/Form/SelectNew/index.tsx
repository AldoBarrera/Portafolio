import * as Style from './styles'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import { SelectHTMLAttributes } from 'react'

export type SelectProps = {
  error?: string
  options: { key: string; value: string }[]
  defaultOption: string
  id?: string
  validation?: any
  onBlur?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: SelectProps
  ) => void
  onFocus?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: SelectProps
  ) => void
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: SelectProps
  ) => void
  ref?: any
} & SelectHTMLAttributes<HTMLSelectElement>

function Select({
  error,
  id,
  options,
  name,
  defaultOption,
  validation,
  onBlur,
  onFocus,
  onChange,
  ref
}: SelectProps) {
  return (
    <Style.SelectWrapper id={id}>
      <Style.Select
        ref={ref}
        name={name}
        defaultValue=""
        {...validation}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={(e) => {
          if (onChange) {
            onChange(e)
          }
          validation?.onChange(e)
        }}
      >
        <Style.Option disabled hidden value="">
          {defaultOption}
        </Style.Option>
        {options?.map((option, index) => (
          <Style.Option key={index} value={option.key}>
            {option.value}
          </Style.Option>
        ))}
      </Style.Select>
      <Style.IconWrapper>
        <ArrowIosDownwardOutline
          width={24}
          height={38}
          preserveAspectRatio="none"
        />
      </Style.IconWrapper>
      {error && <Style.Error>{error}</Style.Error>}
    </Style.SelectWrapper>
  )
}

export default Select
