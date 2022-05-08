import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import fonts from '../../../constants/fonts';
import { color, fontSize, margin, padding, screenSize, width } from '../../../constants/styledConstants';

export const BannerItemWrap = styled.div`
  width: 420px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemWrapImage = styled(Image)`
  width: ${width.large} !important;
`;

export const ItemText = styled.div`
  font-size: ${fontSize.medium};
  text-align: center;
  line-height: normal;
  padding: 0 ${padding.small};
  color: ${color.white};
  font-weight: 500;
  font-family: ${fonts.header};
  margin-top: ${margin.small};
  @media (max-width: ${screenSize.small}px) {
    font-size: ${fontSize.small};
  }
`;

export const ItemImage = styled(Image)`
  width: 100px;
  height: 100px;
  @media (max-width: ${screenSize.small}px) {
    width: 60px;
    height: 60px;
  }
`;
