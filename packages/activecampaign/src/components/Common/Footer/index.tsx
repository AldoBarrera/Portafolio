import * as Style from './styles'
import Container from 'components/Common/Container'

export type FooterProps = {
  footerCopy: string
}

function Footer() {
  return (
    <Style.FooterWrapper>
      <Container withoutBorder>
        <Style.FooterText>
          &copy; 2023 Jala Active Campaign. All rights reserved
        </Style.FooterText>
      </Container>
    </Style.FooterWrapper>
  )
}

export default Footer
