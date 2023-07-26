import ErrorManager from 'utils/error-manager'

export default function handler(req, res) {
  try {
    if (
      typeof req.body === 'object' &&
      !Array.isArray(req.body) &&
      req.body !== null
    ) {
      ErrorManager.addInfo(req.body)
      res.status(200).json({ ok: '' })
      return
    }
    let ip
    ErrorManager.addInfo(`IpFromBody: ${req.body}`)
    if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'].split(',')[0]
      ErrorManager.addInfo(`x-forwarded-for: ${ip}`)
    } else if (req.headers['x-real-ip']) {
      ip = req.connection.remoteAddress
      ErrorManager.addInfo(`x-real-ip: ${ip}`)
    } else {
      ip = req.connection.remoteAddress
      ErrorManager.addInfo(`remoteAddress: ${ip}`)
    }
    res.status(200).json({ ok: '' })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
