import { getCustomFieldsByIdContact } from 'utils/activeCampaign/resources'

export default async function handler(req, res) {
  try {
    const { idContact } = req.query
    const { fieldValues } = await getCustomFieldsByIdContact(idContact)
    res.status(200).json(fieldValues)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
