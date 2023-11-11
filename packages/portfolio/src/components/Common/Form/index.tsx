import Button, { ButtonProps } from 'components/Common/Button'
import Text from 'components/Common/Text'
import { Spinner3 } from '@styled-icons/evil/Spinner3'
import { CircleWithCross } from '@styled-icons/entypo/CircleWithCross'
import { FormHTMLAttributes } from 'react'
import * as Style from './styles'

export type FormProps = {
  buttonLabel: string
  children: React.ReactNode
  columns?: number
  buttonAttributes?: ButtonProps
  buttonsAlign?: string
  isSubmitted?: number
  errorMessage?: string
  displayErrorMessage?: boolean
  customErrorMessage?: string
} & FormHTMLAttributes<HTMLFormElement>

function Form({
  buttonLabel,
  children,
  columns = 1,
  onSubmit,
  buttonAttributes,
  buttonsAlign,
  isSubmitted,
  errorMessage,
  displayErrorMessage,
  customErrorMessage
}: FormProps) {
  return (
    <Style.FormWrapper onSubmit={onSubmit}>
      <Style.Fieldset columns={columns}>{children}</Style.Fieldset>
      {!buttonAttributes ? (
        <Button type="submit" fullWidthMobile={true}>
          {buttonLabel}
        </Button>
      ) : (
        <Style.ButtonWrapper buttonsAlign={buttonsAlign}>
          <Button
            type="submit"
            label={buttonLabel}
            fullWidthMobile={true}
            {...buttonAttributes}
            icon={isSubmitted === 1 ? <Spinner3 /> : null}
            disabled={isSubmitted === 1 ? true : false}
          />
          {displayErrorMessage && (
            <Style.ErrorMessageWrapper>
              <CircleWithCross />
              <Text color="redPrimary">
                {errorMessage
                  ? errorMessage
                  : 'Sorry, we’re having some server problems'}
              </Text>
            </Style.ErrorMessageWrapper>
          )}
          {customErrorMessage && (
            <Style.ErrorMessageWrapper>
              <CircleWithCross />
              <Text color="redPrimary">{customErrorMessage}</Text>
            </Style.ErrorMessageWrapper>
          )}
        </Style.ButtonWrapper>
      )}
    </Style.FormWrapper>
  )
}

export default Form
