import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import Text, { TextProps } from 'components/Common/Text'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import { variantTypes, customVariantType } from './variantsModifiers'
import * as Style from './styles'
import theme from 'styles/theme'
import { getUrlUsingConfiguration } from './utils/index'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export const getUrl = getUrlUsingConfiguration
export type ButtonsType = {
  label: string
  attributes?: ButtonProps
  url: string
  configuration?: any
}

export type SizeTypesProps = 'small' | 'medium' | 'large' | 'huge'
export type ButtonProps = {
  label?: string
  size?: SizeTypesProps
  sizeMobile?: SizeTypesProps
  fullWidth?: boolean
  fullWidthMobile?: boolean
  variant?: variantTypes
  variantMobile?: variantTypes
  icon?: string | JSX.Element
  as?: React.ElementType
  hasSublinks?: boolean
  hasUrl?: boolean
  customButtonColor?: customVariantType
  customButtonColorHover?: customVariantType
  customButtonVariant?: customVariantType
  customButtonVariantHover?: customVariantType
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
  Style.ButtonWrapperProps,
  ButtonProps
> = (
  {
    children,
    fullWidth = false,
    fullWidthMobile = true,
    size = 'large',
    sizeMobile,
    label,
    hasSublinks,
    hasUrl = true,
    variant = 'isPrimaryDarkerHover',
    ...props
  },
  ref
) => {
  const isMobile = true
  if (label) {
    const type = buildTyeButton(size)
    const typeMobile = sizeMobile
      ? buildTyeButton(sizeMobile)
      : buildTyeButton(size)
    return (
      <Style.ButtonWrapper
        fullWidth={fullWidth}
        size={size}
        ref={ref}
        hasUrl={hasUrl}
        variant={variant}
        fullWidthMobile={fullWidthMobile}
        {...props}
      >
        <Text type={!isMobile ? type : typeMobile}>{label}</Text>
        {hasSublinks && (
          <ArrowIosDownwardOutline
            height={16}
            width={16}
            preserveAspectRatio="none"
            color={theme.colors.black}
          />
        )}
      </Style.ButtonWrapper>
    )
  }
  return (
    <Style.ButtonWrapper
      fullWidth={fullWidth}
      size={size}
      ref={ref}
      hasUrl={hasUrl}
      variant={variant}
      fullWidthMobile={fullWidthMobile}
      {...props}
    >
      {!!children && <>{children}</>}
    </Style.ButtonWrapper>
  )
}

export default forwardRef(Button)
