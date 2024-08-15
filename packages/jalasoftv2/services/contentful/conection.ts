import { createClient } from 'contentful'
const space = process.env.CONTENTFUL_SPACE_ID || 'pupx38p1xfcl'
const accessToken =
  process.env.CONTENTFUL_ACCESS_KEY ||
  'InhbY5WCIO58jSFkW88aVZ-mLzIHo5g3obKmo0JTjWo'
const host = process.env.CONTENTFUL_HOST || 'preview.contentful.com'
const client = createClient({
  space,
  accessToken,
  host
})

export default client
