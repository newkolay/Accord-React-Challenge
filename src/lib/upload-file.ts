import { API_ENDPOINT } from '../config/constants'

const PROGRESS_PERCENTAGE_READY = 100
const STATE_COMPLETED = 4
const STATUS_SUCCESS = 200

export function uploadFile(
  xhr: XMLHttpRequest,
  file: File,
  setProgress: React.Dispatch<React.SetStateAction<number>>
) {
  return new Promise((resolve, reject) => {
    xhr.open('PUT', API_ENDPOINT, true)
    xhr.setRequestHeader('Content-Type', file.type)

    xhr.upload.addEventListener('progress', (e) => {
      const percentage =
        (e.loaded * PROGRESS_PERCENTAGE_READY) / e.total ||
        PROGRESS_PERCENTAGE_READY
      setProgress(percentage)
    })

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState == STATE_COMPLETED && xhr.status == STATUS_SUCCESS) {
        resolve(xhr.response)
      } else if (
        xhr.readyState == STATE_COMPLETED &&
        xhr.status != STATUS_SUCCESS
      ) {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        })
      }
    })

    xhr.send(file)
  })
}
