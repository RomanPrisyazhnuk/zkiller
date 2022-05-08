import styled from 'styled-components';
import { color, fontSize, screenSize } from '../../constants/styledConstants';

export const SocialLinksContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  z-index: 100;
  height: 30px;
  @media (max-width: ${screenSize.small}px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
  i {
    color: ${color.darkGrey};
    &:hover {
      font-size: ${fontSize.large};
    }
  }
`;
