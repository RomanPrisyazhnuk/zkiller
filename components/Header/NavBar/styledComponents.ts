import styled from 'styled-components';
import { screenSize, color, width, fontSize, margin, padding } from '../../../constants/styledConstants';
import fonts from '../../../constants/fonts';

export const NavBarMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: ${width.xsmall};
  @media (max-width: ${screenSize.small}px) {
    display: none;
    justify-content: center;
    align-items: center;
  }
`;

export const LinkItem = styled.a`
  font-family: ${fonts.header};
  text-transform: uppercase;
  font-style: normal;
  font-weight: normal;
  font-size: ${fontSize.medium};
  line-height: 45px;
  text-align: center;
  margin: 0 ${margin.medium};
  padding: 0 ${padding.medium};
  ${(props) => props.theme.active && `background-color: ${color.grey}`};
  border-radius: 25px;
  color: ${(props) => (props.theme.active ? color.white : color.grey)};
  height: 43px;
  transition: 0.2s;
  cursor: pointer;

  @media (max-width: ${screenSize.large}px) {
    font-size: ${fontSize.medium};
    margin: 0 20px;

    &:first-child {
      margin: 0 20px 0 0;
    }

    &:last-child {
      margin: 0 0 0 20px;
    }
  }

  &:hover {
    color: ${color.black};
  }
`;
