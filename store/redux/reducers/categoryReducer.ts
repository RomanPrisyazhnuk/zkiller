import * as actionTypes from '../actionTypes/actionTypes';
import reduce from 'lodash/reduce';
import { CategoryType } from '../../../models/Category';

const initialState: {[key: string]: CategoryType} = {};

export default function categoryReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case actionTypes.GET_CATEGORY.SUCCESS:
      return {
        ...state,
        [payload.seoId]: payload,
      };
    case actionTypes.GET_CATEGORY_BY_SEO_ID.SUCCESS:
      return {
        ...state,
        [payload.seoId]: payload,
      };
    case actionTypes.GET_CATEGORIES.SUCCESS:
      return {
        ...reduce(
          payload,
          (result: any, item: CategoryType, key) => {
            if (!state[key]) {
              return { ...result, [key]: item };
            } else {
              return { ...result, [key]: state[key] };
            }
          },
          {}
        ),
      };
    case actionTypes.SET_ARTICLES_SEO_ID_BY_CATEGORY:
      return {
        ...state,
        [payload.seoId]: {
          ...state[payload.seoId],
          articlesIds: payload.articlesIds,
        },
      };
    default:
      return state;
  }
}
