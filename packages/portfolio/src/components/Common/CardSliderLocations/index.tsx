import * as Style from './styles'
import { CircleFill } from '@styled-icons/bootstrap/CircleFill'
import Card from 'components/Common/Card'
import Image, { ImageType } from 'components/Common/Image'
import Grid from 'components/Common/Grid'
import Slider, { SliderSettings } from 'components/Common/Slider'
import Text from 'components/Common/Text'
import theme from 'styles/theme'

export type CardSliderLocationsProps = {
  title
  description: string
  redTitleSection: string
  image: ImageType | string
  list: any[]
  backgroundColor?: keyof typeof theme.colors
}

const settingsAutoplay: SliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1
      }
    }
  ]
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

const RenderLocationsList = (list) =>
  list.map((item, index) => (
    <Style.LocationsItems key={index}>
      <Style.LocationsItem key={index}>{item}</Style.LocationsItem>
    </Style.LocationsItems>
  ))

const renderCardInfo = (list) => {
  return list?.map(
    (item, index) =>
      !item.list && (
        <Card
          key={index}
          size="auto"
          image={item.image}
          description={item.description}
          title={item.title}
          color={item.color}
          hasBorder={false}
          padding={'20px'}
          headerProperties={{
            classType: 'classh3',
            color: item.color == 'redPrimary' ? 'white' : 'black'
          }}
          descriptionProperties={{
            color: item.color == 'redPrimary' ? 'white' : 'black'
          }}
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
      <Style.CardSliderContainer>
        {list.map(
          (item, index) =>
            item?.list && (
              <Slider settings={settingsAutoplay} key={index}>
                {RenderLocationsList(item.list)}
              </Slider>
            )
        )}
      </Style.CardSliderContainer>
    </Style.CardSliderLocationsWrapper>
  )
}

export default CardSliderLocations
