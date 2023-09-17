import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Portal } from '../Portal/Portal';

import { Aside, Container, IconWrapper } from './Sidebar.styled';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export const Sidebar = ({isDarkMode, isOpen, children, icon, handleSidebarOpen}) => {
  const sidebarRef = useRef(null);

  useOutsideClick(sidebarRef, 'bars', handleSidebarOpen);
  
  return (
    <Portal portalId='portal'>
      <CSSTransition 
        in={isOpen}
        timeout={300}
        classNames='open'
      >
        <Aside $dark={isDarkMode} ref={sidebarRef}>
          <Container>
            <IconWrapper>
              <FontAwesomeIcon
                icon={icon}
                onClick={() => handleSidebarOpen(false)}
              />
            </IconWrapper>
            {children}
          </Container>
        </Aside>
      </CSSTransition>
    </Portal>
  );
};
