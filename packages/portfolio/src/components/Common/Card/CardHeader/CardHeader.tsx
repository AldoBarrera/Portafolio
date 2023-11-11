import React from 'react'
import Text from 'components/Common/Text'
import { CardHeaderProps } from './'
import * as Style from './styles'

import { childrenUtils, getUnhandledProps } from '../utils'

function CardHeader(props: CardHeaderProps) {
  const { children, content, textAlign = 'left', classType = 'classh4' } = props
  const rest = getUnhandledProps(CardHeader, props)

  return (
    <Style.Header textAlign={textAlign} {...props} {...rest}>
      <Text classType={classType} color={props.color} {...props.textProperties}>
        {childrenUtils.isNil(children) ? content : children}
      </Text>
    </Style.Header>
  )
}

export default CardHeader
