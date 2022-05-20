import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { borderRadius, boxShadow, color } from '../../../../constants/styledConstants';

export const UnitBlockContent = styled(Grid)`
  display: flex;
`;

export const UnitAvatar = styled.img`
  background-color: ${color.hacky};
  border-radius: ${borderRadius};
  height: 60px;
  width: 60px;
  flex-shrink: 0;
  left: 15px;
  float: left;
  margin-right: 20px;
  box-shadow: ${boxShadow};
`;
