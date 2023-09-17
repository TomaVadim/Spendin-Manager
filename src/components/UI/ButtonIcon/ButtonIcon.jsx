import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './ButtonIcon.module.scss';

export const ButtonIcon = ({ icon, handleClick }) => {
  return (
    <div className={style.button} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};
