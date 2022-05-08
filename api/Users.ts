import Base from './Base';
import { TApiClientPromise } from './types';
import config from './urls/url-config.json';

export default class Users extends Base {
  getAuthors(): TApiClientPromise {
    return this.apiClient.get(config.user.users);
  }

  getAuthorById(id: string): TApiClientPromise {
    return this.apiClient.get(config.user.getUserById, { id });
  }

  getAuthor(seoId: string): TApiClientPromise {
    return this.apiClient.get(config.user.getUserBySeoId, { seoId });
  }
}
