import React from 'react'
import dynamic from 'next/dynamic'
import Container, {
  ContainerV3Props
} from '@/app/ui/components/Common/ContainerV3'
import ListItemsCard from '@/app/ui/components/Common/Cards/ListItemsV2'
import { CardProps } from '@/app/ui/components/Common/CardV2'
import Grid from '@/app/ui/components/Common/GridV2'
const Slider = dynamic(() => import('@/app/ui/components/Common/SliderV2'))
import TextV2, { TextV2Props } from '@/app/ui/components/Common/TextV2'
import { getText } from '@/utils/app'
import theme from '@/styles/themeV2'
import css from './ListItemsV2.module.css'

export type ListItemsV2Props = {
  title: TextV2Props
  subtitle: TextV2Props
  list: CardProps[]
  container?: ContainerV3Props
}

const COLUMNS_NUMBER = 6
const COLUMNS_MIN_SIZE = 120

function ListItemsV2({
  title,
  subtitle,
  list,
  container
}: Readonly<ListItemsV2Props>) {
  return (
    <Container
      bgColor="gray4"
      padding={`${theme.spaces.xlarge} ${theme.spaces.xxxlarge}`}
      paddingMobile={`${theme.spaces.large} 0`}
      flex={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: `${theme.grid.gap}`
      }}
      flexMobile={{
        flexDirection: 'column',
        alignItems: 'center',
        gap: `${theme.grid.gap}`
      }}
      {...container}
      {...container?.configuration}
    >
      {title && (
        <TextV2
          style={{ textAlign: 'center', ...title.style }}
          {...(title as TextV2Props)}
          {...title.configuration}
        >
          {getText(title)}
        </TextV2>
      )}
      {subtitle && (
        <TextV2
          style={{ textAlign: 'center', ...subtitle.style }}
          {...(subtitle as TextV2Props)}
          {...subtitle.configuration}
        >
          {getText(subtitle)}
        </TextV2>
      )}
      <Grid
        columns={COLUMNS_NUMBER}
        columnMinSize={COLUMNS_MIN_SIZE}
        gap={theme.grid.gap}
        classes={css.Desktop}
      >
        {list?.map((item, index) => {
          return <ListItemsCard key={index} {...item} />
        })}
      </Grid>
      <Grid classes={css.Mobile}>
        <Slider hasDots>
          {list?.map((item, index) => (
            <React.Fragment key={index}>
              <ListItemsCard key={index} {...item} />
            </React.Fragment>
          ))}
        </Slider>
      </Grid>
    </Container>
  )
}

export default ListItemsV2
