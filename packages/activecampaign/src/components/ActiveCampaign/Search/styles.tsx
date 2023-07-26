import styled, { css } from 'styled-components'

export const TagContainer = styled.div.attrs({
  className: 'Article__TagContainer'
})`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spaces.tiny};
    justify-content: space-between;
    padding: ${theme.spaces.medium} ${theme.spaces.xxsmall};
  `}
`
