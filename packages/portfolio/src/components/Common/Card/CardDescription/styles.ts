import styled, { css } from 'styled-components'
import { CardDescriptionProps } from '.'

export type DescriptionProps = Pick<
  CardDescriptionProps,
  'textAlign' | 'color' | 'size'
>

export const Description = styled.div.attrs({
  className: 'Card__Description'
})<DescriptionProps>`
  ${({ textAlign, color, theme }) => css`
    text-align: ${textAlign};
    margin-top: ${theme.spaces.xxsmall};
    color: ${color};
    white-space: pre-line;
  `}
`
