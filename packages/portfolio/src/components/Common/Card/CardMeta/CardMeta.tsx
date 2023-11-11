import React from 'react'
import Text from 'components/Common/Text'
import * as Style from './styles'

import { CardMetaProps } from './'

import { childrenUtils, getUnhandledProps } from '../utils'

function CardMeta(props: CardMetaProps) {
  const { children, content, textAlign = 'left' } = props
  const rest = getUnhandledProps(CardMeta, props)

  return (
    <Style.Meta textAlign={textAlign} {...props} {...rest}>
      <Text>{childrenUtils.isNil(children) ? content : children}</Text>
    </Style.Meta>
  )
}

export default CardMeta
