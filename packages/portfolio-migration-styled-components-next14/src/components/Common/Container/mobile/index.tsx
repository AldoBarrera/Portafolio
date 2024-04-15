import { WrapperContainer } from '../styles'
import { ContainerInsideMobile } from './styles'
import { ContainerProps } from '../index'

const Container = ({ children, ...props }: ContainerProps) => (
  <WrapperContainer {...props}>
    <ContainerInsideMobile {...props}>{children}</ContainerInsideMobile>
  </WrapperContainer>
)
export default Container
