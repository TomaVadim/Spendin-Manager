import { Button } from './ButtonCreate.styled';

export const ButtonCreate = ({text, isDarkMode, handleClick}) => {
  return (
    <Button $dark={isDarkMode} onClick={handleClick}>
      {text}
    </Button>
  );
};
