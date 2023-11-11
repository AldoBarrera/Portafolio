import React from 'react'
import * as Style from './styles'
import { CardGroupProps } from '.'

import { childrenUtils, getUnhandledProps } from '../utils'
import { Card } from '../Card'

function CardGroup(props: CardGroupProps) {
  const { children, content, items } = props

  const rest = getUnhandledProps(CardGroup, props)

  if (!childrenUtils.isNil(children)) {
    return (
      <Style.Group {...props} {...rest}>
        {children}
      </Style.Group>
    )
  }
  if (!childrenUtils.isNil(content)) {
    return (
      <Style.Group {...props} {...rest}>
        {content}
      </Style.Group>
    )
  }

  const itemsJSX = items.map((item, index) => {
    return <Card key={index} {...item} />
  })

  return (
    <Style.Group {...props} {...rest}>
      {itemsJSX}
    </Style.Group>
  )
}

export default CardGroup
