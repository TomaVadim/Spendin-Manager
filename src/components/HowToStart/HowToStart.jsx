import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { ButtonIcon } from '../UI/ButtonIcon/ButtonIcon';

import style from './HowToStart.module.scss';
import { useTranslation } from 'react-i18next';

export const HowToStart = () => {
  const [isVisibleInfo, setIsVisibleInfo] = useState(false);

  const { t } = useTranslation();

  const changeVisibleInfo = () => {
    setIsVisibleInfo((prev) => !prev);
  };

  return (
      <div className={style.howToStart}>
      <div className={style.container}>
        <div className={style.blockHeader}>
          <h5 className={style.title}>
            {t('title')}
          </h5>
          <ButtonIcon
            icon={faEllipsis}
            handleClick={changeVisibleInfo}
          />
        </div>
        <div className={style.describing}>
          {t('toMore')}
        </div>
        <div className={`${style.info} ${isVisibleInfo ? style.visible : ''}`}>
          <ul className={style.list}>
            <li className={style.item}>
              {t('moreInfo')}
            </li>
          </ul>
        </div>
      </div>
        </div>
  );
};
