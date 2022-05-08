import styled from 'styled-components';
import { color, width } from '../../constants/styledConstants';

interface ICountProps {
  isLike?: boolean;
}

export const ButtonCount = styled.span<ICountProps>`
  color: ${(props: ICountProps) => (props.isLike ? color.green : color.red)};
  display: block;
  width: ${width.large};
  text-align: center;
`;
