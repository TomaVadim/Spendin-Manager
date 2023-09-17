import { Link } from 'react-router-dom';

import { BurgerLink } from '../BurgerLink/BurgerLink';

import style from './SidebarContent.module.scss';
import { useTranslation } from 'react-i18next';

export const SidebarContent = ({ isOpen, handleSidebarOpen }) => {
  const { t } = useTranslation();

  return (
    <div className={style.content}>
      <h4 className={style.wellcome}>{t('wellcome')}</h4>
      <nav className={style.nav}>
        <ul className={style.list}>
          <BurgerLink handleSidebarOpen={handleSidebarOpen}>
            <Link to='/'>
              {t('burgerHow')}
            </Link>
          </BurgerLink>
          <BurgerLink handleSidebarOpen={handleSidebarOpen}>
            <Link to='/category'>
              {t('burgerCategory')}
            </Link>
          </BurgerLink>
          <BurgerLink handleSidebarOpen={handleSidebarOpen}>
            <Link to='/about'>
              {t('burgerAbout')}
            </Link>
          </BurgerLink>
        </ul>
      </nav>
      <div className={style.currentDate}>03.07.1997</div>
    </div>
  );
};
