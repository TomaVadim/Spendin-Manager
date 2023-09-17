import { useTranslation } from 'react-i18next';
import style from './Select.module.scss';

export const Select = ({name, changeSelect}) => {
  const { t } = useTranslation();

  return (
      <select 
        className={style.select} 
        name={name} 
        id={name}
        onChange={changeSelect}
      >
        <option value='foods'>{t('optionFoods')}</option>
        <option value='clothing'>{t('optionClothing')}</option>
        <option value='health'>{t('optionHealth')}</option>
        <option value='education'>{t('optionEducation')}</option>
        <option value='transport'>{t('optionTransport')}</option>
        <option value='pets'>{t('optionPets')}</option>
        <option value='bills'>{t('optionBills')}</option>
        <option value='electronics'>{t('optionElectronics')}</option>
      </select>
  );
};
