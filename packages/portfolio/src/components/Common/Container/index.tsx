import { ContainerInsideDesktop, WrapperContainer } from './styles'
import { ContainerProps } from 'components/Common/Container/ContainerDef'
export type { ContainerProps }
const Container = ({ children, style, ...props }: ContainerProps) => (
  <WrapperContainer {...props} style={style}>
    <ContainerInsideDesktop {...props}>{children}</ContainerInsideDesktop>
  </WrapperContainer>
)
export default Container
