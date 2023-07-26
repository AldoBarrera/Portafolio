import { getDealByStage } from 'utils/activeCampaign/resources'

export default async function handler(req, res) {
  try {
    const { idPipeline, idStage, tagValue } = req.query
    const result = await getDealByStage(idPipeline, idStage, tagValue)
    res.status(200).json(result)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
