import { createElement, ReactNode } from 'react'
import parse from 'html-react-parser'
import css from './TextV2.module.css'
import { getRedTitle } from '@/utils/app'
import theme from '@/styles/themeV2'

export type TextV2Props = {
  text?: string
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  classType?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'body1'
    | 'bLink'
    | 'bLarge'
    | 'body1'
    | 'bLink'
    | 'bLarge'
    | 'pHero'
    | 'footeritem'
    | 'footerlink'
    | 'navlink'
  color?: string
  hasTopBorder?: boolean
  topBorderColor?: string
  highlightWords?: number[] | boolean
  configuration?: any
  style?: any
  children?: ReactNode
  classes?: string
}

function Text({
  children,
  type: tag,
  classType,
  color,
  hasTopBorder = false,
  topBorderColor,
  highlightWords,
  style,
  classes
}: Readonly<TextV2Props>) {
  const customClass = classType ? 'Text__' + classType : ''
  const props = {
    className: `${css.Text} ${customClass} ${classes || ''} ${
      hasTopBorder ? css.BorderTop : ''
    }`,
    style: {
      '--textv2-font-color':
        color && theme.colors[color as keyof typeof theme.colors],
      '--textv2-top-border-color':
        topBorderColor &&
        theme.colors[topBorderColor as keyof typeof theme.colors],
      ...style
    } as React.CSSProperties
  }

  if (typeof children == 'string' && highlightWords) {
    children = getRedTitle(children, highlightWords)
  }

  if (typeof children == 'string') {
    children = parse(children)
  }
  return createElement(tag ?? 'p', props, children)
}

export default Text
