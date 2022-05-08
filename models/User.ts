import { ArmyType } from './Army';

export type UserType = {
  id: number;
  name: string;
  email: string;
  imgSrc: string;
  army: ArmyType;
  money: number;
};
