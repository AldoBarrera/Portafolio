import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Nav from '.'

describe('<Nav />', () => {
  it('should render the Nav component with the links correctly', () => {
    renderWithTheme(<Nav />)
    expect(screen.getAllByRole('link', { name: /Pipelines/i })).toHaveLength(2)
  })
})
