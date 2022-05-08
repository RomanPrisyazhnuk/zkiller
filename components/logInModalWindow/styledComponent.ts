import styled from 'styled-components';
import { Button, Icon, Modal, Container } from 'semantic-ui-react';
import fonts from '../../constants/fonts';
import { color, fontSize, padding } from '../../constants/styledConstants';

export const Btn = styled(Button)`
  background: ${color.orange};
  color: ${color.orange};
  font-family: ${fonts.header};
  border: none;
  font-size: 16px !important;
  text-align: center;
  min-height: 30px !important;
  width: 100px !important;
  padding: 6px 0 !important;
  white-space: pre-line !important;
`;

export const StyleHeaderTitle = styled(Modal.Header)`
  font-size: ${fontSize.medium} !important;
  font-weight: bold !important;
  border-bottom: none !important;
  margin: 0 27% !important;
  height: 20%;
`;

export const StyledCloseButton = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 20px;
  cursor: pointer;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${padding.small};
  height: 45%;
`;

export const ButtonSpan = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: ${fontSize.xsmall};
  line-height: 21px;
  font-family: ${fonts.header};
  padding: ${padding.small};
  &: before {
    content: '';
    display: inline-block;
    position: relative;
    top: -1px;
    width: 145px;
    height: 1px;
    vertical-align: middle;
    background: ${color.orange};
    left: -10px;
  }
  &: after {
    content: '';
    display: inline-block;
    position: relative;
    top: -1px;
    width: 145px;
    height: 1px;
    vertical-align: middle;
    background: ${color.orange};
    left: 10px;
    margin-right: -50%;
  }
`;

export const LinkBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${padding.small};
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: normal;
  font-size: ${fontSize.small};
  line-height: 23px;
  text-align: center;
  height: 35%;
`;

export const LinkItem = styled.a`
  color: ${color.orange};
`;

export const TitleBlock = styled(Container)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: ${fontSize.small};
  line-height: 23px;
  padding-top: ${padding.medium};
`;
