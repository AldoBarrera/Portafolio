import Link from 'next/link'
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle'
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle'
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle'
import Button from 'components/Common/Button'
import Image from 'components/Common/Image'
import * as Style from './styles'

export type FooterProps = {
  footerCopy: string
}

function Footer() {
  const src = `/img/logo-jalasoft.svg`
  return (
    <Style.FooterWrapper>
      <Style.FooterLogosWrapper>
        <Style.FooterLogo>
          <Link href="/">
            <a>
              <Image
                loader={() => src}
                src={src}
                alt="Jalasoft logo"
                sizes={'10vw'}
              />
            </a>
          </Link>
        </Style.FooterLogo>
        <Style.FooterSocialIcons>
          <Link href="https://www.facebook.com/JalasoftLatam/" passHref>
            <Button
              as="a"
              variant="isSocial"
              target="_blank"
              rel="noopener"
              aria-label="Read more about Jalasoft"
            >
              <FacebookWithCircle />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/jalasoft" passHref>
            <Button
              as="a"
              variant="isSocial"
              target="_blank"
              rel="noopener"
              aria-label="Read more about Jalasoft"
            >
              <InstagramWithCircle />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/company/jalasoft/" passHref>
            <Button
              as="a"
              variant="isSocial"
              target="_blank"
              rel="noopener"
              aria-label="Read more about Jalasoft"
            >
              <LinkedinWithCircle />
            </Button>
          </Link>
        </Style.FooterSocialIcons>
      </Style.FooterLogosWrapper>
      <Style.FooterCategory>
        <Style.FooterText>Powered by Jala</Style.FooterText>
      </Style.FooterCategory>
      <Style.FooterCategoryMobile>
        <Style.FooterText>Powered by Jala</Style.FooterText>
      </Style.FooterCategoryMobile>
      <Style.FooterDivider />
      <Style.FooterText>
        &copy; 2023 Jalasoft. All rights reserved
      </Style.FooterText>
    </Style.FooterWrapper>
  )
}

export default Footer
