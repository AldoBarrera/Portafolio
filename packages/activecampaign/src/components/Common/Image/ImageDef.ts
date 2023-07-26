export type ImageProps = {
  loader?: any
  avatar?: boolean
  bordered?: boolean
  centered?: boolean
  isSlider?: boolean
  circular?: boolean
  disabled?: boolean
  hidden?: boolean
  href?: string
  inline?: boolean
  rounded?: boolean
  isIcon?: boolean
  spaced?: boolean | 'left' | 'right'
  padding?: string
  borderRaidus?: string
  src: string
  alt?: string
  sizes?: string
  priority?: boolean
  style?: {
    height?: string
    width?: string
    borderRadius?: string
    marginRight?: string
    display?: string
  }
}

export default ImageProps
