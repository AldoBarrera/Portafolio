import axios from 'axios'
import { FormInputs } from 'components/Common/DynamicForm/form1'
import { ResponseType } from 'components/Common/DynamicForm/form1'

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
        },
        {
          field: '45',
          value: FormInputs.teamSize
        },
        {
          field: '46',
          value: FormInputs.projectDuration
        },
        {
          field: '47',
          value: FormInputs.serviceDetails
        },
        {
          field: '48',
          value: FormInputs.typeOfService
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

export function addContactToListFromClientMock(data) {
  console.log("Se inserto correctamente data " + data)
  return axios
    .post(`/api/activeCampaign`, data)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export const ActiveCampaign = async(FormInputs: FormInputs): Promise<ResponseType> => {
  console.log("Se inserto a AC")
  const res = await addContactToListFromClientMock(FormInputs)
  return res
}
