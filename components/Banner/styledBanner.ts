import styled from 'styled-components';
import { boxShadow, color, screenSize, width } from '../../constants/styledConstants';

export const BannerWrap = styled.div`
  width: ${width.large};
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  //background-image: url(/static/fullBanner.webp);
  background-repeat: repeat-y, repeat-y;
  background-position: left, right;
  background-size: cover;
  border-radius: 4px;
  box-shadow: ${boxShadow};
  margin-bottom: 20px;
  position: relative;
  @media (max-width: ${screenSize.small}px) {
    height: 170px;
    //background-image: url(/static/mobileBanner.webp);
  }
`;
export const BannerClose = styled.div`
  &:hover {
    color: ${color.orange};
  }
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${color.white};
`;
