import { screen } from '@testing-library/react'
import Input from 'components/Common/Form/Input'
import { renderWithTheme } from 'utils/tests/helpers'
import Form from '.'

describe('<Form />', () => {
  it('should render Form component correctly', () => {
    renderWithTheme(
      <Form buttonLabel="Join Jalasoft" columns={2}>
        <Input type="text" name="name" placeholder="Name" />
      </Form>
    )

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /join jalasoft/i })
    ).toBeInTheDocument()
  })
})
