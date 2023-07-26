import * as Style from './styles'
import Search from 'components/ActiveCampaign/Search'
import SiteLayout from 'layouts/SiteLayout'

function ACLayout({ dealStages }) {
  return (
    <SiteLayout>
      <Style.OpenPositionsWrapper>
        {dealStages && (
          <Search id="dealStages" data={dealStages} CompName={'DealTabs'} />
        )}
      </Style.OpenPositionsWrapper>
    </SiteLayout>
  )
}

export default ACLayout
