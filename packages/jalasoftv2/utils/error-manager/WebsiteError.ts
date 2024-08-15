export default class WebsiteError extends Error {
  status: any

  constructor(statusCode: number, message: string) {
    super(message)
    this.name = 'WebsiteError'
    this.status = statusCode
  }
}
