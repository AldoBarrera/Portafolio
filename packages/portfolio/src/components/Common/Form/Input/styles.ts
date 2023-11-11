import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const InputWrapper = styled.div.attrs({
  className: 'Input__Wrapper'
})``

export const Input = styled.input.attrs({
  className: 'Input'
})<InputHTMLAttributes<HTMLInputElement>>`
  ${({ theme }) => css`
    width: 100%;
    height: 5.6rem;
    padding: 1rem 2.6rem;
    border: none;
    border-radius: 4px;
    font-family: 'Nunito';
    font-size: ${theme.font.placeholder.size.desktop};
    color: ${theme.colors.black};
    background-color: ${theme.colors.gray4};

    &::placeholder {
      color: currentColor;
      font-style: italic;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.gray4} inset !important;
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: ${theme.colors.black} !important;
    }

    ${media.lessThan('medium')`
      font-size: ${theme.font.placeholder.size.mobile};
    `}
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
