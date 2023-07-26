import styled, { css } from 'styled-components'
import { GridColumnProps } from '.'
import media from 'styled-media-query'

export type ColumnProps = Pick<GridColumnProps, 'color' | 'size'>

export const Column = styled.div.attrs({
  className: 'Grid__Column'
})<ColumnProps>`
  ${({ color, size }) => css`
    grid-column-end: span ${size};
    color: ${color};
    width: 100%;
    ${media.lessThan('medium')`
      grid-column-end: span 1;
    `}
  `}
`
