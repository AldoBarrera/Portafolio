import axios from 'axios'
export const fileUpload = async ({ file, name, folder }) => {
  try {
    const url = `/api/upload/`
    const formData = new FormData()
    const newName = `${name.replaceAll(' ', '_')}_${file.name}`
    formData.append('file', file, newName)
    formData.append('folder', folder)
    const dataResult = await axios.post(url, formData)
    return dataResult
  } catch (error) {
    console.log(error.response.data.error)
    return { data: { url: 'An Error has ocurred when upload file' } }
  }
}
