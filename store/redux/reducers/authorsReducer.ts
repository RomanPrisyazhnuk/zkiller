import * as actionTypes from '../actionTypes/actionTypes';
import { UserType } from '../../../models/User';
import reduce from 'lodash/reduce';

const initialState: { [key: string]: UserType } = {};

export default function authorsReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case actionTypes.GET_AUTHOR.SUCCESS:
      return {
        ...state,
        [payload.seoId]: payload,
      };
    case actionTypes.GET_AUTHOR_BY_ID.SUCCESS:
      return {
        ...state,
        ...reduce(
          payload,
          (result: any) => {
            if (!state[payload.seoId]) {
              return { ...result, [payload.seoId]: payload };
            } else {
              return { ...result, [payload.seoId]: state[payload.seoId] };
            }
          },
          {}
        ),
      };
    case actionTypes.GET_AUTHORS.SUCCESS:
      return {
        ...reduce(
          payload,
          (result: any, item: UserType, key) => {
            if (!state[key]) {
              return { ...result, [key]: item };
            } else {
              return { ...result, [key]: state[key] };
            }
          },
          {}
        ),
      };
    case actionTypes.SET_ARTICLES_SEO_ID_BY_USER:
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
