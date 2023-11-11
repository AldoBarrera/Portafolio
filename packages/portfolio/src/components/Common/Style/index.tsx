import theme from 'styles/theme'
import { ImageType } from 'components/Common/Image'
export type StyleProps = {
  children?: React.ReactNode
  padding?: string
  width?: string
  heigth?: string
  margin?: string
  color?: keyof typeof theme.colors
  bgColor?: keyof typeof theme.colors
  borderBottom?: string
  bgImage?: ImageType
}

export type StyleMixProps = {
  customStyle?: StyleProps
}
