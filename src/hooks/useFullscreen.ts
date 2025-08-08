import { useState, useCallback, useEffect } from 'react';

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Check if browser supports fullscreen API
  const isSupported = useCallback(() => {
    return !!document.fullscreenEnabled;
  }, []);

  // Toggle between fullscreen and normal view
  const toggleFullscreen = useCallback(async () => {
    if (!isSupported()) return;

    try {
      if (!document.fullscreenElement) {
        // Enter fullscreen mode
        await document.documentElement.requestFullscreen();
      } else {
        // Exit fullscreen mode
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  }, [isSupported]);

  // Listen for fullscreen state changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Add event listener for fullscreen changes
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return {
    isFullscreen,
    toggleFullscreen,
    isSupported: isSupported(),
  };
}
