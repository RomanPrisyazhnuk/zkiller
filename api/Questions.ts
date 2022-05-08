import Base from './Base';
import { TApiClientPromise } from './types';
import config from './urls/url-config.json';

export default class Questions extends Base {
  getQuestions(): TApiClientPromise {
    return this.apiClient.get(config.question.questions);
  }

  getQuestion(id: string): TApiClientPromise {
    return this.apiClient.get(config.question.getQuestionById, { id });
  }
}
