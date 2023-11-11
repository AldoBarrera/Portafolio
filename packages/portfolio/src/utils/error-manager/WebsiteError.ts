export default class WebsiteError extends Error {
  status: any

  constructor(statusCode: any, message: string) {
    super(message)
    this.name = 'WebsiteError'
    this.status = statusCode
  }
}
