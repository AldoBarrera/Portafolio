import { InputHTMLAttributes } from 'react'
import * as Style from './styles'

type ValidationProps = {
  name?: string
  email?: string
  workEmail?: string
  phoneNumber?: string
  company?: string
}

export type InputProps = {
  error?: string
  validation?: ValidationProps
} & InputHTMLAttributes<HTMLInputElement>

function Input({ error, name, id, placeholder, type, validation }: InputProps) {
  return (
    <Style.InputWrapper id={id}>
      <Style.Input
        {...(type === 'date' && { max: '9999-12-31' })}
        type={type}
        name={name}
        placeholder={placeholder}
        {...validation}
      />
      {error && <Style.Error>{error}</Style.Error>}
    </Style.InputWrapper>
  )
}

export default Input
