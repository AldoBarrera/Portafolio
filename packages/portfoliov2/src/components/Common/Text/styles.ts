import styled, { css, DefaultTheme } from 'styled-components'
import { TextProps } from './textDef'
import media from 'styled-media-query'

const setStyleRules = (
  elType: keyof typeof theme.font,
  theme: DefaultTheme,
  color: keyof typeof theme.colors = 'black'
) => {
  return css`
    font-style: ${theme.font[elType].style.desktop};
    font-weight: ${theme.font[elType].weight.desktop};
    font-size: ${theme.font[elType].size.desktop};
    line-height: ${theme.font[elType].lineHeight.desktop};
    color: ${theme.colors[color]};
    margin-bottom: ${theme.font[elType].margin?.desktop};
    ${media.lessThan('large')`
      font-style: ${theme.font[elType].style.tablet};
      font-weight: ${theme.font[elType].weight.tablet};
      font-size: ${theme.font[elType].size.tablet};
      line-height: ${theme.font[elType].lineHeight.tablet};
      margin-bottom: ${theme.font[elType].margin?.tablet};
    `}
    ${media.lessThan('medium')`
      font-style: ${theme.font[elType].style.mobile};
      font-weight: ${theme.font[elType].weight.mobile};
      font-size: ${theme.font[elType].size.mobile};
      line-height: ${theme.font[elType].lineHeight.mobile};
      margin-bottom: ${theme.font[elType].margin?.mobile};
    `}
  `
}

const headingCommonStyles = `
  font-family: Manrope;
`

export const H1 = styled.h1.attrs({
  className: 'Text__H1'
})<Pick<TextProps, 'color' | 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h1', theme, color)}
  `}
`

export const ClassH1 = styled.p.attrs({
  className: 'Text__ClassH1'
})<Pick<TextProps, 'color' | 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h1', theme, color)}
  `}
`

export const H2 = styled.h2.attrs({
  className: 'Text__H2'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h2', theme, color)}
  `}
`

export const ClassH2 = styled.p.attrs({
  className: 'Text__ClassH2'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h2', theme, color)}
  `}
`
export const ClassH3 = styled.p.attrs({
  className: 'Text__ClassH3'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h3', theme, color)}
  `}
`

export const ClassH4 = styled.p.attrs({
  className: 'Text__ClassH4'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h4', theme, color)}
  `}
`

export const ClassH5 = styled.p.attrs({
  className: 'Text__ClassH5'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h5', theme, color)}
  `}
`

export const H3 = styled.h3.attrs({
  className: 'Text__H3'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h3', theme, color)}
  `}
`

export const H4 = styled.h4.attrs({
  className: 'Text__H4'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h4', theme, color)}
  `}
`

export const H5 = styled.h5.attrs({
  className: 'Text__H5'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h5', theme, color)}
  `}
`

export const H6 = styled.h6.attrs({
  className: 'Text__H6'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('h6', theme, color)}
  `}
`

const paragraphCommonStyles = `
  font-family: Nunito;
`

export const P = styled.p.attrs({
  className: 'Text__P'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    white-space: pre-line;
    ${paragraphCommonStyles}
    ${setStyleRules('p', theme, color)}
  `}
`

export const PHero = styled.p.attrs({
  className: 'Text__PHero'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    white-space: pre-line;
    ${paragraphCommonStyles}
    ${setStyleRules('pHero', theme, color)}
  `}
`

export const Placeholder = styled.p.attrs({
  className: 'Text__Placeholder'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${setStyleRules('placeholder', theme, color)}
  `}
`

export const CTA = styled.span.attrs({
  className: 'Text__CTA'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${setStyleRules('cta', theme, color)}
  `}
`

export const bSmall = styled.p.attrs({
  className: 'Text__button'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('bSmall', theme, color)}
  `}
`

export const bMedium = styled.p.attrs({
  className: 'Text__button'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('bMedium', theme, color)}
  `}
`

export const bLarge = styled.p.attrs({
  className: 'Text__button'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    ${headingCommonStyles}
    ${setStyleRules('bLarge', theme, color)}
  `}
`

export const bHuge = styled.p.attrs({
  className: 'Text__button'
})<Pick<TextProps, 'color' | 'colorSecondaryText'>>`
  ${({ color, theme, colorSecondaryText }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
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
    lineHeight,
    transform,
    margin,
    colorSecondaryText
  }) => css`
    ${colorSecondaryText && css`
      span {
        color: ${theme.colors[colorSecondaryText]};
      }
    `}
    white-space: pre-line;
    font-family: ${fontFamily ? fontFamily : 'Nunito'};
    font-size: ${fontSize ? fontSize : '1.6rem'};
    font-style: ${fontStyle ? fontStyle : 'normal'};
    font-weight: ${fontWeight ? fontWeight : 'normal'};
    text-transform: ${transform ? transform : 'inherit'};
    color: ${color ? theme.colors[color] : '#333333'};
    line-height: ${lineHeight ? lineHeight : ''};
    margin: ${margin ? margin : '0'};
  `}
`
