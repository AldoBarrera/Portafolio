import { renderWithTheme } from 'utils/tests/helpers'
import Head from '.'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: 'devops' },
    pathname: 'react-developer'
  })
}))
describe('<Head />', () => {
  it('should render Head correctly', async () => {
    renderWithTheme(<Head />)
    await (() => {
      expect(document.querySelector('head')).toMatchSnapshot()
      expect(document.title).toBe('Jalasoft')
    })
  })
})
