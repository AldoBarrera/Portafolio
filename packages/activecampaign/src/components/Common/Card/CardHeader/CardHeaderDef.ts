import * as React from 'react'
import { ShorthandContent } from '../generic'
import { TextProps } from 'components/Common/Text'

export interface CardHeaderProps extends StrictCardHeaderProps {
  [key: string]: any
}

export interface StrictCardHeaderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  color?: string

  type?:
    | 'cta'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'pHero'
    | 'placeholder'

  /** Shorthand for primary content. */
  content?: ShorthandContent

  /** A card header can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right'

  /** A card header can adjust its text alignment. */
  textTransform?: string

  textProperties?: TextProps
}

export default CardHeaderProps
