import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const LocationWrapper = styled.div.attrs({
  className: 'Location__Wrapper'
})`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spaces.xsmall};
    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  `}
`

export const LocationAddress = styled.div.attrs({
  className: 'Location__Address'
})`
  ${({ theme }) => css`
    padding: ${theme.spaces.xxsmall} 0;
    display: flex;
    align-items: flex-start;
    align-self: flex-end;
    gap: ${theme.spaces.xxsmall};
    flex: 1 1 auto;
    align-self: flex-start;
    ${media.greaterThan('medium')`
      gap: ${theme.spaces.xsmall};
    `}
  `}
`
export const LocationImage = styled.div.attrs({
  className: 'Location__Image'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7.5rem;
    min-width: 7.5rem;
    height: 7.5rem;
    background-color: ${theme.colors.locationsGray};
    .Image {
      width: 100%;
    }
  `}
`
export const LocationInfo = styled.div.attrs({
  className: 'Location__Info'
})``
