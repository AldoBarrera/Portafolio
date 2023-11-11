import * as Style from './styles'

type IntroProps = {
  children: React.ReactNode
}

function Intro({ children }: IntroProps) {
  return (
    <Style.IntroWrapper>
      <h1>{children}</h1>
    </Style.IntroWrapper>
  )
}

export default Intro
