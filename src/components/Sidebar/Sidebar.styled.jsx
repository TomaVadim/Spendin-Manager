import styled from 'styled-components';

export const Aside = styled.aside `
  width: 60%;
  position: fixed;
  top: 0;
  left: -110%;
  z-index: 10;
  height: 100vh;
  background-color: ${({ $dark }) => $dark ? '#868080' : '#fef2f4'};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 16px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 1.0);
  @media screen and (min-width: 667px) {
    width: 30%;
  }
  @media screen and (min-width: 1080px) {
    width: 20%;
  }
  &.open-enter {
  left: -110%;
  }
  &.open-enter-done {
  top: 0;
  left: 0;
  transition: left 300ms ease, top 300ms ease;
  }
  &.open-exit {
  left: 0;
  }
  &.open-exit-done {
  top: 0;
  left: -110%;
  transition: left 300ms ease, top 300ms ease;
  }
`;

export const Container = styled.div`
    padding: 20px 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 100%;
    &.burger-btn {
    font-size: 40px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export const IconWrapper = styled.div`
    font-size: 40px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;