import * as React from 'react'

import { TextProps } from 'components/Common/Text'
import { ButtonsType } from 'components/Common/Button'
import { ImageType } from 'components/Common/Image'
import { CardHeaderProps } from '../CardHeader'
import { CardContentProps } from '../CardContent'
import { CardMetaProps } from '../CardMeta'
import theme from 'styles/theme'

export type CardProps = {
  centered?: boolean
  color?: keyof typeof theme.colors
  padding?: string
  height?: string
  content?: CardContentProps
  children?: React.ReactNode
  alt?: string
  image?: ImageType | string
  icon?: ImageType | string
  size?: keyof typeof theme.spaces
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
  tags?: string[]
  category?: string
  textAlign?: 'center' | 'left' | 'right'
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: CardProps
  ) => void
}

export default CardProps
