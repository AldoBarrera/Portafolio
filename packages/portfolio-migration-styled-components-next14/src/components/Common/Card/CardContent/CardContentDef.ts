import * as React from 'react'

import { CardDescriptionProps } from '../CardDescription'
import { CardHeaderProps } from '../CardHeader'
import { CardMetaProps } from '../CardMeta'
import { TextProps } from 'components/Common/Text'

export type CardContentProps = {

  children?: React.ReactNode

  description?: TextProps

  extra?: boolean

  header?: TextProps

  meta?: CardMetaProps

  textAlign?: 'center' | 'left' | 'right'

  padding?: string

}

export default CardContentProps
