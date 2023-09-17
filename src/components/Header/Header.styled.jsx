import styled from 'styled-components';

export const HeaderContainer = styled.header`
  .header {
    flex: 0 0 auto;
  &__page {
    /* background-color: ${({ $dark }) => $dark ? '#2b231d' : '#fd974f'}; */
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
  }
  }

.header-page {
  &__container {
    
  }
  &__navigation {
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }
  &__burger {
    color: #ce5a57;
  }
}
`;

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 30px;
  color: #c60000;
  transition: color 0.3s ease;
  cursor: pointer;
`;

export const BurgerBtn = styled.button`
  font-size: 40px;
  color: #c60000;
  background-color: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  @media screen and (min-width: 1080px) {
    visibility: ${({ $open }) => $open ? 'hidden' : 'visible'};
  }
`;