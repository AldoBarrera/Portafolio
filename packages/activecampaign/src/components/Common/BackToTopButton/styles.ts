import styled, { css } from 'styled-components'
import { ArrowUpwardOutline } from '@styled-icons/evaicons-outline/ArrowUpwardOutline'

export const BackToTopButtonWrapper = styled.div.attrs({
  className: 'BackToTopButton__Wrapper'
})`
  margin-top: -178px;
  background-image: url('/img/Common/back-to-top-button-0.svg');
  width: 199px;
  height: 178px;
  position: absolute;
  right: 0;
`

export const BackToTopButton = styled.div.attrs({
  className: 'BackToTopButton'
})`
  cursor: pointer;
  width: 51px;
  height: 51px;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem !important;
`

export const ArrowUpwardOutlineIcon = styled(ArrowUpwardOutline).attrs({
  className: 'Icon__ArrowUpwardOutline'
})`
  ${({ theme }) => css`
    width: ${theme.spaces.medium};
  `}
`

export const StorybookContainer = styled.div.attrs({
  className: 'BackToTopButton'
})`
  padding-top: 178px;
`
