import * as React from 'react';
import _ from 'lodash';
import { BlockFooter, FooterButton } from './styledComponents';
import { EnemyUnitType, UnitType } from '../../../models/Unit';
import { army } from '../../../constants/enums';
import { UserType } from '../../../models/User';
// import NavBar from './NavBar/NavBar';
import Router from 'next/router';
import { mockEnemyArmy } from '../../../mockData/enemyArmyMock';

type TProps = {
  user: UserType;
  saveLastBattleResult: () => {}
  gainMoney: (money:number) => {}
};

const ButtonAttack: React.FC = (props: TProps): React.ReactElement => {
  const { user, saveLastBattleResult, gainMoney } = props;
  const initBattle = () => {
    const result = mockEnemyArmy;
    let bounty = 0;
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
    _.forEach(user.lastBattleResults, (unit: EnemyUnitType, unitId: string) => {
      result[unitId].count = (cumulativeDamage[unitId] / unit.hp) >> 0;
      bounty += result[unitId].count * unit.bounty;
    });
    gainMoney(bounty);
    saveLastBattleResult(result);
    Router.push('/results');
  };
  return (
    <BlockFooter>
      <FooterButton onClick={() => initBattle()}>
        До бою!
      </FooterButton>
    </BlockFooter>
  );
};

export default ButtonAttack;
