import React from 'react'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('components/Common/Nav'))
import Footer from 'components/Common/Footer'
import ACLayoutModal from 'layouts/ACLayout/ACLayoutModal'
const gtmId = process.env.NEXT_PUBLIC_GOOGLE_CONTAINER_ID || 'GTM-NXL9ZG7'

const BackToTopButton = dynamic(
  () => import('components/Common/BackToTopButton')
)
import * as Style from './styles'

interface IProps {
  children: React.ReactNode
  nav?: any
  ciencePixel?: string
}

const SiteLayout = ({ ciencePixel, children, ...props }: IProps) => {
  return (
    <Style.SiteLayoutWrapper>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display: none; visibility: hidden;" />`
        }}
      />
      {ciencePixel && (
        <img
          src={ciencePixel}
          width="1"
          height="1"
          alt="The pixel"
          style={{
            display: 'none',
            position: 'fixed',
            left: '-9999px',
            bottom: '0'
          }}
        />
      )}
      <Nav {...props.nav} />
      <div {...props}>{children}</div>
      <BackToTopButton />
      <Footer />
      <ACLayoutModal />
    </Style.SiteLayoutWrapper>
  )
}

export default SiteLayout
