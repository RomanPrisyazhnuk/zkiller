import styled from 'styled-components';
import {
  boxShadow,
  borderRadius,
  color,
  fontSize,
  margin,
  padding,
  screenSize,
  width,
  background,
} from '../constants/styledConstants';
import { Grid } from 'semantic-ui-react';

export const ContentWrapper = styled.div`
  background-image: url(/static/background.jpg);
`;

export const Sidebar = styled.div`
  width: ${width.xsmall};
  padding: ${padding.large};
  display: flex;
  flex-direction: column;
`;

export const ContentBlock = styled.div`
  //width: ${width.small};
  padding-bottom: ${padding.small};
`;

export const CardImage = styled.img`
  width: ${width.large};
  height: 250px;
  border-radius: ${borderRadius};
`;

export const CardContainer = styled.div`
  //width: ${width.small};
  //padding: ${padding.medium} !important;
`;

export const LinkWrap = styled.div`
  width: ${width.large};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  padding: ${padding.medium};
  cursor: pointer;
  @media (max-width: ${screenSize.small}px) {
    width: ${width.large};
  }
`;

export const CardTextWrap = styled.div`
  width: ${width.medium};
  position: absolute;
  top: 170px;
  color: inherit;
  background: ${background};
  border-radius: ${borderRadius};
`;

export const GenderImage = styled.img`
  height: 795px;
  width: ${width.large};
`;

export const TitleText = styled.h1`
  font-size: ${fontSize.medium};
  position: relative;
  padding: ${padding.small};
  cursor: pointer;
`;

export const DescriptionText = styled.div`
  padding: ${padding.medium};
  color: ${color.black};
  margin-right: ${margin.small};
  background-color: ${color.white};
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentBlockContainer = styled.div`
  padding: ${padding.medium} 0;
  display: flex;
  margin-bottom: ${margin.medium};
  align-items: center;
  justify-content: space-between;
`;

export const CardBlockContainer = styled.div`
  padding: ${padding.medium};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  margin-bottom: ${margin.large};
`;

export const ArticlesGrid = styled(Grid)`
  padding: ${padding.medium};
`;

export const BlockWrapper = styled.div`
  width: ${width.large};
`;
