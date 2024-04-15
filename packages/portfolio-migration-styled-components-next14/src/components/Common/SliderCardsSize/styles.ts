import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { SliderCardsSizeProps } from 'components/Common/SliderCardsSize'

export const SliderCardsSizeWrapper = styled.div.attrs({
  className: 'SliderCardsSize__Wrapper'
})<Pick<SliderCardsSizeProps, 'bgColor'>>`
  ${({ theme, bgColor }) => css`
    ${bgColor && css`
      background-color: ${theme.colors[bgColor]};
    `}
    .Text__H2 {
      padding-top: 5rem;
      span {
        color: ${theme.colors.redPrimary};
      }
    }
  `}
`

export const ContentCardIcon = styled.div.attrs({
  className: 'SliderCardsSize__ContentCardIcon'
})`
  margin: 5rem auto 0;
`

export const SliderCardsSizeInfo = styled.div.attrs({
  className: 'SliderCardsSize__Info'
})`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spaces.large};
    ${media.lessThan('medium')`
      margin-bottom: ${theme.spaces.medium};
    `}
  `}
`
