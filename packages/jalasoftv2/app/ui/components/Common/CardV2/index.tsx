import CardContent from '@/app/ui/components/Common/CardV2/CardContent'
import { FlexType } from '@/app/ui/components/Common/ContainerV3'
import Image, { ImageProps } from '@/app/ui/components/Common/ImageV2'
import { TextV2Props } from '@/app/ui/components/Common/TextV2'
import theme from '@/styles/themeV2'
import css from './CardsV2.module.css'

export type CardProps = {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'auto'
  subtitle?: TextV2Props
  title?: TextV2Props
  description?: TextV2Props
  image?: ImageProps
  textAlign?: 'center' | 'left' | 'right'
  padding?: string
  flex?: FlexType
  classes?: string
  configuration?: any
  style?: any
  bgColor?: string
  border?: string
  borderRadius?: string
}

function Card({
  size = 'small',
  subtitle,
  title,
  description,
  image,
  textAlign,
  padding,
  bgColor,
  border,
  borderRadius,
  flex = {},
  classes,
  style
}: Readonly<CardProps>) {
  const { gap, alignItems, flexDirection } = flex
  const cardSizes = {
    xsmall: () => '244px',
    small: () => '368px',
    medium: () => '548px',
    large: () => '700px',
    auto: () => '100%'
  }
  return (
    <div
      className={`${css.Container} ${classes}`}
      style={
        {
          '--cardv2-size': size && cardSizes[size](),
          '--cardv2-align-items': alignItems,
          '--cardv2-padding': padding,
          '--cardv2-flex-direction': flexDirection,
          '--cardv2-flex-gap': gap,
          '--cardv2-background-color':
            bgColor && theme.colors[bgColor as keyof typeof theme.colors],
          '--cardv2-border': border,
          '--cardv2-border-radius': borderRadius,
          ...style
        } as React.CSSProperties
      }
    >
      {image && <Image {...image} />}
      {(subtitle || title || description) && (
        <CardContent
          subtitle={subtitle}
          title={title}
          description={description}
          textAlign={textAlign}
          flex={flex}
        />
      )}
    </div>
  )
}

export default Card
