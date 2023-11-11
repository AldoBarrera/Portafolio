import React from 'react'
import { GridColumnProps } from '.'
import * as Style from './styles'

import { getUnhandledProps } from '../utils'

export default function GridColumn(props: GridColumnProps) {
  const { children } = props
  const rest = getUnhandledProps(GridColumn, props)

  return (
    <Style.Column {...props} {...rest}>
      {children}
    </Style.Column>
  )
}
