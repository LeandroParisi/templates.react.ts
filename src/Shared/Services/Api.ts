/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Service } from 'typedi'

import axios, { AxiosRequestConfig, Method } from 'axios'

export interface IApi {
  method: Method,
  endpoint: string,
  body?: any,
  headers?: any,
  otherOptions?: AxiosRequestConfig
}

export interface BaseResponseData {
  message : string
}

export interface BaseResponse<TResponsePayload extends BaseResponseData> {
  data : TResponsePayload,
  status : number
}

export type RequestFn<
  TResPayload extends BaseResponseData
> = (opts : IApi) => Promise<BaseResponse<TResPayload>>

@Service()
export default abstract class Api {
  protected BaseUrl : string

  /**
   *
   */
  constructor(baseUrl : string) {
    this.BaseUrl = baseUrl
  }

  /**
   * Default fetcher for entire application
   * @param {string} method HTTP method to be used on request
   * @param {string} url Complet URL for the request: server + endpoint
   * @param {object} body Request body
   * @param {object} headers Request headers
   * @returns Object { ...responsePayload } Any relevant information returned by the API. It will always include a key message (even on errors)
  */
  public Request = async <TResPayload extends BaseResponseData>(opts : IApi)
    : Promise<BaseResponse<TResPayload>> => {
    const {
      endpoint, method, body, headers, otherOptions,
    } = opts

    const options : AxiosRequestConfig = {
      method,
      headers: headers && { ...headers },
      url: `${this.BaseUrl}/${endpoint}`,
      data: body && { ...body },
      ...otherOptions,
    }

    const response = await axios(options)

    return {
      data: response.data,
      status: response.status,
    }
  }
}
