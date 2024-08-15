import axios from 'axios'
export default async function sendLogToApi(url: string, data: any) {
  return fetch(`${url}/api/log`, {
    method: 'POST',
    body: data,
    mode: 'no-cors'
  })
    .then((res) => {
      return res
    })
    .catch((e) => {
      Promise.reject(e)
    })
}

export function sendLogToApiFromClient(error) {
  return axios
    .post(`/api/log`, { error })
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      return e.response.data
    })
}
