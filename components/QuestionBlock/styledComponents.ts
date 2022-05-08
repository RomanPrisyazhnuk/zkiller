import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { boxShadow, borderRadius, width, background } from '../../constants/styledConstants';

export const QuestionBlockContainer = styled.div`
  width: ${width.large};
  display: block;
`;

export const AnswerGrid = styled(Grid)`
  width: ${width.large};
  margin: 0 !important;
`;

export const QuestionContentBlock = styled.div`
  background: ${background};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
`;
