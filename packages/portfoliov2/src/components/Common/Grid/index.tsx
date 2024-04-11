import GridProps from './GridDef'
import { GridColumn } from './GridColumn'
import { GridRow } from './GridRow'
import * as Style from './styles'
import DynamicSection from 'utils/DynamicComponent'

function Grid(props: GridProps) {
  const Columns = props.columns?.map((column, index) => (
    <Grid.Column key={index} {...column}>
      {column?.sections?.map((block, index) => DynamicSection(block, index))}
    </Grid.Column>
  ))
  const { children, columnMinSizes = 300 } = props
  if (children) {
    return (
      <Style.Grid columnMinSizes={columnMinSizes} {...props}>
        {children}
      </Style.Grid>
    )
  }
  return (
    <Style.GridWrapper>
      <Style.Grid {...props}>{Columns}</Style.Grid>
    </Style.GridWrapper>
  )
}

Grid.Column = GridColumn
Grid.Row = GridRow

export default Grid
export type { GridProps }
