import React from 'react'

import { childrenUtils, getUnhandledProps } from '../utils'
import { CardContentProps } from '.'
import { CardDescription } from '../CardDescription'
import { CardHeader } from '../CardHeader'
import { CardMeta } from '../CardMeta'
import * as Style from './styles'

function CardContent(props: CardContentProps) {
  const {
    children,
    content,
    description,
    header,
    meta,
    headerProperties,
    descriptionProperties
  } = props
  const rest = getUnhandledProps(CardContent, props)

  if (!childrenUtils.isNil(children)) {
    return (
      <Style.Content {...props} {...rest}>
        {children}
      </Style.Content>
    )
  }
  if (!childrenUtils.isNil(content)) {
    return (
      <Style.Content {...props} {...rest}>
        {content}
      </Style.Content>
    )
  }

  return (
    <Style.Content {...props} {...rest}>
      <CardHeader textProperties={headerProperties} {...rest}>
        {header}
      </CardHeader>
      <CardMeta {...rest}>{meta}</CardMeta>
      <CardDescription textProperties={descriptionProperties} {...rest}>
        {description}
      </CardDescription>
    </Style.Content>
  )
}

export default CardContent
