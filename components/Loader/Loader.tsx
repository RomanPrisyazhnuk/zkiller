import React from 'react';
import { Loader } from 'semantic-ui-react';
import { LoaderWrapper } from './styledLoader';

interface PropsLoader {
  marginNeed: boolean;
}

const LoaderSemantic = (props: PropsLoader) => (
  <LoaderWrapper marginNeed={props.marginNeed}>
    <Loader active inline="centered" size={'large'} />
  </LoaderWrapper>
);

export default LoaderSemantic;
