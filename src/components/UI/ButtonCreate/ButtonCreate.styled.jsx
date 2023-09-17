import styled from 'styled-components';

export const Button = styled.button`
  font-size: 40px;
  padding: 5px 20px;
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 1.0);
  background-color: #c60000;
  color: ${({ $dark }) => $dark ? '#ffffff' : '#ffffff'};
  position: fixed;
  bottom: 30px;
  right: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease, color 0.3s ease;
`;