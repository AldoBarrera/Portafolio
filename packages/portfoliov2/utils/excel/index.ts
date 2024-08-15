import * as fs from 'fs'
import { IContact } from 'services/database/IContact'
import * as xlsx from 'xlsx'

export const localFileName = 'report'

export function updateExcelWithContactData(filename, contact: IContact) {
  let workbook
  let worksheet
  if (fs.existsSync(filename)) {
    workbook = xlsx.readFile(filename)
    const sheetName = workbook.SheetNames[0]
    worksheet = workbook.Sheets[sheetName]
  } else {
    workbook = xlsx.utils.book_new()
    worksheet = xlsx.utils.aoa_to_sheet([Object.keys(contact)])
  }
  const newRow = getEmptyRow(worksheet)
  const headers = Object.keys(contact)
  const values = []
  headers.forEach((header) => {
    values.push(
      header === '_id' ? contact[header].toHexString() : contact[header]
    )
  })
  const sheet1Exists = workbook.SheetNames.includes('Sheet1')
  if (!sheet1Exists) {
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
  }
  xlsx.utils.sheet_add_aoa(worksheet, [values], { origin: 'A' + newRow })
  xlsx.writeFile(workbook, filename)
}

function getEmptyRow(worksheet) {
  let rowIndex = 1
  while (worksheet['A' + rowIndex]) {
    rowIndex++
  }
  return rowIndex
}
