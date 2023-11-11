import log4js from 'log4js'

const fileName = process.env.FILE_NAME || 'log'
const currentDate = new Date().toISOString().split('T')[0]

log4js.configure({
  appenders: {
    console: { type: 'console' },
    app: { type: 'file', filename: `logs/${fileName}-${currentDate}.log` }
  },
  categories: {
    default: {
      appenders: ['console', 'app'],
      level: 'trace'
    }
  }
})

export default log4js

export const logger = log4js.getLogger('app')
