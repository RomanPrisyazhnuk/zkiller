import styled from 'styled-components';
import { borderRadius, boxShadow, color, width } from '../../../constants/styledConstants';

const footerHeight = 60;

export const BlockFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: ${width.large};
  display: flex;
  align-items: center;
  justify-content:center;
  z-index: 100;
  height: ${footerHeight}px;
  box-shadow: ${boxShadow};
}
`;

export const FooterButton = styled.button`
  width: 95%;
  background-color: ${color.green};
  border-radius: ${borderRadius};
  height: ${footerHeight - 5}px;
  color: ${color.white};
  font-weight: bold;
;
`;
