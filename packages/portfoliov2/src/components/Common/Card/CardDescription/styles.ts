import styled, { css } from 'styled-components'
import { CardDescriptionProps } from '.'

export const Description = styled.div.attrs({
  className: 'Card__Description'
})<CardDescriptionProps>`
  ${({ textAlign, color, theme }) => css`
    text-align: ${textAlign};
    margin-top: ${theme.spaces.xxsmall};
    color: ${color};
    white-space: pre-line;
  `}
`
