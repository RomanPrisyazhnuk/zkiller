// import { Unit } from '../../models/Unit';
import * as React from 'react';
import { ReactElement } from 'react';
import _ from 'lodash';
import { BlockFooter, FooterButton } from './styledComponents';
import { UnitType } from '../../models/Unit';
import { army } from '../../constants/enums';
import { UserType } from '../../models/User';
// import NavBar from './NavBar/NavBar';
// import Link from 'next/link';
type TProps = {
  user: UserType;
};

const Footer: React.FC = (props: TProps): ReactElement => {
  const { user } = props;
  const initBattle = () => {
    const result = {
      [army.soldier]: 0, [army.auto]: 0, [army.tank]: 0,
      [army.copter]: 0, [army.bpla]: 0, [army.plane]: 0,
      [army.ship]: 0,
    };
    const cumulativeDamage = {
      [army.soldier]: 0, [army.auto]: 0, [army.tank]: 0,
      [army.copter]: 0, [army.bpla]: 0, [army.plane]: 0,
      [army.ship]: 0,
    };
    _.forEach(user.army, (unit: UnitType) => {
      _.forEach(unit.attackAbility, (abilityToDamage: number, unitId: string) => {
        cumulativeDamage[unitId] += unit.damage * abilityToDamage * unit.count * unit.level * unit.levelBonus;
      });
    });
    console.log('cumulativeDamage ');
    console.log(cumulativeDamage);
    _.forEach(user.army, (unit: UnitType, unitId: string) => {
      result[unitId] = (cumulativeDamage[unitId] / unit.hp) >> 0;
    });
    console.log('result');
    console.log(result);
  };
  return (
    <BlockFooter>
      <FooterButton onClick={() => initBattle()}>
        До бою!
      </FooterButton>
    </BlockFooter>
  );
};

export default Footer;
