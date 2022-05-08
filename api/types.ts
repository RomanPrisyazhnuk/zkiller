import { AxiosResponse } from 'axios';
import Articles from './Articles';
import Users from './Users';
import Categories from './Categories';

export interface IApi {
  users: Users;
  articles: Articles;
  categories: Categories;
}

export type TApiClientResponseError = {
  statusCode: number;
  messageCode: string;
  errorData?: Array<Record<string, unknown>>;
  status: string;
  toString: () => string;
};

export type TArticlesByGenderAndCategory = {
  gender: string;
  category: string;
};

export interface IApiError {
  error: TApiClientResponseError;
}

export type TApiClientPromise = Promise<AxiosResponse | IApiError>;
