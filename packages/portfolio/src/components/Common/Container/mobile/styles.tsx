import styled, { css } from 'styled-components'
import { ContainerInside } from '../styles'
import { ContainerProps } from '../'

export const ContainerInsideMobile = styled(ContainerInside)<ContainerProps>`
  ${({ theme, fullHeight }) => css`
    padding: ${fullHeight ? '0' : `${theme.spaces.large} 0;`};
  `}
`
