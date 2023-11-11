import styled, { css } from 'styled-components'

export const CheckboxDropdownWrapper = styled.div.attrs({
  className: 'CheckboxDropdown__Wrapper'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spaces.xsmall};
    min-height: ${theme.spaces.medium};
    select {
      font-size: ${theme.font.placeholder.size.desktop};
      height: 100%;
    }
  `}
`
export const CheckboxDropdownOptionWraper = styled.div.attrs({
  className: 'CheckboxDropdown__OptionWraper'
})`
  display: flex;
  align-items: center;
`
