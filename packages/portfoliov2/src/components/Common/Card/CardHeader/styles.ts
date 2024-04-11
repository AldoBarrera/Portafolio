import styled, { css } from 'styled-components'
import { CardHeaderProps } from '.'

export type HeaderProps = Pick<CardHeaderProps, 'textAlign' | 'textTransform'>

export const Header = styled.div.attrs({
  className: 'Card__Header'
})<HeaderProps>`
  ${({ textAlign, color, textTransform }) => css`
    text-align: ${textAlign};
    color: ${color};
    text-transform: ${textTransform};
  `}
`
