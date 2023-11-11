import * as Style from './styles'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import Text from 'components/Common/Text'
const siteKey =
  process.env.RECAPTCHA_SITE_KEY || '6Lezh3QfAAAAAHYnCIUaMlks5soB0UuKzFy2LVLG'

const Recaptcha = (params) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const onChange = () => {
    params.setIsValidRecaptcha(recaptchaRef.current.getValue())
  }

  if (params.isSubmitted === true || params.isSubmitted === 2) {
    recaptchaRef.current.reset()
  }

  return (
    <Style.RecaptchaWrapper>
      <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} onChange={onChange} />
      <Text type="p">Please check the box to let us know you are human.</Text>
    </Style.RecaptchaWrapper>
  )
}

export default Recaptcha
