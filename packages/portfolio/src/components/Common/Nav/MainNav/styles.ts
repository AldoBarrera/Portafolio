import styled, { css } from 'styled-components'
import { NavWrapperProps, NavSubMenuProps } from 'components/Common/Nav/styles'

export const MainNavWrapper = styled.nav.attrs({
  className: 'Main_NavWrapper'
})<NavWrapperProps>`
  ${() => css`
    flex-direction: row;
    display: flex;
  `}
`

export const MainNavMenu = styled.ul.attrs({
  className: 'Main__NavMenu'
})`
  ${({ theme }) => css`
    display: flex;
    list-style-type: none;
    gap: ${theme.grid.gutter1};
    margin-left: auto;
  `}
`

export const MainNavItem = styled.li.attrs({
  className: 'Main__NavItem'
})<NavSubMenuProps>`
  ${({ theme, childCount, hasUnderline }) => css`
    position: relative;
    cursor: pointer;

    &:hover {
      .Main__NavSubMenu {
        visibility: visible;
        opacity: 1;
        height: ${childCount * (50 + 2) + 3}px;
        transition: height 1s, visibility 0.5s, opacity 0.5s linear;
      }
    }

    ${hasUnderline &&
    (() => css`
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: ${theme.colors.redPrimary};
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
export const MainNavSubMenu = styled.ul.attrs({
  className: 'Main__NavSubMenu'
})`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border-radius: 0px 0px ${theme.spaces.small} 0px;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: height 1s, visibility 0.5s, opacity 0.5s linear;
    margin-top: 0.2rem;
    width: max-content;
    z-index: 1;
    li:hover {
      &:before {
        content: '■ ';
        color: ${theme.colors.redPrimary};
        font-size: 12px;
      }
    }
  `}
`

export const MainNavSubItem = styled.li.attrs({
  className: 'Main__NavSubItem'
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
