import Base from './Base';
import { TApiClientPromise } from './types';
import config from './urls/url-config.json';

export default class Answers extends Base {
  getAnswerById(id: string): TApiClientPromise {
    return this.apiClient.get(config.answer.getAnswerById, { id });
  }

  getAnswersByQuestionId(id: string): TApiClientPromise {
    return this.apiClient.get(config.answer.getAnswersByQuestionId, { id });
  }

  getAnswerByUserId(id: string): TApiClientPromise {
    return this.apiClient.get(config.answer.getAnswersByUserId, { id });
  }
}
