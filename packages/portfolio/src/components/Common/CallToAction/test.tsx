import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CallToAction from '.'
import {
  withButtonMock,
  withTitleButtonMock,
  withTitleDescriptionButtonMock,
  withTitleDescriptionNoButtonMock
} from './mock'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {}
  })
}))

describe('<CallToAction />', () => {
  it('should render <CallToAction /> with only button', () => {
    renderWithTheme(<CallToAction {...withButtonMock} />)
    expect(
      screen.getByRole('link', { name: withButtonMock.button.label })
    ).toBeInTheDocument()
  })

  it('should render <CallToAction /> with title and button', () => {
    renderWithTheme(<CallToAction {...withTitleButtonMock} />)
    expect(
      screen.getByRole('heading', { name: withTitleButtonMock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: withTitleButtonMock.button.label })
    ).toBeInTheDocument()
  })

  it('should render <CallToAction /> with title, description and button', () => {
    renderWithTheme(
      <CallToAction
        {...withTitleDescriptionButtonMock}
        hasDescriptionLeftMobile
      />
    )
    expect(
      screen.getByRole('heading', {
        name: withTitleDescriptionButtonMock.title
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(withTitleDescriptionButtonMock.description)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: withTitleDescriptionButtonMock.button.label
      })
    ).toBeInTheDocument()
  })

  it('should render <CallToAction /> with title and description', () => {
    renderWithTheme(
      <CallToAction
        {...withTitleDescriptionNoButtonMock}
        hasDescriptionLeftMobile
      />
    )
    expect(
      screen.getByRole('heading', {
        name: withTitleDescriptionNoButtonMock.title
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(withTitleDescriptionNoButtonMock.description)
    ).toBeInTheDocument()

    expect(
      screen.queryByText(withButtonMock.button.label)
    ).not.toBeInTheDocument()
  })
})
