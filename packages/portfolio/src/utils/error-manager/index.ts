import WebsiteError from '../error-manager/WebsiteError'
import { logger } from '../logger/logger'
import { STATUS_CODES } from '../../constants/errors'

const addError = (error: any, page: string) => {
  logger.error(`${page} - ${error.status} - ${error.message}`)
}

const addInfo = (message: string) => {
  logger.info(message)
}

const getErrorCode = (res: any) => {
  if (res.isAxiosError) {
    return STATUS_CODES.BAD_REQUEST
  }
  if (isSuccessfulResponse(res)) {
    return false
  }
  if (isNotFound(res)) {
    return STATUS_CODES.NOT_FOUND
  }
  if (res.status) {
    if (res.ok) return false
    return res.status
  }
  return STATUS_CODES.INTERNAL_SERVER_ERROR
}

const getErrorMessage = async (res: any, customMessage: string) => {
  if (res.message) return res.message
  if (res instanceof Response) {
    const response = await res.json()
    return customMessage + ` - ${response.message}`
  }
  return customMessage
}

const getError = async (error: any, customMessage: string) => {
  let errorCode = null
  if (error instanceof WebsiteError) {
    return error
  } else {
    errorCode = getErrorCode(error)
  }
  const message = await getErrorMessage(error, customMessage)
  return { status: errorCode, message }
}

const throwError = ({ status, message }) => {
  throw new WebsiteError(status, message)
}

const isSuccessfulResponse = (res: any) => {
  if (
    res &&
    Object.keys(res).length === 0 &&
    Object.getPrototypeOf(res) === Object.prototype
  )
    return false
  if (res.details && res.details.errors && res.details.errors.length !== 0)
    return false
  if (res.status) return res.ok
  return true
}

const isNotFound = (res: any) => {
  if (
    res &&
    Object.keys(res).length === 0 &&
    Object.getPrototypeOf(res) === Object.prototype
  )
    return true
  return false
}

export default {
  addError,
  addInfo,
  getErrorCode,
  getErrorMessage,
  getError,
  throwError
}
