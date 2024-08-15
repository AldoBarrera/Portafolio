import './globals.css'
import { Manrope } from 'next/font/google'
import Contentful from '@/services/contentful'
import Nav from '@/app/ui/components/Common/Nav'
import Footer from '@/app//ui/components/Common/Footer'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { footer, navbar, logo } = await Contentful.getGlobalConfig()
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Nav {...navbar} logo={logo} />
        {children}
        <Footer {...footer} logo={logo} />
      </body>
    </html>
  )
}
