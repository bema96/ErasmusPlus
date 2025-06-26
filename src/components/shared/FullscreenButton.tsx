import { useFullscreen } from '../../hooks/useFullscreen';

interface FullscreenButtonProps {
  className?: string;
}

export function FullscreenButton({ className = '' }: FullscreenButtonProps) {
  const { isFullscreen, toggleFullscreen, isSupported } = useFullscreen();

  if (!isSupported) {
    return null; 
  }

  return (
    <button
      onClick={toggleFullscreen}
      className={`
        fixed top-6 right-8 z-50 
        bg-white hover:bg-gray-100 
        border-2 border-gray-300 hover:border-gray-400
        rounded-lg shadow-lg hover:shadow-xl
        p-3 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500
        ${className}
      `}
      title={isFullscreen ? 'Exit Fullscreen (ESC)' : 'Enter Fullscreen'}
    >
      {isFullscreen ? (
        // Exit fullscreen icon
        <svg
          className="w-5 h-5 text-gray-700"
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
        // Enter fullscreen icon
        <svg
          className="w-5 h-5 text-gray-700"
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
