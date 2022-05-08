import styled from 'styled-components';
import { boxShadow, color, screenSize, width } from '../../constants/styledConstants';

const headerHeight = 50;

export const BlockHeader = styled.header`
  width: ${width.large};
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${color.white};
  z-index: 100;
  height: ${headerHeight}px;
  box-shadow: ${boxShadow};
}
`;

export const HeaderContainer = styled.header`
  position: fixed;
  width: ${width.large};
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media (max-width: ${screenSize.large}px) {
    //padding: 0 25px;
  }
`;

export const HeaderPadding = styled.div`
  height: ${headerHeight}px;
`;

export const SiteNameImage = styled.img`
  cursor: pointer;
  height: 90px;
  width: 400px;
`;

export const SiteImageWrap = styled.div`
  width: ${width.small};
  display: flex;
  align-items: center;
  justify-content: center;
`;
