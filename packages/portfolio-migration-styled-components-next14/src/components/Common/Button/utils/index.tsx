import { ButtonsType } from '../index'
function camelCaseToSnakeCase(camelCaseString: string) {
  return camelCaseString.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
}

type UTMParameters = {
  utmSource?: string;
  utmCampaign?: string;
  utmMedium?: string;
  utmKeyword?: string;
  utmId?: string;
  [key: string]: string | undefined;
}

export const addUTMsToURL = (url: string | string[], utmParameters: UTMParameters) => {
  if (typeof window === 'undefined') {
    return url;
  }

  const { utmSource, utmCampaign, utmMedium, utmKeyword, utmId } = utmParameters;

  if (!utmSource && !utmCampaign && !utmMedium && !utmKeyword && !utmId) {
    return url;
  }

  const separator = url.includes('?') ? '&' : '?';
  let updatedURL = url;

  const validUTMs = Object.entries(utmParameters)
    .filter(([key, value]) => value !== undefined && key.startsWith('utm'))
    .map(([key, value]) => `${camelCaseToSnakeCase(key)}=${encodeURIComponent(value as string)}`)
    .join('&');

  if (validUTMs) {
    updatedURL += `${separator}${validUTMs}`;
  }

  return updatedURL;
};

export const getUrlUsingConfiguration = (button: ButtonsType, utm: UTMParameters) => {
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
