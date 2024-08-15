import Card, { CardProps } from '@/app/ui/components/Common/CardV2'
import theme from '@/styles/themeV2'
import css from './ListItemsV2.module.css'

function ListItemsCard({
  description,
  title,
  style,
  configuration
}: Readonly<CardProps>) {
  return (
    <Card
      size="auto"
      title={title}
      description={description}
      bgColor={'secondary'}
      border={`1px solid ${theme.colors.black}`}
      borderRadius={`${theme.border.radius4}`}
      padding={`${theme.spacings.small}`}
      style={style}
      classes={css.ListItemsCard}
      {...configuration}
    />
  )
}

export default ListItemsCard
