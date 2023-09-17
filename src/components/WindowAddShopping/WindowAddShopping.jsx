import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../Portal/Portal';
import { Input } from '../UI/Input/Input';
import { ButtonCreate } from '../UI/ButtonCreate/ButtonCreate';
import { SelectedCategory } from '../SelectedCategory/SelectedCategory';
import { Window } from './WindowAddShopping.styled';
import { useTranslation } from 'react-i18next';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export const WindowAddShopping = ({isDarkMode, isSidebarOpen ,addNewShoppingToList }) => {
  const [windowAddShoppingStatus, setWindowAddShopingStatus] = useState(false);
  const [nameShopping, setNameShopping] = useState('');
  const [priceShopping, setPriceShopping] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('food');

  const nodeRef = useRef(null);

  useOutsideClick(nodeRef, '', setWindowAddShopingStatus);

  const { t } = useTranslation();

  const handleCreateNewShopping = () => {
    if (isSidebarOpen) return;

    if (windowAddShoppingStatus && nameShopping !== '') {
      const newShop = {
        name: nameShopping,
        cost: priceShopping,
        category: selectedCategory,
      };
      setNameShopping('');
      setPriceShopping('');
      addNewShoppingToList(newShop);
    }

    setWindowAddShopingStatus(prev => !prev);
  };

  return (
    <Portal portalId='portal'>
      <CSSTransition
        in={windowAddShoppingStatus}
        timeout={300}
        classNames='window'
      >
        {
          <Window $dark={isDarkMode} ref={nodeRef}>
            <SelectedCategory
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <Input
              type='text'
              placeholder={t('product')}
              value={nameShopping}
              changeInput={(e) => setNameShopping(e.target.value)}
            />
            <Input
              type='number'
              placeholder={t('price')}
              value={priceShopping}
              changeInput={(e) => setPriceShopping(e.target.value)}
            />
            <ButtonCreate text='+' isDarkMode={isDarkMode} handleClick={handleCreateNewShopping} />
          </Window>
        }
      </CSSTransition>
    </Portal>
  );
};
