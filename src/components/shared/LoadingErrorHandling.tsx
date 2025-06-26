import type { LoadingStateProps } from "../../types";

export function LoadingErrorEmpty({ 
    loading, 
    error, 
    isEmpty = false,
    loadingText = "Indlæser...", 
    errorText = "Fejl",
    emptyText = "Ingen data",
    className = "flex items-center justify-center w-full h-full" 
}: LoadingStateProps) {
    if (loading) {
        return (
            <div className={className}>
                <div className="text-lg">{loadingText}</div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className={className}>
                <div className="text-lg text-red-600">{errorText}: {error}</div>
            </div>
        );
    }
    
    if (isEmpty) {
        return (
            <div className={className}>
                <div className="text-lg">{emptyText}</div>
            </div>
        );
    }
    
    return null;
}
