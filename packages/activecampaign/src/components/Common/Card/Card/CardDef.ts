import * as React from 'react'

import { TextProps } from 'components/Common/Text'
import { ButtonsType } from 'components/Common/Button'
import { COLORS, SIZES, ShorthandContent, ShorthandItem } from '../generic'
import { ImageType } from '../Image'
import { CardHeaderProps } from '../CardHeader'
import { CardMetaProps } from '../CardMeta'

export interface CardProps extends StrictCardProps {
  [key: string]: any
}

export interface StrictCardProps {
  /** An element type to render as (string or function). */
  as?: any

  /** A Card can center itself inside its container. */
  centered?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** A Card can be formatted to display different colors. */
  color?: COLORS

  /** A Card can be formatted to display different colors. */
  padding?: string

  /** A fix height Card when os in slider. */
  height?: string

  /** Shorthand for primary content. */
  content?: ShorthandContent

  /** Shorthand for CardDescription. */
  description?: string

  /** Shorthand for primary content of CardContent. */
  extra?: ShorthandContent

  /** A Card can be formatted to take up the width of its container. */
  fluid?: boolean

  /** Shorthand for CardHeader. */
  title?: string

  /** Shorthand for CardHeader. */
  header?: ShorthandItem<CardHeaderProps>

  /** A card can contain an Image component. */
  image?: ImageType | string

  /** A card can contain an Image component. */
  icon?: ImageType | string

  /** Shorthand for CardMeta. */
  meta?: ShorthandItem<CardMetaProps>

  /** Size for Card. */
  size?: SIZES

  /** Slider for Card. */
  isSlider?: boolean

  /** Is Aligned Horizontally */
  isHorizontal?: boolean

  /** Is Aligned Horizontally */
  isHorizontalInverted?: boolean

  /** Slider for Card. */
  hasBorder?: boolean

  /** Slider for Card. */
  isIcon?: boolean

  /** Size of Card inside of a grid */
  gridSize?: number

  /** Button for card */
  button?: ButtonsType
  /** Border radius. */
  borderTopLeftRadius?: boolean
  borderTopRightRadius?: boolean
  borderBottomLeftRadius?: boolean
  borderBottomRightRadius?: boolean
  url?: string
  /*Text Properties. */
  headerProperties?: TextProps
  descriptionProperties?: TextProps

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: CardProps
  ) => void
}

export default CardProps
