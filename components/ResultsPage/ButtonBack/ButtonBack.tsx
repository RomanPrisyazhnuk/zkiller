import * as React from 'react';
import { BlockFooter, FooterButton } from './styledComponents';
import Router from 'next/router';

const ButtonBack: React.FC = (): React.ReactElement => {
  return (
    <BlockFooter>
      <FooterButton onClick={() => Router.push('/')}>
         Повернутися до військ!
      </FooterButton>
    </BlockFooter>
  );
};

export default ButtonBack;
