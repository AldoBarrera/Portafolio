import styled, { css } from 'styled-components'
import { CardMetaProps } from '.'

export type MetaProps = Pick<CardMetaProps, 'textAlign'>

export const Meta = styled.div.attrs({
  className: 'Card__Meta'
})<MetaProps>`
  ${({ textAlign }) => css`
    text-align: ${textAlign};
  `}
`
