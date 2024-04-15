import styled, { css } from 'styled-components'
import { CardContentProps } from '.'

export const Content = styled.div.attrs({
  className: 'Card__Content'
})<CardContentProps>`
  ${({ textAlign, theme, padding }) => css`
    background: 0 0;
    margin: 0;
    box-shadow: none;
    font-size: ${theme.font.p.size};
    border-radius: 0;
    text-align: ${textAlign};
    padding: ${padding ? padding : theme.spaces.small};
  `}
`
