import styled, { css } from 'styled-components'
import { CardMetaProps } from '.'

export const Meta = styled.div.attrs({
  className: 'Card__Meta'
})<CardMetaProps>`
  ${({ textAlign }) => css`
    text-align: ${textAlign};
  `}
`
