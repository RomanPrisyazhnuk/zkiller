import Base from './Base';
import { TApiClientPromise, TArticlesByGenderAndCategory } from './types';
import config from './urls/url-config.json';

export default class Articles extends Base {
  getArticles(): TApiClientPromise {
    return this.apiClient.get(config.article.articles);
  }

  getArticle(seoId: string): TApiClientPromise {
    return this.apiClient.get(config.article.getArticleBySeoId, { seoId });
  }

  getArticleById(id: string): TApiClientPromise {
    return this.apiClient.get(config.article.getArticleById, { id });
  }

  getArticlesByUserId(id: string): TApiClientPromise {
    return this.apiClient.get(config.article.getArticlesByUserId, { id });
  }

  getArticlesByGenderAndCategory(data: TArticlesByGenderAndCategory): TApiClientPromise {
    return this.apiClient.get(config.article.getArticlesByGenderAndCategory, { data });
  }

  getArticlesByCategory(categoryId: string): TApiClientPromise {
    return this.apiClient.get(config.article.getArticlesByCategory, { categoryId });
  }

  getArticlesByGender(gender: string): TApiClientPromise {
    return this.apiClient.get(config.article.getArticlesByGender, { gender });
  }
}
