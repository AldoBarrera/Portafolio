import styled, { css } from 'styled-components'
export const RecaptchaWrapper = styled.div.attrs({
  className: 'Recaptcha__Wrapper'
})`
  ${({ theme }) => css`
    p {
      margin-top: ${theme.spaces.tiny};
    }
  `}
`
