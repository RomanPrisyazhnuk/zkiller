import { army } from '../constants/enums';
import { UnitType } from './Unit';

export type ArmyType = {
  [army.soldier]: UnitType;
  [army.auto]: UnitType;
  [army.tank]: UnitType;
  [army.bpla]: UnitType;
  [army.copter]: UnitType;
  [army.plane]: UnitType;
  [army.ship]: UnitType;
};
