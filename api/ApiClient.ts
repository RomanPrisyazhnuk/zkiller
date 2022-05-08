import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  ResponseType
} from 'axios';
import _get from 'lodash/get';
import { IApiError, TApiClientPromise } from './types';

class ApiClient {
  private readonly prefix: string;

  constructor({ prefix = 'http://localhost:9000/' } = {}) {
    this.prefix = prefix;
  }

  get(requestUrl: string, params = {}, responseType: ResponseType = 'json'): TApiClientPromise {
    return request({
      requestUrl,
      method: 'get',
      params,
      prefix: this.prefix,
      responseType,
    });
  }

  put(requestUrl: string, payload = {}): TApiClientPromise {
    return request({
      requestUrl,
      method: 'put',
      data: payload,
      prefix: this.prefix,
    });
  }

  post(requestUrl: string, payload = {}): TApiClientPromise {
    return request({
      requestUrl,
      method: 'post',
      data: payload,
      prefix: this.prefix,
    });
  }

  delete(requestUrl: string, params = {}): TApiClientPromise {
    return request({
      requestUrl,
      method: 'delete',
      params,
      prefix: this.prefix,
    });
  }
}

async function request({
  requestUrl,
  method,
  data = {},
  params = {},
  prefix,
  responseType = 'json',
}: AxiosRequestConfig & { prefix: string; requestUrl: string }): TApiClientPromise {
  const url = `${prefix}${requestUrl}`;

  return requestAxios({
    url,
    method,
    data,
    params,
    responseType,
  });
}

function requestAxios({ url, method, data, params = {}, responseType }: AxiosRequestConfig): TApiClientPromise {
  return axios({
    method,
    url,
    params,
    data,
    responseType,
  }).then(
    (response: AxiosResponse): any => {
      if (response.status >= 200 && response.status < 300) {
        if (response.data && response.data.data) {
          response.data = response.data.data;
          console.log(response.data);
        }
      } else {
        // eslint-disable-next-line no-console
        console.error('apiClient:::', response.status, response.data);
      }
      return response.data;
    },
    (xhr: AxiosError): IApiError => {
      const response = {
        error: {
          statusCode: _get(xhr, ['response', 'status'], 500),
          messageCode: _get(xhr, ['response', 'data', 'messageCode'], ''),
          errorData: _get(xhr, ['response', 'data', 'errorData'], []),
          status: 'error',
        },
      };
      response.error.toString = () => {
        let result = 'Bad response from server';
        if (xhr && xhr.response && xhr.response.data) {
          const { errorMessage, message } = xhr.response.data;
          result = message || errorMessage || xhr.message;
        } else {
          result = xhr.message;
        }
        return result;
      };
      return response;
    }
  );
}

export default ApiClient;
