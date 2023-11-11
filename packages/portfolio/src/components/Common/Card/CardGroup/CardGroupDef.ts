import * as React from 'react'

import { ShorthandCollection, ShorthandContent } from '../generic'
import { CardProps } from '../Card'

export interface CardGroupProps extends StrictCardGroupProps {
  [key: string]: any
}

export interface StrictCardGroupProps {
  /** An element type to render as (string or function). */
  as?: any

  /** A group of cards can center itself inside its container. */
  centered?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** Shorthand for primary content. */
  content?: ShorthandContent

  /** A group of cards can double its column width for mobile. */
  doubling?: boolean

  /** Shorthand array of props for Card. */
  items?: ShorthandCollection<CardProps>

  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable?: boolean

  /** A card group can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right'
}

export default CardGroupProps
