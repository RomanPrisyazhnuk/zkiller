import ApiClient from './ApiClient';
import { IApi } from './types';
import Users from './Users';
import Articles from './Articles';
import Categories from './Categories';

export default function getApiClient({ apiPrefix }: { apiPrefix: string }): IApi {
  const api = new ApiClient({ prefix: apiPrefix });
  return {
    articles: new Articles({ apiClient: api }),
    users: new Users({ apiClient: api }),
    categories: new Categories({ apiClient: api }),
  };
}
