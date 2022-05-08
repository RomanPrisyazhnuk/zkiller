// import { Unit } from '../../models/Unit';
import * as React from 'react';
import { ReactElement } from 'react';
import { BlockFooter, FooterButton } from './styledComponents';
// import NavBar from './NavBar/NavBar';
// import Link from 'next/link';
type TProps = {
  money: number;
};

const Footer: React.FC = (props: TProps): ReactElement => {
  const { money } = props;
  return (
    <BlockFooter>
      <FooterButton>
      До бою!
      </FooterButton>
    </BlockFooter>
  );
};

export default Footer;
