/* eslint-disable no-use-before-define */
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { BaseResponseData, IApi, RequestFn } from '../Services/Api'

function useApiWithToaster<TResPayload extends BaseResponseData>(fetcher : RequestFn<TResPayload>) {
  return fetch

  async function fetch(options : IApi) {
    try {
      const response = await fetcher(options)
      if (response) {
        toast.success(<div>{response.data.message}</div>)
      }
      return response
    } catch (e) {
      const error = e as AxiosError<TResPayload>
      toast.error(error.response?.data.message)
      return error.response?.data
    }
  }
}

export default useApiWithToaster
