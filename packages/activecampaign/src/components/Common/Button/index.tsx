import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import Text, { TextProps } from 'components/Common/Text'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import { variantTypes, customVariantType } from './variantsModifiers'
import * as S from './styles'
import theme from 'styles/theme'
import { defaultBreakpoints } from 'styled-media-query'
import { useMediaQuery } from './hooks/useMediaQuery'
import { getUrlFromConditional } from './utils/index'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export const getUrl = getUrlFromConditional
export type ButtonsType = {
  label: string
  attributes?: ButtonProps
  url: string
  configuration?: any
}

export type SizeTypesProps = 'small' | 'medium' | 'large' | 'huge'
export type ButtonProps = {
  size?: SizeTypesProps
  sizeMobile?: SizeTypesProps
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
  noBorder?: boolean
  isPrimary?: boolean
  isRedPrimary?: boolean
  isSecondary?: boolean
  isBasic?: boolean
  isLink?: boolean
  isDarkGray?: boolean
  isBlack?: boolean
  circular?: boolean
  backgroundColor?: keyof typeof theme.colors
  textContent?: string
  textProperties?: TextProps
  hasSublinks?: boolean
  hasUrl?: boolean
  padding?: string
  withoutBorder?: boolean
  variant?: variantTypes
  variantMobile?: variantTypes
  textColor?: keyof typeof theme.colors
  borderColor?: keyof typeof theme.colors
  fullWidthMobile?: boolean
  customButtonColor?: customVariantType
  customButtonColorHover?: customVariantType
  disabled?: boolean
} & ButtonTypes

const buildTyeButton = (size: string) => {
  return size
    ? (`b${size?.charAt(0).toUpperCase()}${size?.slice(
        1
      )}` as TextProps['type'])
    : 'bMedium'
}
const Button: React.ForwardRefRenderFunction<
  S.ButtonWrapperProps,
  ButtonProps
> = (
  {
    children,
    fullWidth = false,
    minimal = false,
    icon,
    size,
    sizeMobile,
    textContent,
    textProperties,
    hasSublinks,
    hasUrl = true,
    ...props
  },
  ref
) => {
  const isDesktop = useMediaQuery(`(min-width: ${defaultBreakpoints.medium})`)
  if (textContent) {
    const type = buildTyeButton(size)
    const typeMobile = sizeMobile
      ? buildTyeButton(sizeMobile)
      : buildTyeButton(size)
    return (
      <S.ButtonWrapper
        fullWidth={fullWidth}
        minimal={minimal}
        size={size}
        hasIcon={!!icon}
        ref={ref}
        hasUrl={hasUrl}
        {...props}
      >
        {!!icon && icon}
        <Text
          {...textProperties}
          type={
            textProperties ? textProperties.type : isDesktop ? type : typeMobile
          }
        >
          {textContent}
        </Text>
        {hasSublinks && (
          <ArrowIosDownwardOutline
            height={32}
            width={16}
            preserveAspectRatio="none"
            color={
              textProperties && textProperties.color
                ? theme.colors[textProperties.color]
                : theme.colors.black
            }
          />
        )}
      </S.ButtonWrapper>
    )
  }
  return (
    <S.ButtonWrapper
      fullWidth={fullWidth}
      minimal={minimal}
      size={size}
      hasIcon={!!icon}
      ref={ref}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.ButtonWrapper>
  )
}

export default forwardRef(Button)
