import styled, { css } from 'styled-components'

export const RadioWrapper = styled.div.attrs({
  className: 'Radio__Wrapper'
})`
  ${({ theme }) => css`
    flex: 1 1 auto;
    margin-bottom: ${theme.spaces.xsmall};
    .Checkbox__span {
      border-radius: 50%;
      background-color: ${theme.colors.secondary};
    }
    .Checkbox__span:after {
      top: ${theme.spaces.xxtiny};
      left: 3px;
      width: ${theme.spaces.tiny};
      height: ${theme.spaces.tiny};
      border-radius: 50%;
      background: ${theme.colors.redPrimary};
    }
    .Checkbox__Wrapper > input:checked ~ .Checkbox__span {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.secondary};
      border: 2px solid ${theme.colors.redPrimary};
    }
  `}
`
