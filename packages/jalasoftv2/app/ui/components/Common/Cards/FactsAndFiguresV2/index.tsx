import Card, { CardProps } from '@/app/ui/components/Common/CardV2'
import theme from '@/styles/themeV2'
import css from './FactsAndFiguresV2.module.css'

function FactsAndFiguresCard({ description, image }: Readonly<CardProps>) {
  return (
    <Card
      size="medium"
      description={description}
      image={image}
      textAlign="center"
      padding={`${theme.spacings.small}`}
      flex={{
        alignItems: 'center',
        gap: theme.grid.gap2
      }}
      style={
        {
          '--factsandfigurescard-flex-gap': theme.grid.gap,
          '--factsandfigurescard-padding': theme.spaces.xsmall
        } as React.CSSProperties
      }
      classes={css.FactsAndFiguresCard}
    />
  )
}

export default FactsAndFiguresCard
