import styled, { css } from 'styled-components'
import { ContainerProps } from './ContainerDef'

export const WrapperContainer = styled.div.attrs({
  className: 'Container_WrapperContainer'
})<ContainerProps>`
  ${({ theme, withoutBorder, fullWidth }) => css`
    width: 100%;
    border-bottom: ${withoutBorder
      ? 'none'
      : `1px solid ${theme.colors.darkGray}`};
    @media (max-width: 1920px) {
      padding: ${fullWidth ? '0' : `0 ${theme.spaces.large}`};
    }
  `}
`

export const ContainerInside = styled.div.attrs({
  className: 'Container'
})<ContainerProps>`
  ${() => css`
    width: 100%;
    margin: auto;
    max-width: 192rem;
  `}
`

export const ContainerInsideDesktop = styled(ContainerInside)<ContainerProps>`
  ${({ theme, fullHeight }) => css`
    padding: ${fullHeight ? '0' : `${theme.spaces.xlarge} 0`};
  `}
`
