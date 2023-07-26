import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { ContainerProps } from '.'

export const ContainerInside = styled.div.attrs({
  className: 'Container'
})<ContainerProps>`
  ${({ theme, fullHeight, fullHeightMobile, fullsize }) => css`
    width: 100%;
    max-width: ${fullsize ? '192rem' : '192rem'};
    padding: ${theme.spaces.xlarge} 0;
    padding: ${fullHeight ? '0 0' : `${theme.spaces.xlarge} 0`};
    margin: auto;
    ${media.lessThan('medium')`
      padding: ${fullHeightMobile ? '0 0' : `${theme.spaces.large} 0;`};
    `}
  `}
`

export const WrapperContainer = styled.div.attrs({
  className: 'Wrapper_Container'
})<ContainerProps>`
  ${({ theme, withoutBorder, fullWidth, fullWidthMobile }) => css`
    border-bottom: ${withoutBorder
      ? 'none'
      : `1px solid ${theme.colors.darkGray}`};
    @media (max-width: 1920px) {
      padding: ${fullWidth ? '0 0' : `0 ${theme.spaces.large}`};
    }
    ${media.lessThan('medium')`
      padding: ${fullWidthMobile ? '0 0' : `0 ${theme.spaces.xsmall}`};
    `}
    width: 100%;
  `}
`
