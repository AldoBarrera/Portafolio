import * as React from 'react'

import { ShorthandContent, SIZES } from '../generic'

export interface ImageProps extends StrictImageProps {
  [key: string]: any
}

export interface StrictImageProps {
  /** An element type to render as (string or function). */
  as?: any

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar?: boolean

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered?: boolean

  /** An image can appear centered in a content block. */
  centered?: boolean

  /** An image can appear centered in a content block. */
  isSlider?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** An image may appear circular. */
  circular?: boolean

  /** Shorthand for primary content. */
  content?: ShorthandContent

  /** An image can show that it is disabled and cannot be selected. */
  disabled?: boolean

  /** An image can take up the width of its container. */
  fluid?: boolean

  /** An image can be hidden. */
  hidden?: boolean

  /** Renders the Image as an <a> tag with this href. */
  href?: string

  /** An image may appear inline. */
  inline?: boolean

  /** An image may appear rounded. */
  rounded?: boolean

  /** The image is changed to size same as Icon. */
  isIcon?: boolean

  /** An image may appear at different sizes. */
  size?: SIZES

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced?: boolean | 'left' | 'right'

  /** Whether or not to add the ui className. */
  ui?: boolean

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped?: boolean

  padding?: string

  url?: string
}

export default ImageProps
