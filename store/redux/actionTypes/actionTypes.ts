import { createAsyncActionType } from '../../../utils/helpers';
// import { UnitType } from '../../../models/Unit';

export const GAIN_MONEY = 'GAIN_MONEY';
export interface GainMoney {
  type: typeof GAIN_MONEY;
  payload: {
    money: number;
  };
}

export const LOSS_MONEY = 'LOSS_MONEY';
export interface LossMoney {
  type: typeof LOSS_MONEY;
  payload: {
    money: number;
  };
}
export const GAIN_UNIT = 'GAIN_UNIT';
export interface GainUnitData {
  type: typeof GAIN_UNIT;
  payload: {
    id: number;
    amount: number;
  };
}

export const GAIN_LEVEL = 'GAIN_LEVEL';
export interface GainUnitData {
  type: typeof GAIN_LEVEL;
  payload: number;
}

export const LOSS_UNIT = 'LOSS_UNIT';
export interface LossUnitData {
  type: typeof LOSS_UNIT;
  payload: {
    id: number;
    amount: number;
  };
}

export const AUTH_STORE_USER_DATA = createAsyncActionType('AUTH_STORE_USER_DATA');
export interface SetAuthStoreUserData {
  type: typeof AUTH_STORE_USER_DATA;
  payload: object;
}

export const AUTH_STORE_USER_COOKIES = 'AUTH_STORE_USER_COOKIES';

export const LOG_OUT = 'LOG_OUT';

export interface LogOut {
  type: typeof LOG_OUT;
}

export const LOG_OUT_STORE = createAsyncActionType('LOG_OUT_STORE');

export const UPDATE_STORE_USER_DATA = createAsyncActionType('UPDATE_STORE_USER_DATA');
export interface SetUpdateStoreUserData {
  type: typeof UPDATE_STORE_USER_DATA;
  payload: object;
}

// Gender

export const CHANGE_GENDER = 'CHANGE_GENDER';

// Questions

export const GET_QUESTIONS = createAsyncActionType('GET_QUESTIONS');

export interface GetQuestionsData {
  type: typeof GET_QUESTIONS;
  payload: object;
}

export const GET_QUESTION = createAsyncActionType('GET_QUESTION');

export interface GetQuestionData {
  type: typeof GET_QUESTION;
  payload: object;
}

// Articles

export const GET_ARTICLES = createAsyncActionType('GET_ARTICLES');

export interface GetArticlesData {
  type: typeof GET_ARTICLES;
  payload: object;
}

export const GET_ARTICLE = createAsyncActionType('GET_ARTICLE');

export interface GetArticleData {
  type: typeof GET_ARTICLE;
  payload: object;
}

export const GET_ARTICLES_BY_USER = createAsyncActionType('GET_ARTICLES_BY_USER');

export interface GetArticlesByUserData {
  type: typeof GET_ARTICLES_BY_USER;
  payload: object;
}

export const GET_ARTICLES_BY_GENDER_AND_CATEGORY = createAsyncActionType('GET_ARTICLES_BY_GENDER_AND_CATEGORY');

export interface GetArticlesByGenderAndCategoryData {
  type: typeof GET_ARTICLES_BY_GENDER_AND_CATEGORY;
  payload: object;
}

export const GET_ARTICLES_BY_CATEGORY = createAsyncActionType('GET_ARTICLES_BY_CATEGORY');

export interface GetArticlesByCategoryData {
  type: typeof GET_ARTICLES_BY_CATEGORY;
  payload: object;
}

export const GET_ARTICLES_BY_GENDER = createAsyncActionType('GET_ARTICLES_BY_GENDER');

export interface GetArticlesByGenderData {
  type: typeof GET_ARTICLES_BY_GENDER;
  payload: object;
}

export const SET_USER_SEO_ID_BY_ARTICLE = 'SET_USER_SEO_ID_BY_ARTICLE';

export interface SetUserByArticleData {
  type: typeof SET_USER_SEO_ID_BY_ARTICLE;
  payload: object;
}

// Answer's counts
export const UPDATE_ANSWERS_COUNTS = createAsyncActionType('UPDATE_ANSWERS_COUNTS');

export interface IUpdateAnswersCounts {
  type: typeof UPDATE_ANSWERS_COUNTS;
  payload: object;
}

// Answers
export const GET_ANSWER = createAsyncActionType('GET_ANSWER');

export interface GetAnswerData {
  type: typeof GET_ANSWER;
  payload: object;
}

export const GET_ANSWERS_BY_QUESTION = createAsyncActionType('GET_ANSWERS_BY_QUESTION');

export interface GetAnswersByQuestionData {
  type: typeof GET_ANSWERS_BY_QUESTION;
  payload: object;
}

export const GET_ANSWER_BY_USER = createAsyncActionType('GET_ANSWER_BY_USER');

export interface GetAnswerByUserData {
  type: typeof GET_ANSWER_BY_USER;
  payload: object;
}

// Author
export const GET_AUTHOR = createAsyncActionType('GET_AUTHOR');

export interface GetAuthorData {
  type: typeof GET_AUTHOR;
  payload: object;
}

export const GET_AUTHOR_BY_ID = createAsyncActionType('GET_AUTHOR_BY_ID');

export interface GetAuthorByIdData {
  type: typeof GET_AUTHOR_BY_ID;
  payload: object;
}

export const GET_AUTHORS = createAsyncActionType('GET_AUTHORS');

export interface GetAuthorsData {
  type: typeof GET_AUTHORS;
  payload: object;
}

export const SET_ARTICLES_SEO_ID_BY_USER = 'SET_ARTICLES_SEO_ID_BY_USER';

export interface SetArticlesByUserData {
  type: typeof SET_ARTICLES_SEO_ID_BY_USER;
  payload: object;
}

//Category
export const GET_CATEGORIES = createAsyncActionType('GET_CATEGORIES');

export interface GetCategoriesData {
  type: typeof GET_CATEGORIES;
  payload: object;
}

export const GET_CATEGORY = createAsyncActionType('GET_CATEGORY');

export interface GetCategoryData {
  type: typeof GET_CATEGORY;
  payload: object;
}

export const GET_CATEGORY_BY_SEO_ID = createAsyncActionType('GET_CATEGORY_BY_SEO_ID');

export interface GetCategoryBySeoIdData {
  type: typeof GET_CATEGORY_BY_SEO_ID;
  payload: object;
}

export const SET_ARTICLES_SEO_ID_BY_CATEGORY = 'SET_ARTICLES_SEO_ID_BY_CATEGORY';

export interface SetArticlesByCategoryData {
  type: typeof SET_ARTICLES_SEO_ID_BY_CATEGORY;
  payload: object;
}

export type actionType = SetAuthUserData | SetAuthStoreUserData | LogOut | SetUpdateStoreUserData;
