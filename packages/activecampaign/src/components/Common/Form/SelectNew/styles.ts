import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SelectWrapper = styled.div.attrs({
  className: 'Select__Wrapper'
})`
  position: relative;
  overflow: hidden;
`

export const Select = styled.select.attrs({
  className: 'Select'
})`
  ${({ theme }) => css`
    width: 100%;
    height: 5.6rem;
    padding: 1rem 2.6rem;
    border: none;
    border-radius: 4px;
    font-family: 'Nunito';
    font-size: ${theme.font.sizes.xxlarge};
    font-style: italic;
    color: ${theme.colors.mediumDarkGray};
    background-color: ${theme.colors.gray4};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Option = styled.option.attrs({
  className: 'Select__Option'
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
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

export const IconWrapper = styled.div.attrs({
  className: 'Select__IconWrapper'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: absolute;
    top: 2px;
    right: 0.3rem;
    bottom: 0;
    height: 4.8rem;
    padding-right: 1.6rem;
    background-color: ${theme.colors.gray4};
    pointer-events: none;

    svg {
      color: ${theme.colors.osloGray};
    }
  `}
`
