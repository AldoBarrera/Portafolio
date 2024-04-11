import React from 'react'
import Text from 'components/Common/Text'
import * as Style from './styles'

import { CardMetaProps } from './'

function CardMeta(props: CardMetaProps) {
  const { children, content } = props
  if (children) {
    return (
      <Style.Meta {...props}>
        {children}
      </Style.Meta>
    )
  }

  return (
    <Style.Meta {...props}>
      <Text {...content}>{content?.text}</Text>
    </Style.Meta>
  )
}

export default CardMeta
