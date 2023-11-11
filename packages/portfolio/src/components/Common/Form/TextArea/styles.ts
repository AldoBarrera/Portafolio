import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const TextAreaWrapper = styled.div.attrs({
  className: 'TextArea__Wrapper'
})``

export const TextArea = styled.textarea.attrs({
  className: 'TextArea'
})<InputHTMLAttributes<HTMLInputElement>>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 2.6rem;
    border: none;
    border-radius: 4px;
    font-family: sans-serif;
    font-size: ${theme.font.placeholder.size.desktop};
    color: ${theme.colors.black};
    background-color: ${theme.colors.gray4};
    resize: none;

    ${media.lessThan('medium')`
      font-size: ${theme.font.placeholder.size.mobile};
    `}

    &::placeholder {
      color: currentColor;
    }

    &::placeholder {
      font-family: sans-serif;
      font-style: italic;

      ${media.lessThan('medium')`
        font-size: ${theme.font.placeholder.size.mobile};
      `}
    }
  `}
`

export const Error = styled.span.attrs({
  className: 'TextArea__Error'
})`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.red};
  `}
`
