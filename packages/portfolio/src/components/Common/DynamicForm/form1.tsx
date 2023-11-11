import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ButtonProps } from 'components/Common/Button'
import Form from 'components/Common/Form'
import Input from 'components/Common/Form/Input'
import Select from 'components/Common/Form/Select'
import TextArea from 'components/Common/Form/TextArea'
import dynamic from 'next/dynamic'
const PhoneField = dynamic(() => import('components/Common/Form/PhoneField'))
import Message from 'components/Common/Form/Message'
import { ContactUsProps } from 'components/Common/ContactUs/layoutForm'
import * as IntegrationServices from 'services'
import { useRouter } from 'next/router'
const Recaptcha = dynamic(() => import('components/Common/Form/Recaptcha'))
import Checkbox from 'components/Common/Form/Checkbox'
import { sendLogToApiFromClient } from 'utils/error-manager/client'
import { submit } from './utils'
import * as Style from './styles'

export type ResponseType = {
  id?: string
}
export interface FormInputs {
  name: string
  email: string
  phoneNumber: string
  howCanWeHelp: string
  interest: string
  receiveInformation: string
  consentPrivacy: string
  origin: string
  service: string
}

export const logs = async (FormInputs: FormInputs): Promise<ResponseType> => {
  console.log('Se Logeo los datos')
  const res = await sendLogToApiFromClient(FormInputs)
  return res
}

function Form1({ errorMessage, successMessage, service }: ContactUsProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control
  } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      interest: '',
      howCanWeHelp: '',
      receiveInformation: '',
      consentPrivacy: ''
    }
  })

  const [isSubmitted, setIsSubmitted] = useState(0)
  const [isValidRecaptcha, setIsValidRecaptcha] = useState(null)
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false)
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
  const [customErrorMessage, setCustomErrorMessage] = useState('')
  const handleDismiss = () => {
    setDisplaySuccessMessage(false)
  }
  useEffect(() => {
    if (isSubmitted === 2) {
      setDisplaySuccessMessage(true)
      setDisplayErrorMessage(false)
    }
  }, [isSubmitted])

  useEffect(() => {
    if (isValidRecaptcha) setCustomErrorMessage('')
  }, [isValidRecaptcha])
  const {
    query: { id }
  } = useRouter()
  const router = useRouter()
  const route = router?.pathname === '/' ? '/for-companies' : router?.pathname

  const onSubmit: SubmitHandler<FormInputs> = async (FormInputs) => {
    if (isValidRecaptcha) {
      try {
        setIsSubmitted(1)
        FormInputs.origin = route.includes('blog') ? `/blog/${id}` : route
        FormInputs.service = service
        //await addContactToListFromClient(FormInputs)
        submit<ResponseType>({
          FormInputs,
          services: IntegrationServices[FormInputs.service]
        })
        setIsSubmitted(2)
        setTimeout(() => {
          setIsSubmitted(0)
        }, 2000)
        reset()
      } catch (e) {
        setDisplayErrorMessage(true)
        setIsSubmitted(0)
        reset()
        await sendLogToApiFromClient(e)
      }
    } else {
      setCustomErrorMessage('Invalid Recaptcha')
    }
  }

  return (
    <Style.Form1Wrapper>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        buttonLabel="Let's talk"
        columns={1}
        buttonAttributes={{
          variant: 'isPrimary' as ButtonProps['variant'],
          size: 'large' as ButtonProps['size']
        }}
        isSubmitted={isSubmitted}
        errorMessage={errorMessage}
        displayErrorMessage={displayErrorMessage}
        customErrorMessage={customErrorMessage}
      >
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Name*"
          validation={{
            ...register('name', {
              required: { value: true, message: 'This is a required field.' },
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: 'The name accepts only letters'
              }
            })
          }}
          error={errors.name && errors.name.message}
        />

        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email*"
          validation={{
            ...register('email', {
              required: { value: true, message: 'This is a required field.' },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                message: 'The email format is invalid'
              }
            })
          }}
          error={errors.email && errors.email.message}
        />

        <PhoneField
          id="phoneNumber"
          name="phoneNumber"
          defaultOption="phoneNumber"
          defaultCountry="US"
          placeholder="(123) 456-7890"
          control={control}
          error={errors.phoneNumber && errors.phoneNumber.message}
        />

        <Select
          id="interest"
          name="interest"
          defaultOption="Select your interest"
          options={[
            'Jalasoft Services',
            'Join Our team',
            'Apply to our programs',
            'Partnerships',
            'Others'
          ]}
          validation={{ ...register('interest', { required: true }) }}
          error={errors.interest && 'This is a required field.'}
        />

        <TextArea
          id="howCanWeHelp"
          name="howCanWeHelp"
          placeholder="How can we help?*"
          validation={{ ...register('howCanWeHelp', { required: true }) }}
          error={
            errors.howCanWeHelp && 'Please type the requested information.'
          }
        />
        <Style.CheckboxGroup>
          <Checkbox
            id="receiveInformation"
            name="receiveInformation"
            label={
              'I want to receive information about news, job offers, trainings and events from Jalasoft.'
            }
            validation={{
              ...register('receiveInformation', {
                required: {
                  value: false,
                  message: 'Receive Information is required'
                }
              })
            }}
            error={
              errors.receiveInformation && errors.receiveInformation.message
            }
          />
          <Checkbox
            id="consentPrivacy"
            name="consentPrivacy"
            label={
              'I allow Jalasoft to store and process the personal information submitted above and agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a>.'
            }
            hasLabelLink={true}
            validation={{
              ...register('consentPrivacy', {
                required: {
                  value: true,
                  message: 'This is a required field.'
                }
              })
            }}
            error={errors.consentPrivacy && errors.consentPrivacy.message}
          />
        </Style.CheckboxGroup>
        <Recaptcha
          setIsValidRecaptcha={setIsValidRecaptcha}
          isSubmitted={isSubmitted}
        />
        {displaySuccessMessage && !displayErrorMessage && (
          <Message
            onDismiss={handleDismiss}
            header="Success"
            positive
            content={
              successMessage
                ? successMessage
                : 'Thank you! We received your message and we will contact you soon.'
            }
          />
        )}
      </Form>
    </Style.Form1Wrapper>
  )
}

export default Form1
