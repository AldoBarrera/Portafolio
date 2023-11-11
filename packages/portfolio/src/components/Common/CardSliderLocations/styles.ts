import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { CardSliderLocationsProps } from '.'

export const CardSliderLocationsWrapper = styled.div.attrs({
  className: 'CardSliderLocations__Wrapper'
})<Pick<CardSliderLocationsProps, 'backgroundColor'>>`
  ${({ theme, backgroundColor }) => css`
    span {
      color: ${theme.colors.redPrimary};
    }
    h2,
    h5 {
      text-align: center;
    }
    h5 {
      margin-bottom: ${theme.spaces.medium};
    }
    padding-top: ${theme.spaces.xlarge};
    background-color: ${backgroundColor
      ? theme.colors[backgroundColor]
      : theme.colors.lightGray2};
    ${media.lessThan('medium')`
      .Grid {
        display: block !important;
      }
      padding-top: ${theme.spaces.large};
    `}
  `}
`
export const CardSliderLocationsImage = styled.div.attrs({
  className: 'CardSliderLocations__Image '
})``

export const CardSliderLocationsInfo = styled.div.attrs({
  className: 'CardSliderLocations__Info'
})`
  ${({ theme }) => css`
    align-self: center;
    .Card {
      border-radius: ${theme.border.radius2};
    }
  `}
`

export const CardSliderLocationsInfoWeb = styled.div.attrs({
  className: 'GridCardsRequirement__InfoWeb'
})`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      display:none !important;
    `}
    padding: 0px ${theme.spaces.large};
  `}
`

export const CardSliderLocationsInfoMobile = styled.div.attrs({
  className: 'GridCardsRequirement__InfoMobile'
})`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display:none !important;
    `}
    padding: 0px ${theme.spaces.xsmall};
  `}
`

export const LocationsItems = styled.ul.attrs({
  className: 'ListLocations__Items'
})`
  list-style: none;
`

export const LocationsItem = styled.li.attrs({
  className: 'ListLocations__Item'
})`
  ${({ theme }) => css`
    &::before {
      content: '\\2022';
      margin: 0 ${theme.spaces.xtiny};
      color: ${theme.colors.redPrimary};
      font-size: ${theme.font.bHuge.size.desktop};
      vertical-align: sub;
    }
  `}
`

export const CardSliderContainer = styled.div.attrs({
  className: 'CardSlider__Container '
})`
  ${({ theme }) => css`
    margin-top: ${theme.spaces.medium};
    padding: ${theme.spaces.small} ${theme.spaces.xsmall};
    background: ${theme.colors.secondary};
    color: ${theme.colors.mediumDarkGray3};
    font-weight: bold;
    font-size: ${theme.font.bMedium.size.desktop};
    ${media.lessThan('medium')`
      font-size: ${theme.font.bMedium.size.mobile};
    `}
  `}
`
