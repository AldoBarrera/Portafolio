import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Form1Wrapper = styled.div.attrs({
  className: 'ContactUs__Form1Wrapper'
})`
  ${media.greaterThan('large')`
    display: grid;
    grid-gap: 16px;
  `}
`

export const CheckboxGroup = styled.div.attrs({
  className: 'CheckboxGroup'
})`
  ${({ theme }) => css`
    margin-top: ${theme.spaces.tiny};
    display: grid;
    grid-gap: ${theme.spaces.xxsmall};
  `}
`

export const ContactUsForm1Loading = styled.div.attrs({
  className: 'ContactUsForm1_Loading'
})`
  ${() => css`
    min-height: 730px;
    ${media.lessThan('medium')`
      min-height: 800px;
    `}
  `}
`
