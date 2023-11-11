import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { StrictCheckboxProps } from '.'

export const CheckboxWrapper = styled.label.attrs({
  className: 'Checkbox__Wrapper'
})`
  ${({ theme }) => css`
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* When the checkbox is checked, add a blue background */
    & > input:checked ~ .Checkbox__span {
      background-color: ${theme.colors.redPrimary};
      color: ${theme.colors.secondary};
    }
    /* Show the checkmark when checked */
    & > input:checked ~ .Checkbox__span:after {
      display: block;
    }
  `}
`

export const Input = styled.input.attrs({
  className: 'Input'
})<InputHTMLAttributes<HTMLInputElement>>`
  ${() => css`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  `}
`

export const Label = styled.div.attrs({
  className: 'Checkbox__label'
})<StrictCheckboxProps>`
  ${({ fontWeightLabel, textTransformLabel }) => css`
    display: flex;
    font-weight: ${fontWeightLabel};
    text-transform: ${textTransformLabel};
  `}
`

export const Span = styled.span.attrs({
  className: 'Checkbox__span'
})<StrictCheckboxProps>`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid ${theme.colors.black};
    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
      content: '';
      position: absolute;
      display: none;
    }
    &:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: ${theme.spaces.xxsmall};
      border: solid ${theme.colors.secondary};
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  `}
`

export const Error = styled.span.attrs({
  className: 'Select__Error'
})`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.red};
  `}
`
