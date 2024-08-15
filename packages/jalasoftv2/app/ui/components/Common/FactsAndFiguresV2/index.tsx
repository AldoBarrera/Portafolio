import dynamic from 'next/dynamic'
import { CardProps } from '../CardV2'
import ContainerV3, {
  ContainerV3Props
} from '@/app/ui/components/Common/ContainerV3'
import FactsAndFiguresCard from '@/app/ui/components/Common/Cards/FactsAndFiguresV2'
import Grid from '@/app/ui/components/Common/GridV2'
const Slider = dynamic(() => import('@/app/ui/components/Common/SliderV2'))
import Text, { TextV2Props } from '@/app/ui/components/Common/TextV2'
import { getText } from '@/utils/app'
import theme from '@/styles/themeV2'
import css from './FactsAndFiguresV2.module.css'

export type FactsAndFiguresV2Props = {
  title: TextV2Props
  list: CardProps[]
  container?: ContainerV3Props
}

const COLUMNS_NUMBER = 6
const COLUMNS_MIN_SIZE = 120

function FactsAndFiguresV2({
  title,
  list,
  container
}: Readonly<FactsAndFiguresV2Props>) {
  return (
    <ContainerV3
      bgColor="secondary"
      padding={`${theme.spaces.xlarge} ${theme.spaces.xxxlarge}`}
      mobileConfig={{ padding: `${theme.spaces.large} 0` }}
      flex={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: `${theme.grid.gap6}`
      }}
      flexMobile={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: `${theme.grid.gap4}`
      }}
      {...container}
      {...container?.configuration}
    >
      {title && (
        <Text style={{ textAlign: 'center', ...title.style }} {...title}>
          {getText(title)}
        </Text>
      )}
      <Grid
        columns={COLUMNS_NUMBER}
        columnMinSize={COLUMNS_MIN_SIZE}
        gap={theme.grid.gap}
        classes={css.Desktop}
      >
        {list?.map((item, index) => {
          return <FactsAndFiguresCard key={index} {...item} />
        })}
      </Grid>
      <Grid classes={css.Mobile}>
        <Slider hasDots>
          {list?.map(
            (item, index) =>
              index % 3 === 0 && (
                <div key={index} className={css.CardGroup}>
                  <FactsAndFiguresCard {...item} />
                  {list[index + 1] && (
                    <FactsAndFiguresCard {...list[index + 1]} />
                  )}
                  {list[index + 2] && (
                    <FactsAndFiguresCard {...list[index + 2]} />
                  )}
                </div>
              )
          )}
        </Slider>
      </Grid>
    </ContainerV3>
  )
}

export default FactsAndFiguresV2
