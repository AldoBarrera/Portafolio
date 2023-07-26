import styled, { css } from 'styled-components'
import { GridProps } from '.'
import media from 'styled-media-query'

export const Grid = styled.div.attrs({
  className: 'Grid'
})<GridProps>`
  ${({ theme, color, columnMinSizes, columns, gap }) => css`
    display: grid;
    grid-template-columns: repeat(
      ${columns ? columns : 'auto-fit'},
      minmax(${columnMinSizes}px, 1fr)
    );
    gap: ${gap ? gap : theme.spaces.xsmall};
    @media (max-width: 834px) {
      display: grid;
      grid-template-columns: repeat(
        ${columns ? columns : 'auto-fit'},
        minmax(${columnMinSizes - 25}px, 1fr)
      );
      gap: ${gap ? gap : theme.spaces.xxsmall};
    }
    ${media.lessThan('medium')`
      display: grid;
      grid-template-columns: repeat(1, minmax(${columnMinSizes - 25}px, 1fr));
      gap: ${gap ? gap : theme.spaces.xxsmall};
    `}
    max-width: 100%;
    background: ${color};
  `}
`
