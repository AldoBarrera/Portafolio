import React from 'react'
import Text from 'components/Common/Text'
import { CardHeaderProps } from './'
import * as Style from './styles'

import { childrenUtils, getUnhandledProps } from '../utils'

function CardHeader(props: CardHeaderProps) {
  const { children, content, textAlign = 'center', type = 'h4' } = props
  const rest = getUnhandledProps(CardHeader, props)

  return (
    <Style.Header textAlign={textAlign} {...props} {...rest}>
      <Text type={type} color={props.color} {...props.textProperties}>
        {childrenUtils.isNil(children) ? content : children}
      </Text>
    </Style.Header>
  )
}

export default CardHeader
