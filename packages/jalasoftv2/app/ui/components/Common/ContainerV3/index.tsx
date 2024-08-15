import Image from '@/app/ui/components/Common/ContainerImage'
import { ImageType } from '@/app/ui/components/Common/ImageV2'
import theme from '@/styles/themeV2'
import css from './ContainerV3.module.css'

export type MobileConfigProps = {
  padding?: string
  margin?: string
  image?: ImageType
  height?: number
  width?: number
}

export interface FlexType {
  gap?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
}

export type ContainerV3Props = {
  children?: React.ReactNode
  id?: string
  withBorder?: boolean
  padding?: string
  margin?: string
  bgColor?: string
  bgImage?: { image: ImageType; mobileConfig: MobileConfigProps }
  bgVideo?: string
  flex?: FlexType
  flexMobile?: FlexType
  mobileConfig?: MobileConfigProps
  configuration?: any
  style?: any
  classes?: string
}

function ContainerV3({
  children,
  withBorder,
  padding,
  margin,
  bgColor,
  bgImage,
  bgVideo,
  style = {},
  flex,
  flexMobile,
  mobileConfig,
  classes
}: Readonly<ContainerV3Props>) {
  return (
    <div
      className={`${css.Wrapper} ${classes || ''}`}
      style={
        {
          '--containerv3-display':
            flex && Object.keys(flex).length > 0 && 'flex',
          '--containerv3-flex-direction': flex?.flexDirection,
          '--containerv3-flex-direction-mobile': flexMobile?.flexDirection,
          '--containerv3-flex-align': flex?.alignItems,
          '--containerv3-flex-align-mobile': flexMobile?.alignItems,
          '--containerv3-flex-justify': flex?.justifyContent,
          '--containerv3-flex-justify-mobile': flexMobile?.justifyContent,
          '--containerv3-flex-gap': flex?.gap,
          '--containerv3-flex-gap-mobile': flexMobile?.gap,
          '--containerv3-margin': margin,
          '--containerv3-margin-mobile': mobileConfig?.margin,
          '--containerv3-padding': padding,
          '--containerv3-padding-mobile': mobileConfig?.padding,
          '--containerv3-bg-color':
            bgColor && theme.colors[bgColor as keyof typeof theme.colors],
          '--containerv3-boder-bottom':
            withBorder && `1px solid ${theme.colors.darkGray}`,
          ...style
        } as React.CSSProperties
      }
    >
      {bgVideo && <Image image={{ file: { url: bgVideo } }} layout="fill" />}
      {bgImage && (
        <Image
          image={bgImage.image}
          layout="fill"
          mobileConfig={bgImage.mobileConfig}
        />
      )}
      {children}
    </div>
  )
}

export default ContainerV3
