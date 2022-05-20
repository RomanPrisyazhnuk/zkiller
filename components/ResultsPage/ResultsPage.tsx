import React, { ReactElement } from 'react';
import Header from '../Header/Header';
import ButtonBack from '../ResultsPage/ButtonBack/ButtonBack';
import { ContentBlock, ContentWrapper } from '../../commonStyles/styledApp';
import { UserType } from '../../models/User';
import ResultBlock from './UnitsBlock/ResultBlock';

type TProps = {
  user: UserType;
  saveLastBattleResult: () => {}
  gainMoney: () => {}
};

const ResultsPage = (props: TProps): ReactElement => {
  const { user } = props;
  return (
    <>
      <Header money={user.money}/>
      <ContentWrapper>
        <ContentBlock>
          <ResultBlock enemyArmy={user.lastBattleResults} />
        </ContentBlock>
      </ContentWrapper>
      <ButtonBack user={user}/>
    </>
  );
};

export default ResultsPage;
