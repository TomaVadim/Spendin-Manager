import { Nav } from './NavShoppingList.styled';
import { Slider } from '../Slider/Slider';

export const NavShoppingList = ({ setSelectedCategory }) => {
  
  return (
    <>
      <Nav>
        <Slider setSelectedCategory={setSelectedCategory} />
      </Nav>
    </>
  );
};
