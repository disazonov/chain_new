import { useEffect, useState } from 'react';

function useScreen(maxWidth = 767) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      // handle sidebar disappearance from mobile to desktop resize
      if (window.innerWidth > 768 && document.body.classList.contains('sidebar-is-opened')) {
        document.body.classList.remove('sidebar-is-opened');
      }
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const isMobile = () => screenWidth <= maxWidth;

  return {
    screenWidth,
    isMobile
  };
}

export default useScreen;
