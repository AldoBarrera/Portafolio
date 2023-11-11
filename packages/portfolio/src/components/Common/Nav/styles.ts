import styled, { css } from 'styled-components'

export type NavWrapperProps = {
  isMain?: boolean
  isSticky?: boolean
  isInitialPosition?: boolean
  isStickySet?: boolean
}

export type NavSubMenuProps = {
  childCount?: number
  hasUnderline?: boolean
}

export const Navbar = styled.div.attrs({
  className: 'Navbar'
})<NavWrapperProps>`
  ${({ theme, isInitialPosition, isSticky }) => css`
    background: ${theme.colors.secondary};
    transition: visibility 0.5s, opacity 0.5s linear;
    width: 100%;
    z-index: 1;
    ${isInitialPosition
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          position: fixed;
          visibility: ${!isSticky ? 'hidden' : 'visible'};
          opacity: ${!isSticky ? '0' : '1'};
        `}
  `}
`

export const EmptyNavWrapper = styled.nav.attrs({
  className: 'EmptyNavWrapper'
})<NavWrapperProps>`
  ${({ isInitialPosition }) => css`
    height: 102px;
    ${isInitialPosition &&
    css`
      display: none;
    `}
  `}
`
