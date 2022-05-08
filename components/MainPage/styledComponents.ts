import styled from 'styled-components';
import { color, width } from '../../constants/styledConstants';

export const TitleText = styled.h1`
  color: ${color.grey};
  font-size: 50px;
  font-weight: bold;
  max-width: 295px;
  line-height: normal;
`;

export const MainLogoWrap = styled.div`
    height: height: 100vh;
    width: ${width.large};
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const MainLogo = styled.img`
  height: 90vh;
  width: 110%;
`;
