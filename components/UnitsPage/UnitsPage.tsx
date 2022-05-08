import React, { ReactElement } from 'react';
import Header from '../Header/Header';
import {mockArmy} from '../../mockData/unitMock'
import { ContentBlock, ContentWrapper } from '../../commonStyles/styledApp';
// import SidebarSelf from '../SidebarSelf/SidebarSelf';
// import { gender as genderConst } from '../../constants/enums';
import { UserType } from '../../models/User';
import UnitsBlock from './UnitsBlock/UnitsBlock';

type TProps = {
  user: UserType;
};

const UnitsPage = (props: TProps): ReactElement => {
  const { user } = props;
  return (
    <>
      <Header money={user.money}/>
      <ContentWrapper>
        {/*<Sidebar>*/}
        {/*  <SidebarSelf data={[]} />*/}
        {/*</Sidebar>*/}
        <ContentBlock>
          <UnitsBlock army={user.army} />
        </ContentBlock>
        {/*<Sidebar>*/}
        {/*  <GenderImage src={isGirl ? '/static/imageWoman.webp' : '/static/imageMan.webp'} />*/}
        {/*</Sidebar>*/}
      </ContentWrapper>
    </>
  );
};

export default UnitsPage;
