import { EnemyArmyType } from '../models/Army';
import { army } from '../constants/enums';

export const mockEnemyArmy: EnemyArmyType = {
  [army.soldier]: {
    id: army.soldier,
    title: 'Особовий склад',
    description: '',
    imgSrc: '/static/enemyArmy/soldier.svg',
    count: 0,
    damage: 100,
    hp:100,
    bounty: 100,
  },
  [army.auto]: {
    id: army.auto,
    title: 'Автомобільна техніка',
    description: '',
    imgSrc: '/static/enemyArmy/auto.svg',
    count: 0,
    damage: 200,
    hp:200,
    bounty: 200,
  },
  [army.tank]: {
    id: army.tank,
    title: 'Танки',
    description: '',
    imgSrc: '/static/enemyArmy/tank.svg',
    count: 0,
    damage: 300,
    hp:300,
    bounty: 300,
  },
  [army.copter]: {
    id: army.copter,
    title: 'Гелікоптери',
    description: '',
    imgSrc: '/static/enemyArmy/copter.svg',
    count: 0,
    damage: 400,
    hp:300,
    bounty: 400,
  },
  [army.bpla]: {
    id: army.bpla,
    title: 'БПЛА',
    description: '',
    imgSrc: '/static/enemyArmy/bpla.svg',
    count: 0,
    damage: 500,
    hp:300,
    bounty: 500,
  },
  [army.plane]: {
    id: army.plane,
    title: 'Літаки',
    description: '',
    imgSrc: '/static/enemyArmy/plane.svg',
    count: 0,
    damage: 600,
    hp:400,
    bounty: 600,
  },
  [army.ship]: {
    id: army.ship,
    title: 'Кораблі',
    description: '',
    imgSrc: '/static/enemyArmy/ship.svg',
    count: 0,
    damage: 700,
    hp:500,
    bounty: 700,
  },
};
