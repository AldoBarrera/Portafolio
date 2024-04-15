import * as Style from './styles'
import { CircleFill } from '@styled-icons/bootstrap/CircleFill'
import Card, { CardProps} from 'components/Common/Card'
import Image, { ImageType } from 'components/Common/Image'
import Grid from 'components/Common/Grid'
import Slider, { SliderSettings } from 'components/Common/Slider'
import Text from 'components/Common/Text'
import theme from 'styles/theme'

export type CardSliderLocationsProps = {
  title: string
  description: string
  redTitleSection: string
  image: ImageType | string
  list: CardProps[]
  backgroundColor?: keyof typeof theme.colors
}

const settings: SliderSettings = {
  customPaging: function renderDots() {
    return <CircleFill />
  },
  dots: true,
  dotsClass: 'slick-dots slick-dots-case-studies',
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const renderCardInfo = (list: CardProps[]) => {
  return list?.map(
    (item, index) =>
      (
        <Card
          key={index}
          image={item.image}
          content={item.content}
          color={item.color}
          hasBorder={false}
          padding={'20px'}
          alt={item.alt}
          centered
          textAlign="center"
        />
      )
  )
}

function CardSliderLocations({
  title,
  description,
  image,
  list,
  backgroundColor
}: CardSliderLocationsProps) {
  return (
    <Style.CardSliderLocationsWrapper backgroundColor={backgroundColor}>
      <Text classType="classh2">{title}</Text>
      <Text classType="classh5">{description}</Text>
      <Grid gap={'40px'} columnMinSizes={0}>
        <Style.CardSliderLocationsImage>
          <Image
            src={typeof image == 'string' ? image : image?.file?.url}
            alt={typeof image == 'string' ? image : image?.description}
          />
        </Style.CardSliderLocationsImage>
        <Style.CardSliderLocationsInfo>
          <Style.CardSliderLocationsInfoWeb>
            <Grid columnsNumber={3} columnMinSizes={25}>
              {renderCardInfo(list)}
            </Grid>
          </Style.CardSliderLocationsInfoWeb>
          <Style.CardSliderLocationsInfoMobile>
            <Slider settings={settings}>{renderCardInfo(list)}</Slider>
          </Style.CardSliderLocationsInfoMobile>
        </Style.CardSliderLocationsInfo>
      </Grid>
    </Style.CardSliderLocationsWrapper>
  )
}

export default CardSliderLocations
