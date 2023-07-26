import { location } from 'constants/maintenance'
import SiteLayout from 'layouts/SiteLayout'
import Location from 'components/Common/Location'

const Error = () => {
  return (
    <SiteLayout>
      <Location {...location} />
    </SiteLayout>
  )
}

export default Error
