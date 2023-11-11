import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { FormProps } from '.'

export const FormWrapper = styled.form.attrs({
  className: 'Form__Wrapper'
})`
  .Button {
    min-width: 265px;
  }
`

export const Fieldset = styled.fieldset.attrs({
  className: 'Form__Fieldset'
})<Pick<FormProps, 'columns'>>`
  ${({ columns, theme }) => css`
    display: grid;
    grid-gap: ${theme.grid.gutter2};
    border: none;
    margin-bottom: ${theme.spaces.xmedium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(${columns}, 1fr);
    `}
  `}
`

export const ButtonWrapper = styled.div.attrs({
  className: 'Form__ButtonWrapper'
})<Pick<FormProps, 'buttonsAlign'>>`
  ${({ buttonsAlign }) => css`
    display: flex;
    text-align: ${buttonsAlign};
    .Button:disabled {
      svg {
        animation: spin 1s linear infinite;
      }
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`

export const ErrorMessageWrapper = styled.div.attrs({
  className: 'Form__ErrorMessageWrapper'
})`
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 0 28px;
  svg {
    height: 24px;
    color: red;
  }
`
