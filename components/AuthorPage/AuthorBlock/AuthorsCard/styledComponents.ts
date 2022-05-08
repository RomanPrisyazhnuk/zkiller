import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import { boxShadow, color, fontSize, width } from '../../../../constants/styledConstants';

export const AuthorBlockContent = styled(Grid)`
  display: flex;
`;

export const AuthorAvatar = styled.img`
  max-width: 300px;
  width: ${width.large};
  height: 400px;
  flex-shrink: 0;
  left: 15px;
  object-fit: cover;
  float: left;
  margin-right: 20px;
  box-shadow: ${boxShadow};
`;

export const AuthorSocialLink = styled.a`
  cursor: pointer;
  font-size: ${fontSize.medium};
  i {
    color: ${color.darkGrey};
  }
`;
