import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const PhoneFieldWrapper = styled.div.attrs({
  className: 'PhoneField__Wrapper'
})``
export const PhoneFields = styled.div.attrs({
  className: 'PhoneFields'
})`
  ${({ theme }) => css`
    display: flex;
    #react-select-long-value-select-input {
      display: none;
    }
    #long-value-select {
      font-size: ${theme.font.h4.size.desktop};
      ${media.lessThan('medium')`
        font-size: ${theme.font.h6.size.mobile};
      `}
      .Image {
        display: grid !important;
      }
    }
  `}
`

export const PhoneFieldInputWrapper = styled.div.attrs({
  className: 'PhoneFieldInput__Wrapper'
})`
  ${({ theme }) => css`
    width: 100%;

    & > input:-webkit-autofill,
    & > input:-webkit-autofill:hover,
    & > input:-webkit-autofill:focus,
    & > input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.gray4} inset !important;
    }
    & > input:-webkit-autofill {
      -webkit-text-fill-color: ${theme.colors.black} !important;
    }
    input:autofill {
      color: ${theme.colors.black} !important;
      background-color: ${theme.colors.gray4} !important;
    }
    input {
      width: 100%;
      height: 5.6rem;
      padding: 1rem 2.6rem;
      border: none;
      border-radius: ${theme.spaces.xxtiny};
      font-family: 'Nunito';
      font-size: ${theme.font.h4.size.desktop};
      color: ${theme.colors.black} !important;
      background-color: ${theme.colors.gray4} !important;
      &::placeholder {
        color: currentColor;
        font-style: italic;
      }
      ${media.lessThan('medium')`
      font-size: ${theme.font.h6.size.mobile};
    `}
    }
  `}
`

export const Error = styled.span.attrs({
  className: 'Input__Error'
})`
  ${({ theme }) => css`
    top: 64px;
    display: block;
    color: ${theme.colors.red};
  `}
`

export const Input = styled.input.attrs({
  className: 'Input'
})<InputHTMLAttributes<HTMLInputElement>>``
