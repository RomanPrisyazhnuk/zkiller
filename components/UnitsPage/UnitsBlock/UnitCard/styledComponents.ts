import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { borderRadius, boxShadow, color, fontSize, width } from '../../../../constants/styledConstants';

export const UnitBlockContent = styled(Grid)`
  display: flex;
`;

export const UnitAvatar = styled.img`
  //max-width: 300px;
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
export const BuyUnitButton = styled.button`
  box-shadow: ${boxShadow};
  height: 55px;
  border-radius: ${borderRadius};
  color: ${color.white};
  background-color: ${color.hacky};
  width: 90px;
`;
