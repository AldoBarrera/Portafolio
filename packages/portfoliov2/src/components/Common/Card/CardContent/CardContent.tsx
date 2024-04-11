import React from 'react'

import { CardContentProps } from '.'
import { CardDescription } from '../CardDescription'
import { CardHeader } from '../CardHeader'
import { CardMeta } from '../CardMeta'
import * as Style from './styles'

function CardContent(props: CardContentProps) {
  const {
    children,
    description,
    header,
    meta,
  } = props
  if (children) {
    return (
      <Style.Content {...props}>
        {children}
      </Style.Content>
    )
  }

  return (
    <Style.Content {...props}>
      <CardHeader {...header} />
      <CardMeta {...meta} />
      <CardDescription {...description} />
    </Style.Content>
  )
}

export default CardContent
