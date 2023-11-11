import axios from 'axios'

const baseURL =
  process.env.DOOPLER_BASE_URL || 'https://restapi.fromdoppler.com/accounts'
const accountName =
  process.env.DOOPLER_ACCOUNT_NAME || 'hubmarketing@jalasoft.com'
const APIKey = process.env.DOOPLER_API_KEY || 'E26A1D30C52CF2DCEB2A3F680E852E6A'

export async function addSuscriberToList(
  listName: string,
  dataBodyRequest: any
) {
  const listId = await getListIDByName(listName)
  axios.defaults.headers = {
    Authorization: `token ${APIKey}`
  }
  return axios
    .post(
      `${baseURL}/${accountName}/lists/${listId}/subscribers`,
      dataBodyRequest
    )
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export function createList(listName) {
  axios.defaults.headers = {
    Authorization: `token ${APIKey}`
  }
  return axios
    .post(`${baseURL}/${accountName}/lists`, { name: listName })
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export async function getLists() {
  axios.defaults.headers = {
    Authorization: `token ${APIKey}`
  }
  return await axios
    .get(`${baseURL}/${accountName}/lists?per_page=150`)
    .then((response) => {
      return response.data.items
    })
    .catch((e) => {
      throw e
    })
}

export async function getListIDByName(name) {
  const list = await getLists()
  const { listId } = list.find((element) => element.name === name)
  return listId
}
