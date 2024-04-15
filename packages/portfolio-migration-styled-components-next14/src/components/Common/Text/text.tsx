import * as Style from './styles'
import { TextProps } from './textDef'

function TextBase({ children, classType, type, ...props }: TextProps) {
  return (
    <>
      {type === 'h1' && <Style.H1 {...props}>{children}</Style.H1>}
      {type === 'h2' && <Style.H2 {...props}>{children}</Style.H2>}
      {type === 'h3' && <Style.H3 {...props}>{children}</Style.H3>}
      {type === 'h4' && <Style.H4 {...props}>{children}</Style.H4>}
      {type === 'h5' && <Style.H5 {...props}>{children}</Style.H5>}
      {type === 'h6' && <Style.H6 {...props}>{children}</Style.H6>}

      {type === 'p' && <Style.P {...props}>{children}</Style.P>}

      {type === 'pHero' && <Style.PHero {...props}>{children}</Style.PHero>}

      {type === 'placeholder' && (
        <Style.Placeholder {...props}>{children}</Style.Placeholder>
      )}

      {type === 'cta' && <Style.CTA {...props}>{children}</Style.CTA>}

      {type === 'bSmall' && <Style.bSmall>{children}</Style.bSmall>}
      {type === 'bMedium' && <Style.bMedium>{children}</Style.bMedium>}
      {type === 'bLarge' && <Style.bLarge>{children}</Style.bLarge>}
      {type === 'bHuge' && <Style.bHuge>{children}</Style.bHuge>}

      {classType === 'classh1' && (
        <Style.ClassH1 {...props}>{children}</Style.ClassH1>
      )}
      {classType === 'classh2' && (
        <Style.ClassH2 {...props}>{children}</Style.ClassH2>
      )}
      {classType === 'classh3' && (
        <Style.ClassH3 {...props}>{children}</Style.ClassH3>
      )}
      {classType === 'classh4' && (
        <Style.ClassH4 {...props}>{children}</Style.ClassH4>
      )}
      {classType === 'classh5' && (
        <Style.ClassH5 {...props}>{children}</Style.ClassH5>
      )}

      {!type && !classType && (
        <Style.Default {...props}>{children}</Style.Default>
      )}
    </>
  )
}

export default TextBase
