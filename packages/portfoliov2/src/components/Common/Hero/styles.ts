import styled, { css } from 'styled-components'
import { HeroProps } from 'components/Common/Hero'
import { TextProps } from 'components/Common/Text'
import media from 'styled-media-query'

export type ContentLeftProps = {
  isCenter?: boolean
  titleProperties?: TextProps
}

export type ButtonGroupsProps = {
  hasParagraph: boolean
  isCenter: boolean
}

export const HeroWrapper = styled.div.attrs({
  className: 'Hero_Wrapper'
})`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.grid.gutter2};
    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
    `}
  `}
`

export const LeftContent = styled.div.attrs({
  className: 'Hero__LeftContent'
})`
  display: flex;
  flex-direction: column;
`
export const LeftComponents = styled.div.attrs({
  className: 'Hero__LeftComponents'
})<
  ContentLeftProps &
    Pick<HeroProps, 'hasSmallBorderOnTop' | 'paddingLeftComponents'>
>`
  ${({
    hasSmallBorderOnTop,
    theme,
    titleProperties,
    paddingLeftComponents
  }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: ${paddingLeftComponents
      ? paddingLeftComponents
      : '30px 0 30px 30px'};
    h1 {
      ${hasSmallBorderOnTop &&
      css`
        &::before {
          position: absolute;
          top: -4px;
          content: '';
          width: 3.5rem;
          height: 0.396rem;
          background-color: ${titleProperties && titleProperties.color
            ? theme.colors[titleProperties.color]
            : theme.colors.redPrimary};
        }
      `}
    }
  `}
`

export const HeroRightContent = styled.div.attrs({
  className: 'Hero__RightContent'
})`
  ${media.lessThan('medium')`
    display: none;
  `}
`

export const AdditionalRightComponent = styled.div.attrs({
  className: 'Hero__AdditionalRightComponent'
})`
  ${({ theme }) => css`
    display: none;
    margin-bottom: ${theme.spaces.small};
    ${media.lessThan('medium')`
      display: block;
    `}
  `}
`
