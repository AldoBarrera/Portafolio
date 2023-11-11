import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const useUtmQuery = () => {
  const {
    query: { utm_source, utm_campaign }
  } = useRouter()
  const [utmSource, setUtmSource] = useState('')
  const [utmCampaign, setUtmCampaign] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined' && utm_source) {
      setUtmSource(utm_source?.toString())
      setUtmCampaign(utm_campaign?.toString())
    }
  }, [utm_source, utm_campaign])

  return { utmSource, utmCampaign }
}

export default useUtmQuery
