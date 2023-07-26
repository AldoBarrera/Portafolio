import { getSearchTags } from 'utils/activeCampaign/resources'

export default async function handler(req, res) {
  try {
    const { limit, search, type } = req.query
    const { tags } = await getSearchTags(limit, search, type)
    res.status(200).json(tags)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
