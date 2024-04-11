import styled, { css } from 'styled-components'
import { ArrowUpCircleFill } from '@styled-icons/bootstrap/ArrowUpCircleFill'

export const BackToTopButtonWrapper = styled.div.attrs({
  className: 'BackToTopButton__Wrapper'
})`
  ${({ theme }) => css`
    margin-top: -${theme.spaces.large};
    width: ${theme.spaces.large};
    height: ${theme.spaces.large};
    cursor: pointer;
    color: ${theme.colors.redPrimary};
    position: absolute;
    right: 0;
  `}
`

export const ArrowUpCircleFillIcon = styled(ArrowUpCircleFill).attrs({
  className: 'Icon__ArrowUpCircleFill'
})`
  ${({ theme }) => css`
    width: ${theme.spaces.medium};
  `}
`
