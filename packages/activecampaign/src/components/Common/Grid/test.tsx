import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Grid from '.'
import gridMock, { fixedColumnsSizes } from './mock'
const Card = () => <div data-testid="Mock Card" />
const Group = ({ children }) => (
  <div data-testid="Mock Group Card">{children}</div>
)
Card.Group = Group

jest.mock('components/Common/Card', () => {
  return {
    __esModule: true,
    default: Card
  }
})

describe('<Grid />', () => {
  it('should render Grid correctly with 5 cards', () => {
    renderWithTheme(<Grid items={gridMock.items} />)

    expect(screen.getAllByTestId('Mock Card')).toHaveLength(5)
  })
})

describe('<Grid />', () => {
  it('should render Grid correctly', () => {
    const { container } = renderWithTheme(<Grid {...gridMock} />)
    expect(container.firstChild).toHaveClass('Grid')
  })
})

describe('<Grid />', () => {
  it('should render Grid correctly with 2 Columns', () => {
    renderWithTheme(
      <Grid>
        <Grid.Column data-testid="Column" />
        <Grid.Column data-testid="Column" />
      </Grid>
    )
    expect(screen.getAllByTestId('Column')).toHaveLength(2)
  })
})

describe('<Grid />', () => {
  it('should render Grid correctly with 1 Columns and 1 row', () => {
    renderWithTheme(
      <Grid>
        <Grid.Row data-testid="Row" />
        <Grid.Column data-testid="Column" />
      </Grid>
    )
    expect(screen.getAllByTestId('Column')).toHaveLength(1)
    expect(screen.getAllByTestId('Row')).toHaveLength(1)
  })
})

describe('<Grid />', () => {
  it('should render Column with the correct class', () => {
    const { container } = renderWithTheme(<Grid {...fixedColumnsSizes} />)
    const grid = container.firstChild
    expect(grid.firstChild).toHaveClass('Grid__Column')
  })
})

describe('<Grid />', () => {
  it('should render Row with the correct class', () => {
    const { container } = renderWithTheme(
      <Grid>
        <Grid.Row />
      </Grid>
    )
    const grid = container.firstChild
    expect(grid.firstChild).toHaveClass('Grid__Row')
  })
})

describe('<Grid />', () => {
  it('should render Column and Row', () => {
    const { container } = renderWithTheme(
      <Grid>
        <Grid.Row />
        <Grid.Column />
      </Grid>
    )
    const grid = container.firstChild
    expect(grid.firstChild).toHaveClass('Grid__Row')
    expect(grid.lastChild).toHaveClass('Grid__Column')
  })
})

describe('<Grid />', () => {
  it('should render Columns inside of a Row with a correct class', () => {
    const { container } = renderWithTheme(
      <Grid>
        <Grid.Row>
          <Grid.Column />
          <Grid.Column />
        </Grid.Row>
      </Grid>
    )
    const grid = container.firstChild
    const row = grid.firstChild
    expect(row.firstChild).toHaveClass('Grid__Column')
    expect(row.lastChild).toHaveClass('Grid__Column')
  })
})

describe('<Grid />', () => {
  it('should render all columns inside of a Row', () => {
    const { container } = renderWithTheme(
      <Grid>
        <Grid.Row>
          <Grid.Column />
          <Grid.Column />
        </Grid.Row>
      </Grid>
    )
    const grid = container.firstChild
    const row = grid.firstChild
    expect(row.childNodes.length).toEqual(2)
  })
})
