import styled from 'styled-components';
import { boxShadow, borderRadius, width, background } from '../../constants/styledConstants';

export const ArticleBlockContainer = styled.div`
  width: ${width.large};
  display: block;
`;

export const ArticleContentBlock = styled.div`
  background: ${background};
  border-radius: ${borderRadius.small};
  box-shadow: ${boxShadow};
`;
