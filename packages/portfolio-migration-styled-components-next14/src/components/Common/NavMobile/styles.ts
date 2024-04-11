import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { lighten } from 'polished'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'
import { NavPropsMobile } from '.'

export const NavMobileWrapper = styled.div.attrs({
  className: 'NavMobile__Wrapper'
})`
  margin-left: auto;

  #menuToggle .NavMobile__Input:checked ~ ul {
    transform: scale(1, 1);
    opacity: 1;
  }
`
export const NavMobileContent = styled.nav.attrs({
  className: 'NavMobile__Content'
})``

export const IconWrapper = styled.div.attrs({
  className: 'Icon__Wrapper'
})`
  position: relative;
  z-index: 5;
`

export const IconCloseCircle = styled(CloseCircleOutline).attrs({
  className: 'Icon__CloseCircle'
})`
  ${({ theme }) => css`
    width: ${theme.spaces.medium};
    color: ${theme.colors.primary};
    margin: auto;
  `}
`

export const IconHamburgerMenu = styled(Menu).attrs({
  className: 'Icon__HamburgerMenu'
})<NavPropsMobile>`
  ${({ theme, iconColor }) => css`
    width: ${theme.spaces.medium};
    color: ${iconColor ? theme.colors[iconColor] : theme.colors.primary};
    margin: auto;
  `}
`
export const NavMobileMenuToggle = styled.div.attrs({
  className: 'NavMobile__MenuToggle'
})`
  display: block;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  .Icon__CloseCircle {
    display: none;
  }
  .NavMobile__Input:checked ~ .Icon__Wrapper {
    .Icon__CloseCircle {
      display: unset;
    }
    .Icon__HamburgerMenu {
      display: none;
    }
  }
  .NavMobile__Input:checked ~ .NavMobile__List {
    box-shadow: -100vw 100vh 0px 1000vh rgba(0, 0, 0, 0.36);
    -webkit-box-shadow: -100vw 100vh 0px 1000vh rgba(0, 0, 0, 0.36);
    -moz-box-shadow: -100vw 100vh 0px 1000vh rgba(0, 0, 0, 0.36);
  }
`

export const NavMobileInput = styled.input.attrs({
  className: 'NavMobile__Input'
})`
  ${({ theme }) => css`
    display: block;
    width: ${theme.spaces.medium};
    height: ${theme.spaces.medium};
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 6;
    -webkit-touch-callout: none;
  `}
`

export const NavMobileList = styled.ul.attrs({
  className: 'NavMobile__List'
})`
  ${({ theme }) => css`
    position: absolute;
    z-index: 2;
    width: 300px;
    margin: -100px 0 0 0;
    padding: 100px 50px 50px 50px;
    right: 0px;
    background: ${theme.colors.gray4};
    border-radius: 0px 0px 30px 0px;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  `}
`

export const NavItem = styled.li.attrs({
  className: 'Nav__Item'
})`
  ${({ theme }) => css`
    padding: ${theme.spaces.xxsmall} 0;
    cursor: pointer;

    #primary-link {
      text-transform: capitalize;
    }
    a {
      font-size: 14px;
      text-decoration: none;
      color: ${theme.colors.black};
      text-transform: uppercase;
      font-weight: bold;
      transition: color 0.1s ease-in-out;
      &:hover {
        color: ${lighten(0.2, theme.colors.black)};
      }
    }
    span {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      text-decoration: none;
      color: ${theme.colors.black};
      cursor: default;
    }

    svg {
      margin-left: ${theme.spaces.xtiny};
    }
  `}
`

export const NavSubMenu = styled.ul.attrs({
  className: 'Nav__SubMenu'
})`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      padding-top: ${theme.spaces.xsmall};
      width: max-content;
    `}
  `}
`

export const NavSubItem = styled.li.attrs({
  className: 'Nav__SubItem'
})`
  ${({ theme }) => css`
    display: block;

    &:not(:last-of-type) {
      border-bottom: none;
    }

    a {
      display: block;
      padding: ${theme.spaces.xtiny} ${theme.spaces.xsmall};
      font-size: 14px;
      color: ${theme.colors.osloGray} !important;
      text-transform: capitalize;
    }
  `}
`

export const NavMobileTopLinks = styled.div.attrs({
  className: 'NavMobile__TopLinks'
})`
  ${({ theme }) => css`
    padding-top: ${theme.spaces.small};
    border-top: 1px solid ${theme.colors.secondary};
  `}
`
