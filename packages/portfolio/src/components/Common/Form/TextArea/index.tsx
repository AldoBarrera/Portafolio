import { TextareaHTMLAttributes } from 'react'
import * as Style from './styles'

export type TextAreaProps = {
  error?: string
  validation?: any
} & TextareaHTMLAttributes<HTMLTextAreaElement>

function TextArea({ error, placeholder, validation }: TextAreaProps) {
  return (
    <Style.TextAreaWrapper>
      <Style.TextArea placeholder={placeholder} {...validation} />
      <Style.Error>{error}</Style.Error>
    </Style.TextAreaWrapper>
  )
}

export default TextArea
