import * as Style from './styles'

export type TextProps = {
  children?: React.ReactNode
  color?: string
  fontFamily?: string
  fontSize?: string
  fontStyle?: string
  fontWeight?: string
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
  transform?: string
  margin?: string
}

function Text({
  color = 'black',
  children,
  fontFamily,
  fontStyle,
  fontSize,
  fontWeight,
  type,
  ...props
}: TextProps) {
  return (
    <>
      {type === 'h1' && <Style.H1 color={color}>{children}</Style.H1>}
      {type === 'h2' && <Style.H2 color={color}>{children}</Style.H2>}
      {type === 'h3' && <Style.H3 color={color}>{children}</Style.H3>}
      {type === 'h4' && <Style.H4 color={color}>{children}</Style.H4>}
      {type === 'h5' && <Style.H5 color={color}>{children}</Style.H5>}
      {type === 'h6' && <Style.H6 color={color}>{children}</Style.H6>}

      {type === 'p' && <Style.P color={color}>{children}</Style.P>}

      {type === 'pHero' && <Style.PHero color={color}>{children}</Style.PHero>}

      {type === 'placeholder' && (
        <Style.Placeholder color={color}>{children}</Style.Placeholder>
      )}

      {type === 'cta' && <Style.CTA color={color}>{children}</Style.CTA>}

      {type === 'bSmall' && <Style.bSmall>{children}</Style.bSmall>}
      {type === 'bMedium' && <Style.bMedium>{children}</Style.bMedium>}
      {type === 'bLarge' && <Style.bLarge>{children}</Style.bLarge>}
      {type === 'bHuge' && <Style.bHuge>{children}</Style.bHuge>}

      {!type && (
        <Style.Default
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontStyle={fontStyle}
          fontWeight={fontWeight}
          {...props}
        >
          {children}
        </Style.Default>
      )}
    </>
  )
}

export default Text
