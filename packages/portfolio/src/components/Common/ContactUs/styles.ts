import styled, { css } from 'styled-components'

export const ContactUsSectionWrapper = styled.div.attrs({
  className: 'ContactUsSection__Wrapper'
})`
  max-width: 800px;
  margin: auto;
`

export const ContactUsHeaderWrapper = styled.div.attrs({
  className: 'ContactUsHeader__Wrapper'
})`
  ${({ theme }) => css`
    padding-bottom: ${theme.spaces.large};
  `}
`
