import styled, { css } from 'styled-components'
import { NavWrapperProps } from 'components/Common/Nav/styles'

export const MobileNavWrapperButtons = styled.nav.attrs({
  className: 'Nav__MobileWrapperButtons'
})<NavWrapperProps>`
  ${() => css`
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    }
  `}
`

export const MobileNavLogo = styled.div.attrs({
  className: 'Mobile_NavLogo'
})<NavWrapperProps>`
  ${({ theme, isStickySet }) => css`
    font-size: 0;
    img {
      height: ${isStickySet ? '33px !important' : ''};
      width: 176px !important;
      padding-bottom: ${isStickySet ? '0' : theme.spaces.tiny} !important;
      transition: ${!isStickySet
        ? 'initial'
        : 'height 0.4s, width 0.4s linear'};
    }
  `}
`

export const MobileNavWrapper = styled.nav.attrs({
  className: 'Mobile_NavWrapper'
})<NavWrapperProps>`
  ${({ isSticky }) => css`
    width: 100%;
    position: ${isSticky ? 'fixed' : ''};
    z-index: 1;
  `}
`

export const MobileEmptyNavWrapper = styled.nav.attrs({
  className: 'Mobile_EmptyNavWrapper'
})<NavWrapperProps>`
  ${({ isSticky }) => css`
    display: ${isSticky ? '' : 'none'};
    height: 71px;
    @media (min-width: 1161px) {
      display: none;
    }
  `}
`
