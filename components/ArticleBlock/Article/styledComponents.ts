import styled from 'styled-components';
import { borderRadius, color, fontSize, padding, width } from '../../../constants/styledConstants';

export const ArticleContainer = styled.div`
  width: ${width.large};
  position: relative;
  border-radius: ${borderRadius}
  padding-bottom: ${padding.small};
`;

export const ArticleContentContainer = styled.div`
  padding: 0 ${padding.medium};
`;

export const ArticleText = styled.h1`
  font-size: ${fontSize.medium};
  color: ${color.black};
  padding: ${padding.small};
`;
export const ArticleDescriptionText = styled.p`
  font-size: ${fontSize.xsmall};
  color: ${color.black};
`;

export const ArticleTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArticleImage = styled.img`
  border-radius: ${borderRadius};
  width: ${width.large};
`;

export const ArticleAuthorLink = styled.p`
  font-size: ${fontSize.xsmall};
  color: ${color.black};
  padding-bottom: ${padding.small};
`;
