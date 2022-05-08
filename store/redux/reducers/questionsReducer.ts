import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {};

export default function questionsReducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case actionTypes.GET_QUESTIONS.SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.GET_QUESTION.SUCCESS:
      return {
        ...state,
        [payload.id]: payload,
      };
    case actionTypes.UPDATE_ANSWERS_COUNTS.SUCCESS:
    default:
      return state;
  }
}
