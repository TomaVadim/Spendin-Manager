import style from './BurgerLink.module.scss';

export const BurgerLink = ({ children , handleSidebarOpen }) => {
  return (
    <li onClick={() => handleSidebarOpen(false)} className={style.li}>{children}</li>
  );
};