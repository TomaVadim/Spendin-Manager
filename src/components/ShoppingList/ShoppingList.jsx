import { useState } from 'react';
import { FilteredList } from '../FilteredList/FilteredList';
import { NavShoppingList } from '../NavShoppingList/NavShoppingList';

export const ShoppingList = ({ shoppingList }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div>
      <NavShoppingList setSelectedCategory={setSelectedCategory}/>
      <FilteredList
        shoppingList={shoppingList}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};
