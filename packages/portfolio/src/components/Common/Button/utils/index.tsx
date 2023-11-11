function camelCaseToSnakeCase(camelCaseString) {
  return camelCaseString.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
}

export const addUTMsToURL = (url, utmParameters) => {
  if (typeof window === 'undefined') {
    return url
  }
  if (
    !utmParameters.utmSource &&
    !utmParameters.utmCampaign &&
    !utmParameters.utmMedium &&
    !utmParameters.utmKeyword &&
    !utmParameters.utmId
  ) {
    return url
  }
  const separator = url.includes('?') ? '&' : '?'
  let updatedURL = url

  const utmKeys = Object.keys(utmParameters)
  const validUTMs = utmKeys.filter((key) => utmParameters[key])

  if (validUTMs.length > 0) {
    const utmQuery = validUTMs
      .map(
        (key) =>
          `${camelCaseToSnakeCase(key)}=${encodeURIComponent(
            utmParameters[key]
          )}`
      )
      .join('&')
    updatedURL += `${separator}${utmQuery}`
  }

  return updatedURL
}

export const getUrlUsingConfiguration = (button, utm) => {
  const conditional = button.configuration?.conditional
  const hasUtm = button.configuration?.hasUtm
  if (conditional && utm) {
    for (let i = 0; i < conditional.length; i++) {
      const review = {
        utmSource: conditional[i].utmSource,
        utmCampaign: conditional[i].utmCampaign
      }
      if (
        Object.entries(utm).toString() === Object.entries(review).toString()
      ) {
        return conditional[i].url
      }
    }
  }
  if (hasUtm && utm) {
    return addUTMsToURL(button.url, utm)
  }
  return button.url
}
export default getUrlUsingConfiguration
