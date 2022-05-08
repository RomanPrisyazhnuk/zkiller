import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { width } from '../../../constants/styledConstants';

export const QuestionsBlockWrapper = styled.div`
  width: ${width.large};
  overflow-x: hidden;
`;

export const QuestionsGrid = styled(Grid)`
  overflow-y: scroll;
`;
