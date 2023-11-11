import * as React from 'react'

import { TextProps } from 'components/Common/Text'
import { ButtonsType } from 'components/Common/Button'
import { COLORS, SIZES, ShorthandContent, ShorthandItem } from '../generic'
import { ImageType } from 'components/Common/Image'
import { CardHeaderProps } from '../CardHeader'
import { CardMetaProps } from '../CardMeta'

export interface CardProps extends StrictCardProps {
  [key: string]: any
}

export interface StrictCardProps {
  centered?: boolean
  color?: COLORS
  padding?: string
  height?: string
  content?: ShorthandContent
  description?: string
  extra?: ShorthandContent
  fluid?: boolean
  title?: string
  alt?: string
  header?: ShorthandItem<CardHeaderProps>
  image?: ImageType | string
  icon?: ImageType | string
  meta?: ShorthandItem<CardMetaProps>
  size?: SIZES
  isSlider?: boolean
  isHorizontal?: boolean
  isHorizontalInverted?: boolean
  hasBorder?: boolean
  isIcon?: boolean
  gridSize?: number
  button?: ButtonsType
  borderTopLeftRadius?: boolean
  borderTopRightRadius?: boolean
  borderBottomLeftRadius?: boolean
  borderBottomRightRadius?: boolean
  headerProperties?: TextProps
  descriptionProperties?: TextProps
  tags?: string[]
  category?: string
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: CardProps
  ) => void
}

export default CardProps
