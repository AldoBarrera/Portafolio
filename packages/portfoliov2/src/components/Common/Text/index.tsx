'use client'

import TextBase from './text'
import { UrlProps, TextProps } from './textDef'

export type { UrlProps, TextProps }
function buildSpanText(text: string, positionsSecondaryText: number[]) {
  if (positionsSecondaryText && text) {
    return addSpantag(text, positionsSecondaryText)
  }
  return text
}

function addSpantag(text: string, positionsSecondaryText: number[]) {
  return text
    .split(' ')
    .map((element, index) =>
      positionsSecondaryText.includes(index) ? (
        <span key={index}>{`${element} `}</span>
      ) : (
        `${element} `
      )
    )
}

function Text({ positionsSecondaryText, ...props }: TextProps) {
  if (props.text) {
    return (
      <TextBase {...props}>
        {props.text}
      </TextBase>
    )
  }
  return <TextBase {...props}>{props.children}</TextBase>
}

export default Text
