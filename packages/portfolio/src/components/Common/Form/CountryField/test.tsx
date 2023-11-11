import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CountryField from '.'
import { useForm } from 'react-hook-form'

interface FormInputs {
  country: string
}

function CountryFieldTest(props) {
  const { control } = useForm<FormInputs>()
  return <CountryField {...props} control={control} />
}

describe('<CountryField />', () => {
  const handleOnChange = jest.fn()
  const args = {
    placeholder: 'Country*',
    onchange: handleOnChange,
    name: 'test'
  }
  it('should render CountryField correctly', () => {
    renderWithTheme(<CountryFieldTest {...args} />)
    const placeholder = screen.getByText('Country*')
    expect(placeholder).toBeTruthy()
  })
})
