import * as React from 'react'
import { TextProps } from 'components/Common/Text'

export type CardHeaderProps = {
  children?: React.ReactNode
  header?: TextProps
  textAlign?: 'center' | 'left' | 'right'
  textTransform?: string
}

export default CardHeaderProps
