import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

export const ToggleTheme = ({ isDarkMode, setIsDarkMode }) => {

  const handleToggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='join-and-theme__theme' onClick={handleToggleDarkMode}>
      <FontAwesomeIcon icon={isDarkMode ? faToggleOn : faToggleOff} />
    </div>
  );
};
