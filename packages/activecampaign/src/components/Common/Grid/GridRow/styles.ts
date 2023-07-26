import styled, { css } from 'styled-components'
import { GridRowProps } from '.'
import media from 'styled-media-query'

export type RowProps = Pick<
  GridRowProps,
  'color' | 'size' | 'rowDistribution' | 'columns' | 'hasColumns'
>

export const Row = styled.div.attrs({
  className: 'Grid__Row'
})<RowProps>`
  ${({ color, theme, columns, rowDistribution, hasColumns, size }) => css`
    ${
      hasColumns &&
      css`
        grid-column-end: span 12;
        display: grid;
        grid-template-columns: repeat(
          ${columns ? columns : 'auto-fit'},
          minmax(0px, 1fr)
        );
        gap: ${theme.spaces.xsmall};
      `
    }
    color: ${color};
    grid-column-end: span ${size};
    width: 100%;
    color: ${color};
    grid-row: ${rowDistribution};
    ${media.lessThan('medium')`
      grid-column-end: span 1;
      display: grid;
      grid-template-columns: repeat(1, minmax(0px, 1fr));
      gap: ${theme.spaces.xxsmall};
    `}
  `}
`
