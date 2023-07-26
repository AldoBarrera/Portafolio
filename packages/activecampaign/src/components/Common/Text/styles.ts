import styled, { css, DefaultTheme } from 'styled-components'
import { TextProps } from '.'
import media from 'styled-media-query'

const setStyleRules = (
  elType: string,
  theme: DefaultTheme,
  color = 'black'
) => {
  return css`
    ${theme.font[elType].family && `font-family: ${theme.font[elType].family};`}
    font-style: ${theme.font[elType].style.desktop};
    font-weight: ${theme.font[elType].weight.desktop};
    font-size: ${theme.font[elType].size.desktop};
    line-height: ${theme.font[elType].lineHeight.desktop};
    ${theme.font[elType].letterSpacing &&
    `letter-spacing: ${theme.font[elType].letterSpacing.desktop};`}
    color: ${theme.colors[color]};
    margin-bottom: ${theme.font[elType].margin?.desktop};
    ${media.lessThan('medium')`
      font-style: ${theme.font[elType].style.mobile};
      font-weight: ${theme.font[elType].weight.mobile};
      font-size: ${theme.font[elType].size.mobile};
      line-height: ${theme.font[elType].lineHeight.mobile};
      margin-bottom: ${theme.font[elType].margin?.mobile};
      ${
        theme.font[elType].letterSpacing &&
        `letter-spacing: ${theme.font[elType].letterSpacing.mobile};`
      }
    `}
  `
}

const headingCommonStyles = `
  font-family: Roboto;
`

export const H1 = styled.h1.attrs({
  className: 'Text__H1'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('h1', theme, color)}
  `}
`

export const H2 = styled.h2.attrs({
  className: 'Text__H2'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('h2', theme, color)}
  `}
`

export const H3 = styled.h3.attrs({
  className: 'Text__H3'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('h3', theme, color)}
  `}
`

export const H4 = styled.h4.attrs({
  className: 'Text__H4'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('h4', theme, color)}
  `}
`

export const H5 = styled.h5.attrs({
  className: 'Text__H5'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('h5', theme, color)}
  `}
`

export const H6 = styled.h6.attrs({
  className: 'Text__H6'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('h6', theme, color)}
  `}
`

const paragraphCommonStyles = `
  font-family: Nunito;
`

export const P = styled.p.attrs({
  className: 'Text__P'
})`
  ${({ color, theme }) => css`
    white-space: pre-line;
    ${paragraphCommonStyles}
    ${setStyleRules('p', theme, color)}
  `}
`

export const PHero = styled.p.attrs({
  className: 'Text__PHero'
})`
  ${({ color, theme }) => css`
    white-space: pre-line;
    ${paragraphCommonStyles}
    ${setStyleRules('pHero', theme, color)}
  `}
`

export const Placeholder = styled.p.attrs({
  className: 'Text__Placeholder'
})`
  ${({ color, theme }) => css`
    ${setStyleRules('placeholder', theme, color)}
  `}
`

export const CTA = styled.span.attrs({
  className: 'Text__CTA'
})`
  ${({ color, theme }) => css`
    ${setStyleRules('cta', theme, color)}
  `}
`

export const bSmall = styled.p.attrs({
  className: 'Text__button'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('bSmall', theme, color)}
  `}
`

export const bMedium = styled.p.attrs({
  className: 'Text__button'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('bMedium', theme, color)}
  `}
`

export const bLarge = styled.p.attrs({
  className: 'Text__button'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('bLarge', theme, color)}
  `}
`

export const bHuge = styled.p.attrs({
  className: 'Text__button'
})`
  ${({ color, theme }) => css`
    ${headingCommonStyles}
    ${setStyleRules('bHuge', theme, color)}
  `}
`

export const Default = styled.p.attrs({
  className: 'Text'
})<TextProps>`
  ${({
    theme,
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    transform,
    margin
  }) => css`
    white-space: pre-line;
    font-family: ${fontFamily ? fontFamily : 'Roboto'};
    font-size: ${fontSize ? fontSize : '1.6rem'};
    font-style: ${fontStyle ? fontStyle : 'normal'};
    font-weight: ${fontWeight ? fontWeight : 'normal'};
    text-transform: ${transform ? transform : 'inherit'};
    color: ${color ? theme.colors[color] : '#333333'};
    margin: ${margin ? margin : '0'};
  `}
`
