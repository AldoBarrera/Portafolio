import { FlexType } from '@/app/ui/components/Common/ContainerV3'
import Text, { TextV2Props } from '@/app/ui/components/Common/TextV2'
import { getText } from '@/utils/app'
import css from './CardContent.module.css'

export type CardContentProps = {
  subtitle?: TextV2Props
  title?: TextV2Props
  description?: TextV2Props
  textAlign?: 'center' | 'left' | 'right'
  flex?: FlexType
}

function CardContent({
  subtitle,
  title,
  description,
  textAlign,
  flex = {}
}: Readonly<CardContentProps>) {
  const { gap, alignItems, flexDirection } = flex
  return (
    <div
      className={css.Container}
      style={
        {
          '--cardcontent-flex-direction': flexDirection,
          '--cardcontent-align-items': alignItems,
          '--cardcontent-flex-gap': gap,
          '--cardcontent-text-align': textAlign
        } as React.CSSProperties
      }
    >
      {subtitle && <Text {...subtitle}>{getText(subtitle)}</Text>}
      {title && <Text {...title}>{getText(title)}</Text>}
      {description && <Text {...description}>{getText(description)}</Text>}
    </div>
  )
}

export default CardContent
