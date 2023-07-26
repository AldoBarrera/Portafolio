import React from 'react'
import { GridRowProps } from '.'
import * as Style from './styles'

import { getUnhandledProps } from '../utils'

export default function GridRow(props: GridRowProps) {
  const { children } = props
  const rest = getUnhandledProps(GridRow, props)

  return (
    <Style.Row {...props} {...rest}>
      {children}
    </Style.Row>
  )
}
