import * as actionTypes from '../actionTypes/actionTypes';
import _ from 'lodash';
import { UserType } from '../../../models/User';
import { mockUser } from '../../../mockData/userMock';
export type UserDataType = {
  id: number;
  name: string;
  avatar: string;
  numberOfVictories: number;
  access_token: number;
  isLoading: boolean;
};

export type InitialStateType = UserType;

const initialState: InitialStateType = mockUser;

export default function userReducer(state: InitialStateType = initialState, action: any): InitialStateType {
  switch (action.type) {
    case actionTypes.GAIN_MONEY:
      return { ...state, money: state.money + action.payload };
    case actionTypes.LOSS_MONEY:
      return { ...state, money: state.money - action.payload };
    case actionTypes.GAIN_UNIT:
      return gainUnit(state, action);
    case actionTypes.GAIN_LEVEL:
      return gainLevel(state, action);
    default:
      return state;
  }
  // switch (action.type) {
  //   case actionTypes.AUTH_STORE_USER_COOKIES:
  //     return { ...state, userData: action.payload };
  //   case actionTypes.AUTH_STORE_USER_DATA.START:
  //     return { ...state, userData: { ...state.userData, isLoading: true } };
  //   case actionTypes.AUTH_STORE_USER_DATA.SUCCESS:
  //     return { ...state, userData: action.payload };
  //   case actionTypes.AUTH_STORE_USER_DATA.ERROR:
  //     return initialState;
  //   case actionTypes.LOG_OUT_STORE.START:
  //     return { ...state, userData: { ...state.userData, isLoading: true } };
  //   case actionTypes.LOG_OUT_STORE.SUCCESS:
  //     return initialState;
  //   case actionTypes.UPDATE_STORE_USER_DATA.START:
  //     return { ...state, userData: { ...state.userData, isLoading: true } };
  //   case actionTypes.UPDATE_STORE_USER_DATA.SUCCESS: {
  //     return { ...state, userData: action.payload };
  //   }
  //   default:
  //     return state;
  // }
}

const gainUnit = (state: InitialStateType, action: any) => {
  const unit = state.army[action.payload.id];
  unit.count = unit.count + action.payload.amount;
  return { ...state, army: { ...state.army, [action.payload.id]:unit } };
};

const gainLevel = (state: InitialStateType, action: any) => {
  console.log(action.payload);
  const unit = state.army[action.payload];
  unit.level = unit.level + 1;
  return { ...state, army: { ...state.army, [action.payload]:unit } };
};
