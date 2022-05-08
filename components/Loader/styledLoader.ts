import styled from 'styled-components';

interface StyledLoaderProps {
  marginNeed: boolean;
}

export const LoaderWrapper = styled.div<StyledLoaderProps>`
  margin-top: ${(props) => (props.marginNeed ? '0' : '100px')};
`;
