import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const CountryFieldWrapper = styled.div.attrs({
  className: 'CountryField__Wrapper'
})`
  ${({ theme }) => css`
    #country-value-select {
      font-family: 'Nunito';
      font-style: italic;
      font-size: ${theme.font.h4.size.desktop};
      color: ${theme.colors.mediumDarkGray};
      background-color: ${theme.colors.gray4};
      ${media.lessThan('medium')`
        font-size: ${theme.font.h6.size.mobile};
      `}
    }
    .css-319lph-ValueContainer {
      padding: 0 2.6rem;
    }
  `}
`

export const Error = styled.span.attrs({
  className: 'Input__Error'
})`
  ${({ theme }) => css`
    top: 64px;
    display: block;
    color: ${theme.colors.red};
  `}
`
