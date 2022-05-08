import styled from 'styled-components';
import { List, Divider } from 'semantic-ui-react';
import {
  screenSize,
  color,
  width,
  padding,
  borderRadius,
  margin,
  fontSize,
  boxShadow,
  background,
} from '../../constants/styledConstants';

export const SideBarWrapper = styled.div`
  min-width: 240px;
  min-height: fit-content;
  overflow: hidden;
  width: ${width.large};
  padding: ${padding.medium};
  background: ${background};
  border-radius: ${borderRadius.small};
  box-shadow: ${boxShadow};

  @media (max-width: ${screenSize.large}px) {
    padding: 20px 0 5px 20px;
  }
`;

export const HeaderWrapper = styled.div`
  width: ${width.large};
  position: relative;
  padding-right: 40px;
  @media (max-width: ${screenSize.large}px) {
    padding-right: 20px;
  }
`;

export const ImageBlock = styled.div`
  margin-right: ${margin.medium};
  border-radius: 50%;
  overflow: hidden;
`;

export const ImageAvatar = styled.img`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  margin-right: ${margin.medium};
  border-radius: 50%;
  overflow: hidden;
`;

export const TitleImage = styled.div`
  width: 40px;
  position: absolute;
  top: 5px;
`;

export const ImageCountBlock = styled.p`
  padding: 3px;
  min-width: 30px;
  height: 26px;
  border-radius: ${borderRadius.small};
  font-size: 16px;
  background: ${color.orange};
  text-align: center;
  color: ${color.white};
  font-weight: bold;
  position: absolute;
  right: 0;
`;

export const ItemList = styled(List.Item)`
  width: ${width.large};
  display: flex !important;
  align-items: center;
  position: relative;
  height: 210px;
  border-radius: ${borderRadius.small};
`;

export const ShowMore = styled.div`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-right: 35px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ShowLess = styled.div`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ShowLessDivider = styled(Divider)`
  margin-bottom: -10px !important;
`;

export const ListHeader = styled.div`
  margin-right: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 95%;
  white-space: nowrap;
  font-size: ${fontSize.xsmall};
  font-weight: bold;
  padding-right: ${padding.small};

  @media (max-width: ${screenSize.large}px) {
    font-size: 14px !important;
  }
  @media (max-width: ${screenSize.medium}px) {
    font-size: 16px;
  }
`;

export const ListContentCustomize = styled(List.Content)`
  width: ${width.large} !important;
  display: flex !important;
  align-items: center;
  justify-content: space-between !important;
`;

export const ListCustomize = styled(List)`
  width: ${width.large};
  margin: 0 !important;
  @media (max-width: ${screenSize.large}px) {
    padding-right: ${padding.medium} !important;
  }
`;

export const DividerCustomize = styled(Divider)`
  margin: 0 !important;
  margin-right: 40px !important;
  @media (max-width: ${screenSize.large}px) {
    margin-right: 25px !important;
  }
`;
