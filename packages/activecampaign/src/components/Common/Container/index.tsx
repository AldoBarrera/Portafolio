import * as Style from './styles'

export type ContainerProps = {
  children?: React.ReactNode
  id?: string
  withoutBorder?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
  fullsize?: boolean
  fullWidthMobile?: boolean
  fullHeightMobile?: boolean
}

const Container = ({ children, ...props }: ContainerProps) => (
  <Style.WrapperContainer {...props}>
    <Style.ContainerInside {...props}>{children}</Style.ContainerInside>
  </Style.WrapperContainer>
)
export default Container
