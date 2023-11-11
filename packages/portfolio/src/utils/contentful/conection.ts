import { createClient } from 'contentful'
const space = process.env.CONTENTFUL_SPACE_ID || '6qpwqovc2tj9'
const accessToken =
  process.env.CONTENTFUL_ACCESS_KEY ||
  'heeH0CBxjjCSd8aTkhMKIR9KkLv4eXFznFyyUrOFL5M'
const host = process.env.CONTENTFUL_HOST || 'preview.contentful.com'
const client = createClient({
  space,
  accessToken,
  host
})

export default client
