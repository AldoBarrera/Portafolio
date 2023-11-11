import { css, DefaultTheme } from 'styled-components'
import { darken, lighten, opacify, rgba } from 'polished'
import theme from 'styles/theme'

export type customVariantType = {
  backgroundColor?: keyof typeof theme.colors
  textColor?: keyof typeof theme.colors
  borderColor?: keyof typeof theme.colors
  variant?: variantTypes
}
export type variantTypes =
  | 'isPrimary'
  | 'isPrimaryDarkerHover'
  | 'isPrimaryNormal'
  | 'isPrimaryHover'
  | 'isPrimaryActive'
  | 'isPrimaryFocus'
  | 'isPrimaryDisabled'
  | 'isSecondary'
  | 'isSecondaryNormal'
  | 'isSecondaryHover'
  | 'isSecondaryActive'
  | 'isSecondaryFocus'
  | 'isTerceary'
  | 'isTercearyNormal'
  | 'isTercearyHover'
  | 'isTercearyActive'
  | 'isQuaternary'
  | 'isQuaternaryNormal'
  | 'isQuaternaryActive'
  | 'isOutlinePrimary'
  | 'isOutlineSecondary'
  | 'isOutlineSecondaryActive'
  | 'isOutlineTerceary'
  | 'isOutlineTercearyNormal'
  | 'isOutlineTercearyActive'
  | 'isOutlineTercearyFocus'
  | 'isOutlineQuaternary'
  | 'isOutlineQuaternaryNormal'
  | 'isBasic'
  | 'isDarkGray'
  | 'isBlack'
  | 'isSocial'
  | 'isNavBasic'
  | 'customButtonColor'
  | 'tag'
  | 'tag2'
  | 'isMinimalPrimary'
  | 'isMinimalQuaternary'

export const variantsModifiers = {
  isPrimary: (theme: DefaultTheme) => css`
    ${variantsModifiers.isPrimaryNormal(theme)};
    &:hover {
      ${variantsModifiers.isPrimaryHover(theme)};
    }
    &:active {
      ${variantsModifiers.isPrimaryActive(theme)};
    }
    &:focus {
      ${variantsModifiers.isPrimaryFocus(theme)};
      outline: none;
    }
    &:disabled {
      ${variantsModifiers.isPrimaryDisabled(theme)};
      cursor: default;
    }
  `,
  isPrimaryDarkerHover: (theme: DefaultTheme) => css`
    ${variantsModifiers.isPrimaryNormal(theme)};
    &:hover {
      ${variantsModifiers.darkerBackgroundColor(theme, 'redPrimary', 0.1)};
    }
  `,
  isPrimaryNormal: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'redPrimary')};
    ${variantsModifiers.textColor(theme, 'secondary')};
    ${variantsModifiers.borderColor(theme, 'redPrimary')};
  `,
  isPrimaryHover: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'transparent')};
    ${variantsModifiers.textColor(theme, 'redPrimary')};
    ${variantsModifiers.borderColor(theme, 'redPrimary')};
  `,
  isPrimaryActive: (theme: DefaultTheme) => css`
    ${variantsModifiers.opacityBackgroundColor(theme, 'redPrimary', 0.2)};
    ${variantsModifiers.textColor(theme, 'redPrimary')};
    ${variantsModifiers.borderColor(theme, 'redPrimary')};
  `,
  isPrimaryFocus: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'secondary')};
    ${variantsModifiers.textColor(theme, 'redPrimary')};
    ${variantsModifiers.borderColor(theme, 'redPrimary')};
  `,
  isPrimaryDisabled: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'lightGray2')};
    ${variantsModifiers.textColor(theme, 'mediumDarkGray2')};
    ${variantsModifiers.borderColor(theme, 'mediumDarkGray2')};
  `,
  isSecondary: (theme: DefaultTheme) => css`
    ${variantsModifiers.isSecondaryNormal(theme)};
    &:hover {
      ${variantsModifiers.isSecondaryHover(theme)};
    }
    &:active {
      ${variantsModifiers.isSecondaryActive(theme)};
    }
    &:focus {
      ${variantsModifiers.isSecondaryFocus(theme)};
      outline: none;
    }
    &:disabled {
      ${variantsModifiers.isPrimaryDisabled(theme)};
      cursor: default;
    }
  `,
  isSecondaryNormal: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'black2')};
    ${variantsModifiers.textColor(theme, 'secondary')};
    ${variantsModifiers.borderColor(theme, 'black2')};
  `,
  isSecondaryHover: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'transparent')};
    ${variantsModifiers.textColor(theme, 'black2')};
    ${variantsModifiers.borderColor(theme, 'black2')};
  `,
  isSecondaryActive: (theme: DefaultTheme) => css`
    ${variantsModifiers.opacityBackgroundColor(theme, 'black2', 0.2)};
    ${variantsModifiers.textColor(theme, 'black2')};
    ${variantsModifiers.borderColor(theme, 'black2')};
  `,
  isSecondaryFocus: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'secondary')};
    ${variantsModifiers.textColor(theme, 'black2')};
    ${variantsModifiers.borderColor(theme, 'black2')};
  `,
  isTerceary: (theme: DefaultTheme) => css`
    ${variantsModifiers.isTercearyNormal(theme)};
    &:hover {
      ${variantsModifiers.isTercearyHover(theme)};
    }
    &:active {
      ${variantsModifiers.isTercearyActive(theme)};
    }
    &:focus {
      ${variantsModifiers.isSecondaryFocus(theme)};
      outline: none;
    }
    &:disabled {
      ${variantsModifiers.isPrimaryDisabled(theme)};
      cursor: default;
    }
  `,
  isTercearyNormal: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'gray4')};
    ${variantsModifiers.textColor(theme, 'black2')};
    ${variantsModifiers.borderColor(theme, 'gray4')};
  `,
  isTercearyHover: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'transparent')};
    ${variantsModifiers.borderColor(theme, 'gray4')};
  `,
  isTercearyActive: (theme: DefaultTheme) => css`
    ${variantsModifiers.opacityBackgroundColor(theme, 'gray4', 0.3)};
    ${variantsModifiers.borderColor(theme, 'gray4')};
  `,
  isQuaternary: (theme: DefaultTheme) => css`
    ${variantsModifiers.isQuaternaryNormal(theme)};
    &:hover {
      ${variantsModifiers.isPrimaryNormal(theme)};
    }
    &:active {
      ${variantsModifiers.isQuaternaryActive(theme)};
    }
    &:focus {
      ${variantsModifiers.isPrimaryFocus(theme)};
      outline: none;
    }
    &:disabled {
      ${variantsModifiers.isPrimaryDisabled(theme)};
      cursor: default;
    }
  `,
  isQuaternaryNormal: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'secondary')};
    ${variantsModifiers.textColor(theme, 'redPrimary')};
    ${variantsModifiers.borderColor(theme, 'secondary')};
  `,
  isQuaternaryActive: (theme: DefaultTheme) => css`
    ${variantsModifiers.darkerBackgroundColor(theme, 'redPrimary', 0.2)};
    ${variantsModifiers.textColor(theme, 'secondary')};
  `,
  isOutlinePrimary: (theme: DefaultTheme) => css`
    ${variantsModifiers.isPrimaryHover(theme)};
    &:hover {
      ${variantsModifiers.isPrimaryNormal(theme)};
    }
    &:active {
      ${variantsModifiers.isQuaternaryActive(theme)};
    }
    &:focus {
      ${variantsModifiers.isPrimaryFocus(theme)};
      outline: none;
    }
    &:disabled {
      ${variantsModifiers.isPrimaryDisabled(theme)};
      cursor: default;
    }
  `,
  isOutlineSecondary: (theme: DefaultTheme) => css`
    ${variantsModifiers.isSecondaryHover(theme)};
    &:hover {
      ${variantsModifiers.isSecondaryNormal(theme)};
    }
    &:active {
      ${variantsModifiers.isOutlineSecondaryActive(theme)};
    }
    &:focus {
      ${variantsModifiers.isSecondaryFocus(theme)};
      outline: none;
    }
    &:disabled {
      ${variantsModifiers.isPrimaryDisabled(theme)};
      cursor: default;
    }
  `,
  isOutlineSecondaryActive: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'black')};
    ${variantsModifiers.textColor(theme, 'secondary')};
    ${variantsModifiers.borderColor(theme, 'black')};
  `,
  isOutlineTerceary: (theme: DefaultTheme) => css`
    ${variantsModifiers.isOutlineTercearyNormal(theme)};
    &:hover {
      ${variantsModifiers.isQuaternaryNormal(theme)};
    }
    &:active {
      ${variantsModifiers.isOutlineTercearyActive(theme)};
    }
    &:focus {
      ${variantsModifiers.isOutlineTercearyFocus(theme)};
      outline: none;
    }
    &:disabled {
      ${variantsModifiers.isPrimaryDisabled(theme)};
      cursor: default;
    }
  `,
  isOutlineTercearyNormal: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'transparent')};
    ${variantsModifiers.textColor(theme, 'secondary')};
    ${variantsModifiers.borderColor(theme, 'secondary')};
  `,
  isOutlineTercearyActive: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'gray4')};
    ${variantsModifiers.textColor(theme, 'redPrimary')};
    ${variantsModifiers.borderColor(theme, 'gray4')};
  `,
  isOutlineTercearyFocus: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'gray4')};
    ${variantsModifiers.textColor(theme, 'redPrimary')};
    ${variantsModifiers.borderColor(theme, 'redPrimary')};
  `,
  isOutlineQuaternary: (theme: DefaultTheme) => css`
    ${variantsModifiers.isOutlineQuaternaryNormal(theme)};
    &:hover {
      ${variantsModifiers.isPrimaryNormal(theme)};
    }
    &:active {
      ${variantsModifiers.isQuaternaryActive(theme)};
    }
    &:focus {
      ${variantsModifiers.isPrimaryFocus(theme)};
      outline: none;
    }
    &:disabled {
      ${variantsModifiers.isPrimaryDisabled(theme)};
      cursor: default;
    }
  `,
  isOutlineQuaternaryNormal: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'transparent')};
    ${variantsModifiers.textColor(theme, 'secondary')};
    ${variantsModifiers.borderColor(theme, 'redPrimary')};
  `,
  isSocial: (theme: DefaultTheme) => css`
    padding: 0;
    background-color: transparent;
    svg {
      color: ${theme.colors.secondary};
      width: ${theme.spaces.medium};
      margin: 0;
    }
    &:hover {
      background-color: ${theme.colors.transparent};
      svg {
        color: ${theme.colors.secondary};
        width: ${theme.spaces.medium};
        margin: 0;
      }
    }
  `,
  tag: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'secondary')};
    ${variantsModifiers.textColor(theme, 'black2')};
    ${variantsModifiers.borderColor(theme, 'secondary')};
    border-radius: ${theme.spaces.xsmall};
  `,
  tag2: (theme: DefaultTheme) => css`
    ${variantsModifiers.backgroundColor(theme, 'gray4')};
    ${variantsModifiers.textColor(theme, 'black2')};
    ${variantsModifiers.borderColor(theme, 'gray4')};
    border-radius: ${theme.spaces.xsmall};
  `,
  customButtonColor: (
    theme: DefaultTheme,
    customColor: customVariantType = null
  ) => css`
    ${variantsModifiers.backgroundColor(theme, customColor?.backgroundColor)};
    ${variantsModifiers.textColor(theme, customColor?.textColor)};
    ${variantsModifiers.borderColor(theme, customColor?.borderColor)};
  `,
  customButtonVariant: (
    theme: DefaultTheme,
    customColor: customVariantType = null
  ) => css`
    ${customColor?.variant && variantsModifiers[customColor?.variant](theme)};
  `,
  customButtonColorHover: (
    theme: DefaultTheme,
    customColor: customVariantType = null
  ) => css`
    &:hover {
      ${variantsModifiers.backgroundColor(theme, customColor?.backgroundColor)};
      ${variantsModifiers.textColor(theme, customColor?.textColor)};
      ${variantsModifiers.borderColor(theme, customColor?.borderColor)};
    }
  `,
  customButtonVariantHover: (
    theme: DefaultTheme,
    customColor: customVariantType = null
  ) => css`
    &:hover {
      ${customColor?.variant && variantsModifiers[customColor?.variant](theme)};
    }
  `,
  backgroundColor: (
    theme: DefaultTheme,
    color: keyof typeof theme.colors
  ) => css`
    background-color: ${color ? theme.colors[color] : theme.colors.primary};
  `,
  textColor: (theme: DefaultTheme, color: keyof typeof theme.colors) => css`
    color: ${color ? theme.colors[color] : theme.colors.primary} !important;
    .Text__button,
    p {
      text-decoration: none;
      color: ${color ? theme.colors[color] : theme.colors.primary} !important;
    }
  `,
  borderColor: (theme: DefaultTheme, color: keyof typeof theme.colors) => css`
    border: 1px solid ${color ? theme.colors[color] : theme.colors.primary};
  `,
  opacityBackgroundColor: (
    theme: DefaultTheme,
    color: keyof typeof theme.colors,
    amount: number
  ) => css`
    background-color: ${opacify(
      amount,
      rgba(color ? theme.colors[color] : theme.colors.primary, 0)
    )};
  `,
  darkerBackgroundColor: (
    theme: DefaultTheme,
    color: keyof typeof theme.colors,
    amount: number
  ) => css`
    background-color: ${darken(
      amount,
      color ? theme.colors[color] : theme.colors.primary
    )};
  `,
  lightenBackgroundColor: (
    theme: DefaultTheme,
    color: keyof typeof theme.colors,
    amount: number
  ) => css`
    background-color: ${lighten(
      amount,
      color ? theme.colors[color] : theme.colors.primary
    )};
  `,
  isMinimalPrimary: (theme: DefaultTheme) => css`
    padding: 2px 16px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    ${variantsModifiers.backgroundColor(theme, 'redPrimary')};
    ${variantsModifiers.textColor(theme, 'secondary')};
  `,
  isMinimalQuaternary: (theme: DefaultTheme) => css`
    padding: 2px 16px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    ${variantsModifiers.backgroundColor(theme, 'secondary')};
    ${variantsModifiers.textColor(theme, 'redPrimary')};
  `,
  isBasic: (theme: DefaultTheme) => css`
    padding: 0;
    background-color: ${theme.colors.transparent};
    font-weight: ${theme.font.bSmall.weight.desktop};
    & > .Text__button {
      font-size: ${theme.font.bSmall.size.desktop};
    }
    &:hover {
      background-color: transparent;
      color: ${lighten(0.2, theme.colors.black)};
      }
    }
    
  `,
  isNavBasic: (theme: DefaultTheme) => css`
    padding: 0;
    background-color: ${theme.colors.transparent};
    font-weight: ${theme.font.bSmall.weight.desktop};
    height: 6rem;
    svg {
      cursor: pointer;
    }
    & > .Text__button {
      font-size: ${theme.font.bSmall.size.desktop};
    }
    &:hover {
      background-color: ${theme.colors.transparent};
    }
  `
}
