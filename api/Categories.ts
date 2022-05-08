import Base from './Base';
import { TApiClientPromise } from './types';
import config from './urls/url-config.json';

export default class Categories extends Base {
  getAllCategories(): TApiClientPromise {
    return this.apiClient.get(config.category.categories);
  }

  getCategoryById(id: string): TApiClientPromise {
    return this.apiClient.get(config.category.getCategoryById, { id });
  }

  getCategoryBySeoId(seoId: string): TApiClientPromise {
    return this.apiClient.get(config.category.getCategoryBySeoId, { seoId });
  }
}
