import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'fs'
import { coreOptions, creds, fileOptions, site } from './sharePointConfig'
import { spsave } from 'spsave'

type ResponseData = {
  url?: string
  error?: string
}

export const config = {
  api: {
    bodyParser: false
  }
}

const uploadFolder = process.env.UPLOAD_FOLDER || './public/uploads'

const buildCompleteSharePointUrlFile = ({
  siteUrl,
  rootFolder,
  site,
  fileName,
  folder
}) => {
  return `${siteUrl}${rootFolder}/Forms/AllItems.aspx?id=/${site}${rootFolder}${folder}/${fileName}&parent=${site}${rootFolder}${folder}`
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const form = new formidable.IncomingForm()
  form.uploadDir = uploadFolder
  form.keepExtensions = true
  if (!fs.existsSync(form.uploadDir)) fs.mkdirSync(form.uploadDir)
  form.parse(req, (err, fields, files) => {
    const fileName = files?.file?.originalFilename
    const path = form?.uploadDir + '/' + fileName
    const rootFolder = fileOptions.folder
    if (fs.existsSync(path)) {
      fileOptions.fileContent = fs.readFileSync(path)
      fileOptions.fileName = fileName
      fileOptions.folder = rootFolder + fields?.folder
      spsave(coreOptions, creds, fileOptions)
        .then(function () {
          res.status(200).json({
            url: buildCompleteSharePointUrlFile({
              siteUrl: coreOptions.siteUrl,
              rootFolder,
              site,
              fileName,
              folder: fields?.folder
            })
          })
        })
        .catch(function () {
          res.status(500).json({ error: 'failed to load file to share point' })
        })
        .finally(function () {
          fileOptions.folder = rootFolder
          fs.unlinkSync(path)
        })
    }
  })

  form.on('fileBegin', function (name, file) {
    file.filepath = form.uploadDir + '/' + file.originalFilename
  })
  form.on('error', function () {
    res.status(500).json({ error: 'an error has occured with form upload' })
  })

  form.on('aborted', function () {
    res.status(500).json({ error: 'user aborted upload' })
  })

  form.on('end', function (data) {
    console.log(data)
    console.log('-> upload done')
  })
}
