import styled from 'styled-components';
import { color, fontSize, width } from '../../constants/styledConstants';

export const ToggleBlock = styled.div`
  width: ${width.xsmall};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${color.darkGrey};
`;

export const ToggleBlockItem = styled.div``;

export const ToggleBlockTitleItem = styled(ToggleBlockItem)`
  text-align: center;
`;

export const ToggleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .ui.toggle.checkbox input ~ .box:before,
  .ui.toggle.checkbox input ~ label:before,
  .ui.toggle.checkbox input:checked ~ .box:before,
  .ui.toggle.checkbox input:checked ~ label:before {
    background: linear-gradient(45deg, ${color.lightViolet} 33%, ${color.violet}) !important;
    -webkit-text-fill-color: transparent;
  }
`;

export const ToggleText = styled.span`
  font-size: ${fontSize.medium};
`;
