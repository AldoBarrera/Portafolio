export type ShorthandItemFunc<TProps> = (
  component: React.ElementType<TProps>,
  props: TProps,
  children?: React.ReactNode | React.ReactNodeArray
) => React.ReactElement<any> | null
export type ShorthandRenderFunction<C extends React.ElementType, P> = (
  Component: C,
  props: P
) => React.ReactNode
export type ShorthandCollection<TProps> = ShorthandItem<TProps>[]
export type ShorthandContent = React.ReactNode
export type ShorthandItem<TProps extends Record<string, any>> =
  | React.ReactNode
  | ShorthandItemFunc<TProps>
  | (Omit<TProps, 'children'> & {
      // Not all TProps can have `children`, without this condition it will match to "any"
      children?: TProps extends { children: any }
        ?
            | TProps['children']
            | ShorthandRenderFunction<React.ElementType<TProps>, TProps>
        : ShorthandRenderFunction<React.ElementType<TProps>, TProps>
    })

export type COLORS =
  | 'primary'
  | 'secondary'
  | 'mainBg'
  | 'lightBg'
  | 'white'
  | 'black'
  | 'darkBlue'
  | 'veryLightGray'
  | 'lightGray'
  | 'mediumGray'
  | 'mediumDarkGray'
  | 'lightGrayDark'
  | 'gray'
  | 'locationsGray'
  | 'bgLightGray'
  | 'borderLightGray'
  | 'gray2'
  | 'gray4'
  | 'darkGray'
  | 'red'
  | 'lightBlack'
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'google'
  | 'background'
  | 'osloGray'
  | 'galleryGray'
  | 'whiteSmoke'
  | 'black2'

export type SIZES =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'huge'
  | 'xhuge'
  | 'xxhuge'
  | 'auto'
