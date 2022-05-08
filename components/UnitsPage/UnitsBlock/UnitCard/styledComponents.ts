import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { boxShadow, color, fontSize, width } from '../../../../constants/styledConstants';

export const UnitBlockContent = styled(Grid)`
  display: flex;
`;

export const UnitAvatar = styled.img`
  //max-width: 300px;
  //width: ${width.large};
  height: 40px;
  flex-shrink: 0;
  left: 15px;
  object-fit: cover;
  float: left;
  margin-right: 20px;
  box-shadow: ${boxShadow};
`;
export const BuyUnitButton = styled.button`
  box-shadow: ${boxShadow};
`;
