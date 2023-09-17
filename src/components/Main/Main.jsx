import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { HowToStart } from '../HowToStart/HowToStart';
import { AboutUs } from '../AboutUs/AboutUs';
import { Sidebar } from '../Sidebar/Sidebar';
import { SidebarContent } from '../SidebarContent/SidebarContent';

import style from './Main.module.scss';
import { ShoppingList } from '../ShoppingList/ShoppingList';

export const Main = ({isDarkMode, shoppingList, isOpen, handleSidebarOpen }) => {
  return (
    <BrowserRouter>
      <main className={style.main}>
        <div className={style.page}>
          <div className={style.container}>
                <Routes>
                  <Route path='/' element={<HowToStart />} />
                  <Route path='/about' element={<AboutUs />} />
                  <Route path='/category' element={<ShoppingList shoppingList={shoppingList} />} />
                </Routes>
          </div>
        </div>
        <Sidebar
          isDarkMode={isDarkMode}
          isOpen={isOpen}
          icon={faXmark}
          handleSidebarOpen={handleSidebarOpen}
        >
          <SidebarContent 
            isOpen={isOpen}
            handleSidebarOpen={handleSidebarOpen}
          />
        </Sidebar>
      </main>
    </BrowserRouter>
  );
};
