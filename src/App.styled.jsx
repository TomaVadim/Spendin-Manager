import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ $dark }) => $dark ? '#868080' : '#fef2f4'};
  transition: background-color 0.3s ease;
`;