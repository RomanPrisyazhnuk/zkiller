import * as React from 'react';
import LogInmodalWindow from '../../logInModalWindow/logInModalWindow';
import { AuthWrapper } from './styledComponents';

const AuthBlock: React.FC = () => {
  return (
    <AuthWrapper>
      <LogInmodalWindow role="logIn" />
    </AuthWrapper>
  );
};

export default AuthBlock;
