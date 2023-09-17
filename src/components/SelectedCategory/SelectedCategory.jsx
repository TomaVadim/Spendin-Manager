import { useTranslation } from "react-i18next";
import { Select } from "../UI/Select/Select";

import style from './SelectedCategory.module.scss'

export const SelectedCategory = ({selectedCategory, setSelectedCategory}) => {
  const { t } = useTranslation();

  return (
    <div className={style.category}>
    <span className={style.span}>
      {t('category')}
    </span>
    <Select 
      name='category'
      value={selectedCategory}
      changeSelect={(e) => setSelectedCategory(e.target.value)}
    />
  </div>
  );
};
