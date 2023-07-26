import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { variantsModifiers } from './variantsModifiers'
import { variantTypes } from './variantsModifiers'

import { ButtonProps } from '.'

export type ButtonWrapperProps = {
  hasIcon: boolean
  isPrimary: boolean
  isSecondary: boolean
  isBasic: boolean
  isLink: boolean
  isDarkGray: boolean
  isBlack: boolean
} & Pick<
  ButtonProps,
  | 'fullWidth'
  | 'minimal'
  | 'size'
  | 'circular'
  | 'color'
  | 'variant'
  | 'hasUrl'
  | 'padding'
  | 'withoutBorder'
  | 'backgroundColor'
  | 'textColor'
  | 'borderColor'
  | 'variantMobile'
  | 'fullWidthMobile'
  | 'customButtonColor'
  | 'customButtonColorHover'
  | 'sizeMobile'
>

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.bSmall.size.desktop};
    line-height: ${theme.font.bSmall.lineHeight.desktop};
    padding: 0 16px;
    font-weight: ${theme.font.bSmall.weight.desktop};
    ${buttonModifiers.borderRadius(theme, 'xxtiny')};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.bMedium.size.desktop};
    line-height: ${theme.font.bMedium.lineHeight.desktop};
    padding: ${theme.spaces.xtiny} ${theme.spaces.small};
    font-weight: ${theme.font.bMedium.weight.desktop};
    ${buttonModifiers.borderRadius(theme, 'xxtiny')};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.bLarge.size.desktop};
    line-height: ${theme.font.bLarge.lineHeight.desktop};
    padding: ${theme.spaces.xtiny} ${theme.spaces.medium};
    font-weight: ${theme.font.bMedium.weight.desktop};
    ${buttonModifiers.borderRadius(theme, 'xtiny')};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.bHuge.size.desktop};
    line-height: ${theme.font.bHuge.lineHeight.desktop};
    padding: 16px ${theme.spaces.large};
    font-weight: ${theme.font.bHuge.weight.desktop};
    ${buttonModifiers.borderRadius(theme, 'xtiny')};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  fullWidthMobile: () => css`
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `,
  hasIcon: (theme: DefaultTheme) => css`
    svg {
      width: 4.5rem;

      & + span {
        margin-left: ${theme.spaces.xsmall};
      }

      & + p {
        margin-left: ${theme.spaces.xsmall};
      }
    }
  `,
  withoutBorder: () => css`
    border: 0;
  `,
  isLink: (theme: DefaultTheme) => css`
    padding: 0;
    font-weight: 700;
    background-color: transparent;
    color: ${theme.colors.primary};

    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  `,
  circular: (theme: DefaultTheme) => css`
    border-radius: ${theme.spacings.xxxlarge};
    padding: ${theme.spacings.xxsmall} 2rem;
  `,
  borderRadius: (theme: DefaultTheme, size: keyof typeof theme.spaces) => css`
    border-radius: ${size ? theme.spaces[size] : theme.spaces.xxtiny};
  `,
  variantMobile: (theme: DefaultTheme, variant: variantTypes) => css`
    ${media.lessThan('medium')`
      ${variantsModifiers[variant](theme)};
    `}
  `,
  sizeMobile: (
    theme: DefaultTheme,
    size: 'small' | 'medium' | 'large' | 'huge'
  ) => css`
    ${media.lessThan('medium')`
      ${buttonModifiers[size](theme)};
    `}
  `
}
export const ButtonWrapper = styled.button.attrs({
  className: 'Button'
})<ButtonWrapperProps>`
  ${({
    theme,
    fullWidth,
    minimal,
    hasIcon,
    size,
    isPrimary,
    isSecondary,
    isLink,
    isBasic,
    isDarkGray,
    isBlack,
    circular,
    backgroundColor,
    textColor,
    borderColor,
    variant,
    hasUrl = 'true',
    padding,
    withoutBorder,
    variantMobile,
    fullWidthMobile,
    customButtonColor,
    customButtonColorHover,
    sizeMobile
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${padding ? padding : theme.spacings.xxsmall};
    text-decoration: none;
    border: 0;
    border-radius: ${theme.border.radius1};
    background-color: ${theme.colors.redPrimary};
    color: ${theme.colors.white};
    cursor: ${hasUrl ? 'pointer' : 'default'};
    transition: ${theme.transition.fast};
    ${!!size && buttonModifiers[size](theme)}
    ${sizeMobile && buttonModifiers.sizeMobile(theme, sizeMobile)}
    ${fullWidth && buttonModifiers.fullWidth()}
    ${fullWidthMobile && buttonModifiers.fullWidthMobile()}
    ${!!hasIcon && buttonModifiers.hasIcon(theme)}
    ${!!isLink && buttonModifiers.isLink(theme)}
    ${circular && buttonModifiers.circular(theme)}
    ${withoutBorder && buttonModifiers.withoutBorder()}
    ${!!isPrimary && variantsModifiers.isPrimary(theme)}
    ${!!isSecondary && variantsModifiers.isSecondary(theme)}
    ${!!isBasic && variantsModifiers.isBasic(theme)}
    ${!!isDarkGray && variantsModifiers.isDarkGray(theme)}
    ${!!isBlack && variantsModifiers.isBlack(theme)}
    ${minimal && variantsModifiers.minimal(theme)}
    ${variant && variantsModifiers[variant](theme)}
    ${backgroundColor &&
    variantsModifiers.backgroundColor(theme, backgroundColor)}
    ${textColor && variantsModifiers.textColor(theme, textColor)}
    ${borderColor && variantsModifiers.borderColor(theme, borderColor)}
    ${customButtonColor &&
    variantsModifiers.customButtonColor(theme, customButtonColor)}
    ${customButtonColorHover &&
    variantsModifiers.customButtonColorHover(theme, customButtonColorHover)}
    ${variantMobile && buttonModifiers.variantMobile(theme, variantMobile)}
  `}
`
