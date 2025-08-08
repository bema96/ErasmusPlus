import type { LoadingStateProps } from "../../types";

// Reusable component for handling loading, error, and empty states
export function LoadingErrorEmpty({ 
    loading, 
    error, 
    isEmpty = false,
    loadingText = "Loading...", 
    errorText = "Error",
    emptyText = "No data",
    className = "flex items-center justify-center w-full h-full" 
}: LoadingStateProps) {
    // Show loading state
    if (loading) {
        return (
            <div className={className}>
                <div className="text-lg">{loadingText}</div>
            </div>
        );
    }
    
    // Show error state
    if (error) {
        return (
            <div className={className}>
                <div className="text-lg text-red-600">{errorText}: {error}</div>
            </div>
        );
    }
    
    // Show empty state
    if (isEmpty) {
        return (
            <div className={className}>
                <div className="text-lg">{emptyText}</div>
            </div>
        );
    }
    
    return null;
}
