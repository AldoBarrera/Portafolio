import * as React from 'react'
import { TextProps } from 'components/Common/Text'

export type CardDescriptionProps = {
  children?: React.ReactNode
  description?: TextProps
  textAlign?: 'center' | 'left' | 'right'
}

export default CardDescriptionProps
