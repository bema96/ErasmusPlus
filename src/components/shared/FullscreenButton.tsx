import { useFullscreen } from '../../hooks/useFullscreen';
import type { FullscreenButtonProps } from '../../types';

// Button component for toggling fullscreen mode
export function FullscreenButton({ className = '' }: FullscreenButtonProps) {
  const { isFullscreen, toggleFullscreen, isSupported } = useFullscreen();

  // Don't render if browser doesn't support fullscreen
  if (!isSupported) {
    return null; 
  }

  return (
    <button
      onClick={toggleFullscreen}
      className={`
        fixed top-7 right-8 z-[9999]
        bg-white hover:bg-gray-100 
        border-2 border-gray-100 hover:border-gray-400
        rounded-lg hover:shadow-xl
        p-3 transition-all duration-200
        ${className}
      `}
      title={isFullscreen ? 'Exit Fullscreen (ESC)' : 'Enter Fullscreen'}
    >
      {isFullscreen ? (
        // Exit fullscreen icon (X)
        <svg
          className="w-4 h-4 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        // Enter fullscreen icon (expand)
        <svg
          className="w-4 h-4 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      )}
    </button>
  );
}
