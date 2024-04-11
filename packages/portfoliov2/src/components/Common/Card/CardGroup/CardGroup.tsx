import React from 'react'
import * as Style from './styles'
import { CardGroupProps } from '.'

import { Card } from '../Card'

function CardGroup(props: CardGroupProps) {
  const { children, items } = props

  if (children) {
    return (
      <Style.Group {...props}>
        {children}
      </Style.Group>
    )
  }

  const itemsJSX = items?.map((item, index) => {
    return <Card key={index} {...item} />
  })

  return (
    <Style.Group {...props}>
      {itemsJSX}
    </Style.Group>
  )
}

export default CardGroup
