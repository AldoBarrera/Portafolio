import * as React from 'react'
import { TextProps } from 'components/Common/Text'
import { SIZES, COLORS, ShorthandContent } from '../generic'

export interface CardDescriptionProps extends StrictCardDescriptionProps {
  [key: string]: any
}

export interface StrictCardDescriptionProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Shorthand for primary content. */
  content?: ShorthandContent

  /** A card description can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right'

  color?: COLORS

  size?: SIZES

  textProperties?: TextProps
}

export default CardDescriptionProps
