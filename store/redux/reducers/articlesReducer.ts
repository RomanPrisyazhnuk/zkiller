import * as actionTypes from '../actionTypes/actionTypes';
import reduce from 'lodash/reduce';
import { ArticleType } from '../../../models/Article';

const initialState: { [key: string]: ArticleType } = {};

export default function articlesReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case actionTypes.GET_ARTICLES.SUCCESS:
      return {
        ...reduce(
          payload,
          (result, item: ArticleType, key) => {
            if (!state[key]) {
              return { ...result, [key]: item };
            } else {
              return { ...result, [key]: state[key] };
            }
          },
          {}
        ),
      };
    case actionTypes.GET_ARTICLE.SUCCESS:
      return {
        ...state,
        [payload.seoId]: payload,
      };
    case actionTypes.GET_ARTICLES_BY_USER.SUCCESS:
      return {
        ...state,
        ...reduce(
          payload,
          (result, item: ArticleType, key) => {
            if (!state[key]) {
              return { ...result, [key]: item };
            } else {
              return { ...result, [key]: state[key] };
            }
          },
          {}
        ),
      };
    case actionTypes.GET_ARTICLES_BY_GENDER_AND_CATEGORY.SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.GET_ARTICLES_BY_CATEGORY.SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.GET_ARTICLES_BY_GENDER.SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.SET_USER_SEO_ID_BY_ARTICLE:
      return {
        ...state,
        [payload.seoId]: {
          ...state[payload.seoId],
          userSeoId: payload.userSeoId,
        },
      };
    default:
      return state;
  }
}
