import axios from 'axios'

const APIKey =
  process.env.ACTIVECAMPAIGN_API_KEY ||
  '88ba14ca8bae3ff5f70b40c44c9603b95a2bbf9c14f94dc84406a1e4e9923391849da0d6'
const baseURL =
  process.env.ACTIVECAMPAIGN_BASE_API_URL || 'https://jalasoft24288.api-us1.com'

const defaultList = parseInt(process.env.ACTIVECAMPAIGN_LIST) || 14
const apiVersion = 3

export async function syncContact(dataBodyRequest: any) {
  axios.defaults.headers = {
    'Api-Token': `${APIKey}`
  }
  return axios
    .post(`${baseURL}/api/${apiVersion}/contact/sync`, dataBodyRequest)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export async function contactLists(dataBodyRequest: any) {
  axios.defaults.headers = {
    'Api-Token': `${APIKey}`
  }
  return axios
    .post(`${baseURL}/api/${apiVersion}/contactLists`, dataBodyRequest)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export async function getListById(id) {
  axios.defaults.headers = {
    'Api-Token': `${APIKey}`
  }
  return await axios
    .get(`${baseURL}/api/${apiVersion}/lists/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

function getJSONBody(FormInputs) {
  return {
    contact: {
      firstName: FormInputs.firstName ? FormInputs.firstName : FormInputs.name,
      lastName: FormInputs.lastName,
      email: FormInputs.email,
      phone: FormInputs.phoneNumber,
      fieldValues: [
        {
          field: '1',
          value: FormInputs.company
        },
        {
          field: '5',
          value: FormInputs.service
        },
        {
          field: '4',
          value: FormInputs.estimatedBudget
        },
        {
          field: '6',
          value: FormInputs.howCanWeHelp?.replaceAll('\n', ' ')
        },
        {
          field: '8',
          value: FormInputs.receiveInformation ? 'true' : 'false'
        },
        {
          field: '9',
          value: FormInputs.consentPrivacy ? 'true' : 'false'
        },
        {
          field: '10',
          value: FormInputs.origin
        },
        {
          field: '15',
          value: FormInputs.interest
        },
        {
          field: '23',
          value: FormInputs.yourLinkedInURL
        },
        {
          field: '24',
          value: FormInputs.area
        },
        {
          field: '25',
          value: FormInputs.specialization
        },
        {
          field: '26',
          value: FormInputs.uploadCVUrl
        },
        {
          field: '27',
          value: FormInputs.uploadCoverLetterUrl
        }
      ]
    }
  }
}

export async function addContactToList(
  contactData: any,
  listId: number = defaultList
) {
  const result = await syncContact(getJSONBody(contactData))
  if (!result || result?.errors) throw result?.errors?.error
  const resultData = await contactLists({
    contactList: {
      list: listId,
      contact: result.contact.id,
      status: 1
    }
  })
  if (!resultData || resultData?.errors) throw resultData?.errors?.error
  return resultData
}

export function addContactToListFromClient(data) {
  return axios
    .post(`/api/activeCampaign`, data)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export async function getPipelineById(id) {
  axios.defaults.headers = {
    'Api-Token': `${APIKey}`
  }
  return await axios
    .get(`${baseURL}/api/${apiVersion}/dealGroups/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export async function getPipelines() {
  axios.defaults.headers = {
    'Api-Token': `${APIKey}`
  }
  return await axios
    .get(`${baseURL}/api/${apiVersion}/dealGroups?limit=100&offset=0`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export function getDealByStageFromClient(idPipeline, idStage, tagValue = '') {
  return axios
    .get(
      `/api/acMigration/acStageDeals/${idPipeline}/${idStage}?tagValue=${tagValue}`
    )
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export function getCustomFieldsByIdContactFromClient(idContact) {
  return axios
    .get(`/api/acMigration/acCustomFields/${idContact}`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export function getSearchTagsFromClient(search) {
  return axios
    .get(`/api/acMigration/acTags?limit=100&search=${search}&type=contact`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export async function getSearchTags(limit, search, type) {
  axios.defaults.headers = {
    'Api-Token': `${APIKey}`
  }
  return await axios
    .get(
      `${baseURL}/api/${apiVersion}/tags?limit=${limit}&search=${search}&type=${type}`
    )
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export async function getCustomFieldsByIdContact(idContact) {
  axios.defaults.headers = {
    'Api-Token': `${APIKey}`
  }
  return await axios
    .get(`${baseURL}/api/${apiVersion}/contacts/${idContact}/fieldValues`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export async function getDealByStage(idPipeline, idStage, tag = '') {
  axios.defaults.headers = {
    'Api-Token': `${APIKey}`
  }
  return await axios
    .get(
      `${baseURL}/api/${apiVersion}/deals?dealGroupId=${idPipeline}&limit=100&offset=0&search=&stage=${idStage}&status=0&tag=${tag}&include=contact.contactTags.tag%2Ccontact.plusAppend`
    )
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export async function getContactsById(id) {
  axios.defaults.headers = {
    'Api-Token': `${APIKey}`
  }
  return await axios
    .get(`${baseURL}/api/${apiVersion}/contacts/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}
