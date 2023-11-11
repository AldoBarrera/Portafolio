import * as React from 'react'

import { ShorthandContent, ShorthandItem } from '../generic'
import { CardDescriptionProps } from '../CardDescription'
import { CardHeaderProps } from '../CardHeader'
import { CardMetaProps } from '../CardMeta'
import { TextProps } from 'components/Common/Text'

export interface CardContentProps extends StrictCardContentProps {
  [key: string]: any
}

export interface StrictCardContentProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Shorthand for primary content. */
  content?: ShorthandContent

  /** Shorthand for CardDescription. */
  description?: ShorthandItem<CardDescriptionProps>

  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra?: boolean

  /** Shorthand for CardHeader. */
  header?: ShorthandItem<CardHeaderProps>

  /** Shorthand for CardMeta. */
  meta?: ShorthandItem<CardMetaProps>

  /** A card content can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right'

  /** A Card can be formatted to display different paddings. */
  padding?: string

  /*Text Properties. */
  headerProperties?: TextProps
  descriptionProperties?: TextProps
}

export default CardContentProps
