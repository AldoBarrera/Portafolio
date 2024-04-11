import styled, { css } from 'styled-components'
import { GridColumnProps } from '.'
import media from 'styled-media-query'

export type ColumnProps = Pick<
  GridColumnProps,
  'color' | 'size' | 'padding' | 'paddingMobile'
>

export const Column = styled.div.attrs({
  className: 'Grid__Column'
})<ColumnProps>`
  ${({ color, size, padding, paddingMobile }) => css`
    grid-column-end: span ${size};
    color: ${color};
    width: 100%;
    padding: ${padding};
    ${media.lessThan('medium')`
      grid-column-end: span 1;
      padding: ${paddingMobile}
    `}
  `}
`
