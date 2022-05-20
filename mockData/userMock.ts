import { UserType } from '../models/User';
import { mockArmy } from './armyMock';
import { mockEnemyArmy } from './enemyArmyMock';

export const mockUser:UserType = {
  id: 1,
  name: 'Vasya',
  email: 'some',
  imgSrc: '',
  army: mockArmy,
  money: 890000,
  lastBattleResults: mockEnemyArmy,
  totalResult: mockEnemyArmy,
};
