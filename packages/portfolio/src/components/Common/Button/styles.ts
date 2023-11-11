import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { variantsModifiers } from './variantsModifiers'
import { variantTypes } from './variantsModifiers'

import { ButtonProps } from '.'

export type ButtonWrapperProps = {
  hasIcon: boolean
} & Pick<
  ButtonProps,
  | 'fullWidth'
  | 'size'
  | 'color'
  | 'variant'
  | 'hasUrl'
  | 'variantMobile'
  | 'fullWidthMobile'
  | 'customButtonColor'
  | 'customButtonColorHover'
  | 'customButtonVariant'
  | 'customButtonVariantHover'
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
    hasIcon,
    size,
    variant,
    hasUrl = 'true',
    variantMobile,
    fullWidthMobile,
    customButtonColor,
    customButtonColorHover,
    customButtonVariant,
    customButtonVariantHover,
    sizeMobile
  }) => css`
    display: inline-flex;
    gap: ${theme.spaces.xxtiny};
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: ${hasUrl ? 'pointer' : 'default'};
    ${!!size && buttonModifiers[size](theme)}
    ${sizeMobile && buttonModifiers.sizeMobile(theme, sizeMobile)}
    ${fullWidth && buttonModifiers.fullWidth()}
    ${fullWidthMobile && buttonModifiers.fullWidthMobile()}
    ${!!hasIcon && buttonModifiers.hasIcon(theme)}
    ${variant && variantsModifiers[variant](theme)}
    ${variantMobile && buttonModifiers.variantMobile(theme, variantMobile)}
    ${customButtonColor &&
    variantsModifiers.customButtonColor(theme, customButtonColor)}
    ${customButtonColorHover &&
    variantsModifiers.customButtonColorHover(theme, customButtonColorHover)}
    ${customButtonVariant &&
    variantsModifiers.customButtonVariant(theme, customButtonVariant)}
    ${customButtonVariantHover &&
    variantsModifiers.customButtonVariantHover(theme, customButtonVariantHover)}
  `}
`
