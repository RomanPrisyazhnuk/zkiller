import React, { ReactElement } from 'react';
import Header from '../Header/Header';
import ButtonAttack from './ButtonAttack/ButtonAttack';
// import {mockArmy} from '../../mockData/unitMock'
import { ContentBlock, ContentWrapper } from '../../commonStyles/styledApp';
// import SidebarSelf from '../SidebarSelf/SidebarSelf';
// import { gender as genderConst } from '../../constants/enums';
import { UserType } from '../../models/User';
import UnitsBlock from './UnitsBlock/UnitsBlock';

type TProps = {
  user: UserType;
  saveLastBattleResult: () => {}
  gainMoney: () => {}
};

const UnitsPage = (props: TProps): ReactElement => {
  const { user, saveLastBattleResult, gainMoney } = props;
  return (
    <>
      <Header money={user.money} />
      <ContentWrapper>
        <ContentBlock>
          <UnitsBlock army={user.army} />
        </ContentBlock>
      </ContentWrapper>
      <ButtonAttack saveLastBattleResult={saveLastBattleResult} user={user} gainMoney={gainMoney} />
    </>
  );
};

export default UnitsPage;
