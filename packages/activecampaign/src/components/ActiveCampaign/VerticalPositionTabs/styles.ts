import styled, { css } from 'styled-components'
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'
import { Search } from '@styled-icons/bootstrap/Search'
import { Close } from '@styled-icons/evil/Close'
import { InputHTMLAttributes } from 'react'

export const VerticalPositionTabsWrapper = styled.div.attrs({
  className: 'VerticalPositionTabs__Wrapper'
})`
  ${({ theme }) => css`
    .rc-tabs-ink-bar,
    .rc-tabs-nav-operations {
      display: none;
    }

    .rc-tabs-left {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      max-width: 100%;
    }

    .rc-tabs-nav {
      grid-column-end: span 5;
      height: 700px;
      overflow: auto;
    }

    .rc-tabs-content-holder {
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr));
      grid-column-end: span 7;
      grid-gap: ${theme.spaces.xsmall};
      width: 100%;
      max-height: 100%;
      background: ${theme.colors.lightGray};
    }

    .rc-tabs-content-left {
      grid-column: 2 / span 7 !important;
    }

    .rc-tabs-tab {
      cursor: pointer;
      padding: ${theme.spaces.small} ${theme.spaces.small} ${theme.spaces.small}
        90px;
    }

    .rc-tabs-tab-active {
      background: ${theme.colors.lightGray};
      .Icon__Arrow {
        display: unset;
      }
    }
    .rc-tabs-tab-disabled {
      padding-bottom: 0;
      padding-top: 0;
    }
    .search-input {
      padding: ${theme.spaces.small} ${theme.spaces.small} 0 90px;
    }
    .empty-box {
      background: ${theme.colors.lightGray};
      height: 100%;
    }

    .empty-box-white {
      height: 100%;
      border-left: 1px solid ${theme.colors.darkGray};
    }
  `}
`

export const VerticalTabHeader = styled.div.attrs({
  className: 'VerticalPositionTabs__Header'
})`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: ${theme.spaces.large} 1.9fr 0.2fr;
    gap: ${theme.spaces.medium};
    .Icon__Arrow {
      display: none;
    }
    .Text__P {
      margin-block: auto;
    }
  `}
`
export const VerticalTabHeadersWrapper = styled.div.attrs({
  className: 'VerticalPositionTabs__HeadersWrapper'
})``

export const VerticalTabIcon = styled.div.attrs({
  className: 'VerticalPositionTabs__Icon'
})`
  ${({ theme }) => css`
    margin: auto;
    width: ${theme.spaces.large};
    height: ${theme.spaces.large};
  `}
`

export const Arrow = styled(ArrowIosForwardOutline).attrs({
  className: 'Icon__Arrow'
})`
  ${({ theme }) => css`
    width: ${theme.spaces.medium};
    color: ${theme.colors.redPrimary};
    padding: 0;
    margin: auto;
  `}
`

export const VerticalTabContent = styled.div.attrs({
  className: 'VerticalPositionTabs__Content'
})``
export const VerticalTabItems = styled.div.attrs({
  className: 'VerticalPositionTabs__Items'
})`
  ${({ theme }) => css`
    padding: 0 ${theme.spaces.large} ${theme.spaces.xlarge} 0;
  `}
`

export const VerticalTabInformation = styled.div.attrs({
  className: 'VerticalPositionTabs__Information'
})`
  ${({ theme }) => css`
    :not(:last-child) {
      margin-bottom: ${theme.spaces.medium};
      padding-bottom: ${theme.spaces.medium};
      border-bottom: 1px solid ${theme.colors.mediumDarkGray2};
    }
  `}
`

export const ListItems = styled.div.attrs({
  className: 'List__Items'
})`
  ${({ theme }) => css`
    ul {
      list-style-position: outside;
      margin-left: 25px;
      li {
        :not(:last-child) {
          margin-bottom: ${theme.spaces.xtiny};
        }
        :last-child {
          margin-bottom: 0;
        }
      }
    }
    p {
      :not(:last-child) {
        margin-bottom: ${theme.spaces.xtiny};
      }
      :last-child {
        margin-bottom: 0;
      }
    }
  `}
`

export const VerticalTabApplyContent = styled.div.attrs({
  className: 'VerticalPositionTabs__ApplyContent'
})`
  ${({ theme }) => css`
    padding: 0 ${theme.spaces.large} ${theme.spaces.xlarge} 0;
    margin-top: -${theme.spaces.large};
  `}
`

export const VerticalTabBackButton = styled.div.attrs({
  className: 'VerticalPositionTabs__BackButton'
})`
  ${({ theme }) => css`
    margin-bottom: ${theme.spaces.small};
    display: flex;
    justify-content: flex-end;
  `}
`

export const VerticalTabIframe = styled.iframe.attrs({
  className: 'VerticalPositionTabs__Iframe'
})`
  width: 100%;
  height: 1300px;
`

export const SearchInputWrapper = styled.div.attrs({
  className: 'VerticalPositionTabs__SearchInputWrapper'
})`
  position: relative;
  display: inline-flex;
  width: 90%;
  .Select__Wrapper {
    width: 100%;
  }
`

export const SearchInput = styled.input.attrs({
  className: 'VerticalPositionTabs__SearchInput'
})`
  ${({ theme }) => css`
    margin: 0;
    flex: 1 0 auto;
    outline: 0;
    text-align: left;
    padding: ${theme.spaces.xxsmall};
    border: 1px solid ${theme.colors.gray5};
    height: ${theme.spaces.large};
    font-size: 1.6rem;
    color: ${theme.colors.gray5};
    border-radius: ${theme.spaces.xxtiny};
  `}
`

export const IconInputSearch = styled(Search).attrs({
  className: 'Icon__Search'
})`
  ${({ theme }) => css`
    cursor: default;
    position: absolute;
    line-height: 1;
    text-align: center;
    top: 0;
    right: 0;
    margin: 0;
    height: 100%;
    width: ${theme.spaces.medium};
    opacity: 0.5;
    padding: ${theme.spaces.xxsmall};
  `}
`

export const IconInputSearchClose = styled(Close).attrs({
  className: 'Icon__SearchClose'
})`
  ${({ theme }) => css`
    cursor: pointer;
    position: absolute;
    line-height: 1;
    text-align: center;
    top: 0;
    right: ${theme.spaces.xtiny};
    margin: 0;
    height: 100%;
    width: ${theme.spaces.medium};
    opacity: 0.5;
    padding: ${theme.spaces.xxtiny};
  `}
`

export const ResultText = styled.div.attrs({
  className: 'VerticalPositionTabs__ResultText'
})`
  ${({ theme }) => css`
    p {
      padding: ${theme.spaces.xxsmall} 0 ${theme.spaces.small}
        ${theme.spaces.xxsmall};
    }
    .empty-space {
      padding-top: ${theme.spaces.small};
    }
  `}
`

export const TagContainer = styled.div.attrs({
  className: 'Article__TagContainer'
})`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spaces.xxtiny};
    flex-wrap: wrap;
  `}
`

export const Input = styled.input.attrs({
  className: 'Input'
})<InputHTMLAttributes<HTMLInputElement>>`
  ${({ theme }) => css`
    width: 150px;
    height: 30px;
    padding: 1rem 2.6rem;
    border: none;
    border-radius: 4px;
    font-family: 'Nunito';
    color: #000000;
    background-color: ${theme.colors.gray4};

    &::placeholder {
      color: currentColor;
      font-style: italic;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.gray4} inset !important;
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: ${theme.colors.mediumDarkGray} !important;
    }
  `}
`

export const AddNewTag = styled.div.attrs({
  className: 'VerticalPositionTabs__AddNewTag'
})`
  ${() => css`
    position: relative;
  `}
`

export const Listbox = styled.div.attrs({
  className: 'VerticalPositionTabs__Listbox'
})`
  ${() => css`
    background-color: white;
    position: absolute;
    top: 100%;
    left: 0px;
    z-index: 100;
    display: block;
    border: 1px solid #cacaca;
  `}
`

export const ListItem = styled.div.attrs({
  className: 'VerticalPositionTabs__ListItem'
})`
  ${() => css`
    padding: 5px 10px;
    cursor: pointer;
    color: #4e4e4e;
    border-bottom: 1px solid #ced3e0;
  `}
`
