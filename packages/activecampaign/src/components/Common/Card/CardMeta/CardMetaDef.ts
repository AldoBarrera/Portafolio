import * as React from 'react'
import { SIZES, ShorthandContent } from '../generic'

export interface CardMetaProps extends StrictCardMetaProps {
  [key: string]: any
}

export interface StrictCardMetaProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Shorthand for primary content. */
  content?: ShorthandContent

  /** A card meta can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right'

  /** A card meta can adjust its text size. */
  size?: SIZES
}

export default CardMetaProps
