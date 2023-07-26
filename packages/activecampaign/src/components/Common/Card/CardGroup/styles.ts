import styled, { css } from 'styled-components'
import { CardGroupProps } from '.'

export type HeaderProps = Pick<CardGroupProps, 'stackable'>

export const Group = styled.div.attrs({
  className: 'Card__Group'
})<HeaderProps>`
  ${({ stackable }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    display: ${stackable ? 'grid' : ''};
    grid-template-columns: ${stackable
      ? ' repeat(auto-fit, minmax(30rem, 1fr));'
      : ''};
  `}
`
