import * as Style from './styles'
import VerticalPositionTabs, {
  DealsProps
} from 'components/ActiveCampaign/VerticalPositionTabs'
import Container from 'components/Common/Container'

export type DealTabsProps = {
  id?: string
  deals: DealsProps[]
  contacts: any
  tags: any
  globalTags: any
  searchValue?: string
  handleChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void
  tagChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void
}

function DealTabs({
  id,
  deals,
  contacts,
  tags,
  searchValue,
  handleChange,
  tagChange,
  globalTags
}: DealTabsProps) {
  return (
    <Style.OpenPositionTabsWrapper id={id}>
      <Container
        withoutBorder
        fullHeight
        fullHeightMobile
        fullWidth
        fullWidthMobile
      >
        <Style.OpenPositionTabsContent>
          <VerticalPositionTabs
            deals={deals}
            contacts={contacts}
            tags={tags}
            globalTags={globalTags}
            handleChange={handleChange}
            tagChange={tagChange}
            searchValue={searchValue}
          />
        </Style.OpenPositionTabsContent>
      </Container>
    </Style.OpenPositionTabsWrapper>
  )
}

export default DealTabs
