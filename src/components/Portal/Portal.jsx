import { createPortal } from 'react-dom';

export const Portal = ({ children, portalId }) => {
  const portalRoot = document.querySelector(`#${portalId}`) || document.body;

  return createPortal(
    children, 
    portalRoot,
  );
};