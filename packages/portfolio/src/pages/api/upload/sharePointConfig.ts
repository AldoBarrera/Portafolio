export const site = process.env.SHAREPOINT_SITE || 'sites/testA/'

const domain =
  process.env.SHAREPOINT_DOMAIN || 'https://jalasoft.sharepoint.com/'

const username =
  process.env.SHAREPOINT_USERNAME || 'rep.formularios@Jalasoft.onmicrosoft.com'

const password = process.env.SHAREPOINT_PASSWORD || 'Faf62906'

export const coreOptions = {
  siteUrl: domain + site,
  notification: true,
  checkin: true,
  checkinType: 1
}

export const creds = {
  username,
  password,
  domain
}

export interface IFileContentOptions {
  fileName: string
  fileContent: string | Buffer
  folder: string
}

export const fileOptions: IFileContentOptions = {
  folder: 'Shared Documents',
  fileName: 'error.txt',
  fileContent: ''
}
