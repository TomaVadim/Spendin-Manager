import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToggleTheme } from "../ToggleTheme/ToggleTheme";

import { HeaderContainer, BurgerBtn, HeaderButtons } from "./Header.styled";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";

export const Header = ({faBars, isSidebarOpen , isDarkMode, faArrowRightToBracket, setIsDarkMode, handleSidebarOpen }) => {
  return (
    <HeaderContainer $dark={isDarkMode}>
    <div className='header__page header-page'>
      <div className='header-page__container _container'>
        <nav className='header-page__navigation'>
          <div className='header-page__burger burger-menu'>
            <BurgerBtn $open={isSidebarOpen}
              className='burger-menu__burger-btn'
              onClick={() => handleSidebarOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} />
            </BurgerBtn>
          </div>

            <HeaderButtons $dark={isDarkMode}>
                <SelectLanguage />
                <ToggleTheme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              <div className='join-and-theme__join'>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </div>
            </HeaderButtons>
        </nav>
      </div>
    </div>
  </HeaderContainer>
  );
};