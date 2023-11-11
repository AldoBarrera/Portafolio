import { useEffect, useState } from 'react'
import LayoutForm, {
  ContactUsProps
} from 'components/Common/ContactUs/layoutForm'
import Form1 from './form1'
import * as Style from './styles'

function ContactUs(props: ContactUsProps) {
  const [scrollDir, setScrollDir] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (!scrollDir) {
        setScrollDir(true)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])
  return (
    <>
      <LayoutForm {...props}>
        {scrollDir ? <Form1 {...props} /> : <Style.ContactUsForm1Loading />}
      </LayoutForm>
    </>
  )
}

export default ContactUs
