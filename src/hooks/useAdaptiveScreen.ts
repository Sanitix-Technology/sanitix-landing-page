import { useState, useEffect } from 'react';

export interface ScreenInfo {
  width: number;
  height: number;
  isMobile: boolean;
  isCompactMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isPortrait: boolean;
  isLandscape: boolean;
  isTallScreen: boolean;
  touchCapable: boolean;
}

export function useAdaptiveScreen(): ScreenInfo {
  const getScreenInfo = (): ScreenInfo => {
    if (typeof window === 'undefined') {
      return {
        width: 1200,
        height: 800,
        isMobile: false,
        isCompactMobile: false,
        isTablet: false,
        isDesktop: true,
        isPortrait: false,
        isLandscape: true,
        isTallScreen: false,
        touchCapable: false,
      };
    }

    const w = window.innerWidth;
    const h = window.innerHeight;
    const isMobile = w < 640;
    const isCompactMobile = w < 420;
    const isTablet = w >= 640 && w <= 1024;
    const isDesktop = w > 1024;
    const isPortrait = h > w;
    const isLandscape = !isPortrait;
    const isTallScreen = h >= 950 && h / w > 1.1;
    const touchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return {
      width: w,
      height: h,
      isMobile,
      isCompactMobile,
      isTablet,
      isDesktop,
      isPortrait,
      isLandscape,
      isTallScreen,
      touchCapable,
    };
  };

  const [screen, setScreen] = useState<ScreenInfo>(getScreenInfo);

  useEffect(() => {
    const handleResize = () => {
      const info = getScreenInfo();
      setScreen(info);

      // Set global data attributes on root HTML element for universal CSS selectors
      const root = document.documentElement;
      root.setAttribute('data-device', info.isMobile ? 'mobile' : info.isTablet ? 'tablet' : 'desktop');
      root.setAttribute('data-orientation', info.isPortrait ? 'portrait' : 'landscape');
      root.setAttribute('data-compact', info.isCompactMobile ? 'true' : 'false');
      root.setAttribute('data-tall', info.isTallScreen ? 'true' : 'false');
    };

    handleResize(); // Initial call

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return screen;
}
