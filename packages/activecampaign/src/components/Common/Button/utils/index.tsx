export const getUrlFromConditional = (button, utm) => {
  const conditional = button.configuration?.conditional
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
  return button.url
}
export default getUrlFromConditional
