import GridProps from './GridDef'
import Card from 'components/Common/Card'
import { childrenUtils, getUnhandledProps } from './utils'
import { GridColumn } from './GridColumn'
import { GridRow } from './GridRow'
import * as Style from './styles'

function Grid(props: GridProps) {
  const { children, columnMinSizes = 300, items } = props

  const rest = getUnhandledProps(Grid, props)

  const buildColumns = () =>
    items.map((item, index) => (
      <Grid.Column key={index} size={item.gridSize}>
        {item.isIcon ? (
          <Card
            key={index}
            size="auto"
            icon={item.icon}
            description={item.description}
            header={item.header}
            title={item.title}
            hasBorder={item.hasBorder}
            padding={item.padding}
            color={item.color}
            {...item}
          />
        ) : (
          <Card
            key={index}
            size="auto"
            image={item.image}
            description={item.description}
            header={item.header}
            title={item.title}
            hasBorder={item.hasBorder}
            padding={item.padding}
            {...item}
          />
        )}
      </Grid.Column>
    ))

  if (!childrenUtils.isNil(children)) {
    return (
      <Style.Grid columnMinSizes={columnMinSizes} {...props} {...rest}>
        {children}
      </Style.Grid>
    )
  }

  if (items && items.length > 0) {
    return (
      <Style.Grid columnMinSizes={columnMinSizes} {...props} {...rest}>
        {buildColumns()}
      </Style.Grid>
    )
  }

  return (
    <Style.Grid columnMinSizes={columnMinSizes} {...props} {...rest}>
      {children}
    </Style.Grid>
  )
}

Grid.Column = GridColumn
Grid.Row = GridRow

export default Grid
export type { GridProps }
