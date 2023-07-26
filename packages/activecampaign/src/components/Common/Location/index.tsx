import Image from 'components/Common/Image'
import Text from 'components/Common/Text'
import Container from '../Container'
import * as Style from './styles'

function Location({ list }) {
  return (
    <Container>
      <Style.LocationWrapper>
        {list.map((location, index) => (
          <Style.LocationAddress key={index}>
            <Style.LocationImage>
              {typeof location.image == 'string' ? (
                <Image loader={() => location.image} src={location.image} />
              ) : (
                <Image src={location.image?.file?.url} />
              )}
            </Style.LocationImage>
            <Style.LocationInfo>
              <Text type="h5">{location.title}</Text>
              <Text>{location.description}</Text>
            </Style.LocationInfo>
          </Style.LocationAddress>
        ))}
      </Style.LocationWrapper>
    </Container>
  )
}

export default Location
