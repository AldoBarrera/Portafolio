import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { variantsModifiers, customVariantType, variantTypes } from './variantsModifiers';
import theme from 'styles/theme';

type ThemeSpaces = typeof theme.spaces;

export type SizeTypesProps = 'small' | 'medium' | 'large' | 'huge';

export type ButtonWrapperProps = {
  hasIcon?: boolean;
  label?: string;
  size?: SizeTypesProps;
  sizeMobile?: SizeTypesProps;
  $fullWidth?: boolean;
  $fullWidthMobile?: boolean;
  $variant?: variantTypes;
  variantMobile?: variantTypes;
  icon?: string | JSX.Element;
  as?: React.ElementType;
  hasSublinks?: boolean;
  $hasUrl?: boolean;
  customButtonColor?: customVariantType;
  customButtonColorHover?: customVariantType;
  customButtonVariant?: customVariantType;
  customButtonVariantHover?: customVariantType;
  disabled?: boolean;
};

type ButtonModifierFunctionBorder = (theme: DefaultTheme, size: keyof ThemeSpaces) => ReturnType<typeof css>;
type ButtonModifierFunction = (theme: DefaultTheme) => ReturnType<typeof css>;

const borderRadius : ButtonModifierFunctionBorder = (theme, size) => css`
  border-radius: ${size ? theme.spaces[size] : theme.spaces.xxtiny};
`

const buttonModifiers: Record<string, ButtonModifierFunction> = {
  small: (theme) => css`
    font-size: ${theme.font.bSmall.size.desktop};
    line-height: ${theme.font.bSmall.lineHeight.desktop};
    padding: 0 16px;
    font-weight: ${theme.font.bSmall.weight.desktop};
  `,

  medium: (theme) => css`
    font-size: ${theme.font.bMedium.size.desktop};
    line-height: ${theme.font.bMedium.lineHeight.desktop};
    padding: ${theme.spaces.xtiny} ${theme.spaces.small};
    font-weight: ${theme.font.bMedium.weight.desktop};
    ${borderRadius(theme, 'xxtiny')};
  `,

  large: (theme) => css`
    font-size: ${theme.font.bLarge.size.desktop};
    line-height: ${theme.font.bLarge.lineHeight.desktop};
    padding: ${theme.spaces.xtiny} ${theme.spaces.medium};
    font-weight: ${theme.font.bMedium.weight.desktop};
    ${borderRadius(theme, 'xtiny')};
  `,

  huge: (theme) => css`
    font-size: ${theme.font.bHuge.size.desktop};
    line-height: ${theme.font.bHuge.lineHeight.desktop};
    padding: 16px ${theme.spaces.large};
    font-weight: ${theme.font.bHuge.weight.desktop};
    ${borderRadius(theme, 'xtiny')};
  `,

  hasIcon: (theme) => css`
    svg {
      width: 4.5rem;

      & + span {
        margin-left: ${theme.spaces.xsmall};
      }

      & + p {
        margin-left: ${theme.spaces.xsmall};
      }
    }
  `
};

const buttonModifiersWidth = {

  fullWidth: () => css`
    width: 100%;
  `,

  fullWidthMobile: () => css`
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `,
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${({
    theme,
    $fullWidth,
    hasIcon,
    size,
    $variant,
    $hasUrl = true,
    $fullWidthMobile,
    customButtonColor,
    customButtonColorHover,
    customButtonVariant,
    customButtonVariantHover,
  }) => css`
    display: inline-flex;
    gap: ${theme.spaces.xxtiny};
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: ${$hasUrl ? 'pointer' : 'default'};
    ${size && buttonModifiers[size](theme)}
    ${$fullWidth && buttonModifiersWidth.fullWidth()}
    ${$fullWidthMobile && buttonModifiersWidth.fullWidthMobile()}
    ${hasIcon && buttonModifiers.hasIcon(theme)}
    ${$variant && variantsModifiers[$variant as keyof typeof variantsModifiers](theme)}
    ${customButtonColor &&
    variantsModifiers.customButtonColor(theme, customButtonColor)}
    ${customButtonColorHover &&
    variantsModifiers.customButtonColorHover(theme, customButtonColorHover)}
  `}
`;
