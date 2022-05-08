import { UserType } from '../models/User';
import { mockArmy } from './unitMock';

export const mockUser:UserType = {
  id: 1,
  name: 'Vasya',
  email: 'some',
  imgSrc: '',
  army: mockArmy,
  money: 890000,
};
