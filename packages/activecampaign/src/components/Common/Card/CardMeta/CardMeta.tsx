import React from 'react'
import * as Style from './styles'

import { CardMetaProps } from './'

import { getUnhandledProps } from '../utils'

function CardMeta(props: CardMetaProps) {
  const { textAlign = 'left'} = props
  const rest = getUnhandledProps(CardMeta, props)

  return (
    <Style.Meta textAlign={textAlign} {...props} {...rest}>
    </Style.Meta>
  )
}

export default CardMeta
