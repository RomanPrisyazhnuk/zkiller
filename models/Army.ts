import { army } from '../constants/enums';
import { EnemyUnitType, UnitType } from './Unit';

export type ArmyType = {
  [army.soldier]: UnitType;
  [army.auto]: UnitType;
  [army.tank]: UnitType;
  [army.bpla]: UnitType;
  [army.copter]: UnitType;
  [army.plane]: UnitType;
  [army.ship]: UnitType;
};

export type EnemyArmyType = {
  [army.soldier]: EnemyUnitType;
  [army.auto]: EnemyUnitType;
  [army.tank]: EnemyUnitType;
  [army.bpla]: EnemyUnitType;
  [army.copter]: EnemyUnitType;
  [army.plane]: EnemyUnitType;
  [army.ship]: EnemyUnitType;
};
