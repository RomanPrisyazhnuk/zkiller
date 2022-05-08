import * as actionTypes from '../actionTypes/actionTypes';
import { gender } from '../../../constants/enums';

const initialState = gender.male;

export default function genderReducer(state: gender.male | gender.female = initialState, { type, payload }: any) {
  switch (type) {
    case actionTypes.CHANGE_GENDER:
      return payload;
    default:
      return state;
  }
}
