import styled, { css } from 'styled-components'
import { CardContentProps } from '.'

export type ContentProps = Pick<CardContentProps, 'textAlign' | 'padding'>

export const Content = styled.div.attrs({
  className: 'Card__Content'
})<ContentProps>`
  ${({ textAlign, theme, padding }) => css`
    background: 0 0;
    margin: 0;
    box-shadow: none;
    font-size: ${theme.font.sizes.medium};
    border-radius: 0;
    text-align: ${textAlign};
    padding: ${padding ? padding : theme.spaces.small};
  `}
`
