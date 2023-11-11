import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const RadioGroupWrapper = styled.div.attrs({
  className: 'RadioGroup__Wrapper'
})`
  display: flex;
  flex-wrap: wrap;
  ${media.lessThan('medium')`
    flex-direction: column;
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
