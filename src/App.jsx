import { useContext, useState } from 'react';

import {
  faArrowRightToBracket,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from './providers/dark-mode-provider/dark-mode-provider';

import { WindowAddShopping } from './components/WindowAddShopping/WindowAddShopping';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import './App.scss';
import { Wrapper } from './App.styled';

export const App = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const addNewShoppingToList = (newShopping) => {
    setShoppingList([
      ...shoppingList,
      { id: shoppingList.length + 1, ...newShopping },
    ]);
  };

  const handleSidebarOpen = (boolean) => {
    setIsSidebarOpen(boolean);
  };

  return (
    <Wrapper $dark={isDarkMode}>
      <div className='wrapper'>
        <Header
          isSidebarOpen={isSidebarOpen}
          faBars={faBars} 
          isDarkMode={isDarkMode} 
          faArrowRightToBracket={faArrowRightToBracket}
          setIsDarkMode={setIsDarkMode}
          handleSidebarOpen={handleSidebarOpen}
        />

        <Main 
          isDarkMode={isDarkMode}
          shoppingList={shoppingList} 
          isOpen={isSidebarOpen} 
          handleSidebarOpen={handleSidebarOpen}
        />
        <Footer />

        <WindowAddShopping 
          isDarkMode={isDarkMode}
          isSidebarOpen={isSidebarOpen} 
          addNewShoppingToList={addNewShoppingToList} 
        />
      </div>
    </Wrapper>
  );
}
