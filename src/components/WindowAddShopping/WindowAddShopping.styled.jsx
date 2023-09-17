import styled from 'styled-components';

export const Window = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  padding: 40px 10px 30px 10px;
  background-color: ${({ $dark }) => $dark ? '#868080' : '#fef2f4'};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 1.0);
  position: fixed;
  left: 0;
  top: -110%;
  z-index: 10;
  &.window-enter {
  top: -110%;
  }
  &.window-enter-done {
    top: 0;
    transition: top 300ms ease;
  }
  &.window-exit {
    top: 0;
  }
  &.window-exit-done {
    top: -110%;
    transition: top 300ms ease;
  }
`;
