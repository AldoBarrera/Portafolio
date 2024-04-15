import theme from 'styles/theme'

export type UrlProps = {
  text?: string
  url?: string
}

export type TextProps = {
  children?: React.ReactNode
  color?: keyof typeof theme.colors
  fontFamily?: string
  fontSize?: string
  fontStyle?: string
  fontWeight?: string
  lineHeight?: string
  type?:
    | 'cta'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'pHero'
    | 'placeholder'
    | 'bSmall'
    | 'bMedium'
    | 'bLarge'
    | 'bHuge'
  classType?: 'classh1' | 'classh2' | 'classh3' | 'classh4' | 'classh5'
  transform?: string
  margin?: string
  text?: string
  configuration?: TextProps
  positionsSecondaryText?: number[]
  colorSecondaryText?: keyof typeof theme.colors
  hasUrlText?: UrlProps[]
  style?: any
}
