import { ImageType } from 'components/Common/Image'
import { ButtonsType } from 'components/Common/Button'
import { TextProps } from 'components/Common/Text'

export type HeroProps = {
  title: TextProps
  hasSmallBorderOnTop?: boolean
  description: TextProps
  page?: string
  additionalRightComponent?: any
  image?: ImageType | string
  button?: ButtonsType
  hideBreadCrumbs?: boolean
  additionalLeftComponent?: any
  paddingLeftComponents?: string
  style?: any
}

export default HeroProps
