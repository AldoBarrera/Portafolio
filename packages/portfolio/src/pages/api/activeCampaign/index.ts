import ErrorManager from 'utils/error-manager'
import { addContactToList } from 'utils/activeCampaign/resources'

export default async function handler(req, res) {
  try {
    if (
      req.method === 'POST' &&
      typeof req.body === 'object' &&
      !Array.isArray(req.body) &&
      req.body !== null
    ) {
      await addContactToList(req.body, req.body.listId)
    }
    res.status(200).json({ ok: '' })
  } catch (e) {
    ErrorManager.addInfo(e)
    res.status(500).json({ error: e })
  }
}
