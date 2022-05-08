import * as React from 'react';
import {
  BlockHeader,
  HeaderContainer,
  HeaderPadding,
} from './styledComponents';
import { Unit } from '../../models/Unit';
import { ReactElement } from 'react';
// import NavBar from './NavBar/NavBar';
// import Link from 'next/link';
type TProps = {
  money: number;
};

const Header: React.FC = (props: TProps): ReactElement => {
  const { money } = props;
  return (
    <>
      <HeaderContainer>
        <BlockHeader>
          ${money}
        </BlockHeader>
      </HeaderContainer>
      <HeaderPadding />
    </>
  );
};

export default Header;
