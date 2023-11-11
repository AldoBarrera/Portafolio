import styled, { css } from 'styled-components'

export const CheckboxDropdownGroupWrapper = styled.div.attrs({
  className: 'CheckboxDropdownGroup__Wrapper'
})``

export const Error = styled.span.attrs({
  className: 'Select__Error'
})`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.red};
  `}
`
