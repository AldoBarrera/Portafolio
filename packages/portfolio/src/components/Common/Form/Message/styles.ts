import styled, { css } from 'styled-components'

export const MessageWrapper = styled.div.attrs({
  className: 'Message__Wrapper'
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGreen};
    color: ${theme.colors.green};
    position: relative;
    margin: 1em 0;
    padding: 1em 1.5em;
    box-shadow: 0 0 0 1px rgb(34 36 38 / 22%) inset, 0 0 0 0 transparent;
  `}
`

export const IconWrapper = styled.div.attrs({
  className: 'IconWrapper'
})`
  ${({ theme }) => css`
    cursor: pointer;
    position: absolute;
    top: 0.78575em;
    right: 0.5em;
    width: ${theme.spaces.small};
  `}
`
