import React from 'react'
import { CardDescriptionProps } from '.'
import * as Style from './styles'
import Text from 'components/Common/Text'

import { getUnhandledProps, childrenUtils } from '../utils'

function CardDescription(props: CardDescriptionProps) {
  const { children, content, textAlign = 'left', type = 'p' } = props
  const rest = getUnhandledProps(CardDescription, props)

  return (
    <Style.Description textAlign={textAlign} {...props} {...rest}>
      <Text type={type} {...props.textProperties}>
        {childrenUtils.isNil(children) ? content : children}
      </Text>
    </Style.Description>
  )
}

export default CardDescription
