import Text from 'components/Common/Text'
import * as Style from './styles'
import { TextProps } from 'components/Common/Text'

export type ContactUsProps = {
  id?: string
  title?: TextProps
  description?: TextProps
  errorMessage?: string
  successMessage?: string
  service?: string
}

function ContactUs({ children, ...props }) {
  const { id, title, description } = props
  return (
    <>
      <Style.ContactUsSectionWrapper id={id}>
        <Style.ContactUsHeaderWrapper>
          {title && (
            <Text type="h2" {...title} {...title?.configuration}>
              {title?.text}
            </Text>
          )}
          {description && (
            <Text
              key="description"
              type="pHero"
              {...description}
              {...description.configuration}
            >
              {description.text}
            </Text>
          )}
        </Style.ContactUsHeaderWrapper>
        {children}
      </Style.ContactUsSectionWrapper>
    </>
  )
}

export default ContactUs
