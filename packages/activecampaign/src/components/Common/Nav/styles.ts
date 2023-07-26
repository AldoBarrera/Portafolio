import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { NavProps } from '.'

export type NavWrapperProps = {
  isSecondary?: boolean
  isSticky?: boolean
  isInitialPosition?: boolean
  isStickySet?: boolean
} & Pick<NavProps, 'bgColor' | 'textColor'>

export type NavSubMenuProps = {
  childCount?: number
  hasUnderline?: boolean
} & Pick<NavProps, 'bgColor' | 'textColor'>

const Navbar = styled.div.attrs({
  className: 'Navbar'
})<NavWrapperProps>`
  ${({ isInitialPosition }) => css`
    width: 100%;
    position: ${!isInitialPosition ? 'fixed' : ''};
    z-index: 1;
    @media (max-width: 1160px) {
      display: none;
    }
    .Wrapper_Container {
      border-bottom: 0;
    }
  `}
`

const NavWrapper = styled.nav.attrs({
  className: 'Nav__Wrapper'
})<NavWrapperProps>`
  ${({ theme, isSecondary, isInitialPosition, bgColor }) => css`
    display: flex;
    visibility: ${!isInitialPosition ? 'hidden' : 'visible'};
    opacity: ${!isInitialPosition ? '0' : '1'};
    background-color: ${bgColor
      ? theme.colors[bgColor]
      : theme.colors.secondary};
    width: 100%;
    height: ${!isInitialPosition && !isSecondary ? '0' : ''};
    transition: ${!isInitialPosition && !isSecondary
      ? ''
      : 'height 0.9s, visibility 0.5s, opacity 0.5s linear;'};
    .Container {
      padding: 0;
      display: flex;
      align-items: center;
    }
  `}
`
const NavWrapperSecondary = styled(NavWrapper)<NavWrapperProps>`
  ${({ isSticky, theme, isInitialPosition, isStickySet, bgColor }) => css`
    top: 0;
    transition: ${!isStickySet
      ? 'initial'
      : 'visibility 0.5s, opacity 0.5s linear'};
    ${isInitialPosition
      ? () => css`
          visibility: 'visible';
          opacity: '1';
        `
      : () => css`
          visibility: ${!isSticky ? 'hidden' : 'visible'};
          opacity: ${!isSticky ? '0' : '1'};
        `}
    z-index: 1;
    background-color: ${bgColor
      ? theme.colors[bgColor]
      : theme.colors.secondary};
    flex-direction: column;
    display: flex;
    .Wrapper_Container {
      background-color: ${bgColor
        ? theme.colors[bgColor]
        : theme.colors.secondary};
      border-bottom: 1px solid
        ${bgColor ? theme.colors[bgColor] : theme.colors.darkGray};
    }
    .Container {
      padding: 0;
      transition: padding 0.5s linear;
      display: flex;
      flex-direction: column;
    }
  `}
`

const NavWrapperSecondaryButtons = styled.nav.attrs({
  className: 'Nav__WrapperSecondaryButtons'
})<NavWrapperProps>`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    .Nav__Menu {
      gap: ${theme.spaces.large};
      @media (max-width: 1160px) {
        gap: 3rem;
      }
      @media (max-width: 1079px) {
        gap: 2.1rem;
      }
    }
  `}
`

const NavWrapperMobile = styled.nav.attrs({
  className: 'NavMobile'
})<NavWrapperProps>`
  ${({ theme, isSticky, bgColor }) => css`
    background-color: ${bgColor
      ? theme.colors[bgColor]
      : theme.colors.secondary};
    width: 100%;
    position: ${isSticky ? 'fixed' : ''};
    z-index: 1;
    @media (min-width: 1161px) {
      display: none;
    }
    .Container {
      transition: 0.4s;
      padding-bottom: ${theme.spaces.xsmall};
      padding-top: ${theme.spaces.xsmall};
      display: flex;
      flex-direction: column;
    }
  `}
`

const EmptyNavWrapper = styled.nav.attrs({
  className: 'EmptyNavWrapper'
})<NavWrapperProps>`
  ${({ theme, isSticky, isInitialPosition, isStickySet, bgColor }) => css`
    height: ${isSticky && isStickySet ? '291px' : '291px'};
    background-color: ${bgColor
      ? theme.colors[bgColor]
      : theme.colors.secondary};
    display: ${!isInitialPosition ? '' : 'none'};
    @media (max-width: 1160px) {
      display: none;
    }
  `}
`

const EmptyNavWrapperMobile = styled.nav.attrs({
  className: 'EmptyNavWrapperMobile'
})<NavWrapperProps>`
  ${({ theme, isSticky, bgColor }) => css`
    background-color: ${bgColor
      ? theme.colors[bgColor]
      : theme.colors.secondary};
    display: ${isSticky ? '' : 'none'};
    height: 165px;
    @media (min-width: 1161px) {
      display: none;
    }
  `}
`

const NavLogo = styled.div.attrs({
  className: 'Nav__Logo'
})<NavWrapperProps>`
  ${({ isStickySet, textColor }) => css`
    font-size: 0;
    margin: auto;
    ${media.lessThan('medium')`
      margin-left: 0;
    `}
    img {
      ${textColor &&
      (() => css`
        filter: grayscale(1) invert(100%) brightness(200%) contrast(200%);
      `)};
      height: ${isStickySet ? '33px' : ''};
      width: 176px;
      padding-bottom: 0;
      transition: ${!isStickySet
        ? 'initial'
        : 'height 0.4s, width 0.4s linear'};
      @media (max-width: 1160px) {
        width: 125px;
        padding-bottom: 0;
      }
      ${media.lessThan('medium')`
        padding-bottom: 0;
      `}
    }
  `}
`

const NavMenu = styled.ul.attrs({
  className: 'Nav__Menu'
})`
  ${({ theme }) => css`
    display: flex;
    list-style-type: none;
    gap: ${theme.spaces.large};
    margin: auto;
    @media (max-width: 1160px) {
      flex-direction: column;
      gap: 12px;
      align-items: center;
      margin: auto;
    }
  `}
`

const NavItem = styled.li.attrs({
  className: 'Nav__Item'
})<NavSubMenuProps>`
  ${({ theme, childCount, hasUnderline, textColor }) => css`
    position: relative;
    cursor: pointer;
    ${media.greaterThan('medium')`
      &:hover {
        .Nav__SubMenu {
          visibility: visible;
          opacity: 1;
          height: ${childCount * (50 + 2) + 3}px;
          transition: height 1s, visibility 0.5s, opacity 0.5s linear;
        }
      }
    `}
    ${hasUnderline &&
    (() => css`
      &::after {
        position:relative;
        top: -10px;
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: ${textColor
          ? theme.colors[textColor]
          : theme.colors.orangePrimary};
        transition: width 0.3s;
      }
      &:hover::after {
        width: 100%;
      }
      a {
        font-weight: bold;
      }
    `)}
  `}
`

const NavSubMenu = styled.ul.attrs({
  className: 'Nav__SubMenu'
})`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      background: rgba(250,250,250,0.8);
      border-radius: 0px 0px ${theme.spaces.small} 0px;
      position: absolute;
      visibility: hidden;
      opacity: 0;
      height: 0;
      overflow:hidden;
      transition: height 1s, visibility 0.5s, opacity 0.5s linear;
      margin-top: 0.2rem;
      width: max-content;
      z-index: 1;
    `}
    li:before {
      content: '■ ';
      color: ${theme.colors.orangePrimary};
      font-size: 12px;
    }
  `}
`

const NavSubItem = styled.li.attrs({
  className: 'Nav__SubItem'
})`
  ${({ theme }) => css`
    padding-left: ${theme.spaces.tiny};
    display: block;
    border-top: 3px solid ${theme.colors.secondary};
    list-style-type: square;
    list-style-position: inside;
    &:not(:last-of-type) {
      border-bottom: none;
    }

    &:hover(:last-of-type) {
      border-bottom: none;
    }
    &:hover {
      background: ${theme.colors.gray4};
    }
    .Button {
      height: 5rem;
    }
    a {
      padding: ${theme.spaces.tiny} ${theme.spaces.small} ${theme.spaces.tiny}
        ${theme.spaces.xtiny};
    }
  `}
`

export {
  Navbar,
  NavWrapper,
  NavWrapperSecondary,
  NavLogo,
  NavMenu,
  NavItem,
  NavSubMenu,
  NavSubItem,
  EmptyNavWrapper,
  NavWrapperMobile,
  EmptyNavWrapperMobile,
  NavWrapperSecondaryButtons
}
