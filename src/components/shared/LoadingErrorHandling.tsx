import { Spin, Alert } from 'antd';
import type { LoadingStateProps } from "../../types";

// Reusable component for handling loading, error, and empty states
export function LoadingErrorEmpty({ 
    loading, 
    error, 
    isEmpty = false,
    loadingText = "Loading...", 
    errorText = "Error",
    emptyText = "No data available",
    className = "flex items-center justify-center w-full h-full" 
}: LoadingStateProps) {
    
    // Show loading state with Ant Design Spin
    if (loading) {
        return (
            <div className={className}>
                <Spin 
                    tip={loadingText} 
                    size="large"
                    style={{ 
                        color: '#1890ff',
                        fontSize: '16px'
                    }}
                >
                    <div style={{
                        padding: '40px',
                        background: 'rgba(0, 0, 0, 0.02)',
                        borderRadius: '8px',
                        minHeight: '200px',
                        minWidth: '300px'
                    }} />
                </Spin>
            </div>
        );
    }
    
    // Show error state with Ant Design Alert
    if (error) {
        return (
            <div className={className}>
                <Alert
                    message={errorText}
                    description={error}
                    type="error"
                    showIcon
                    style={{ 
                        maxWidth: '400px',
                        margin: '20px'
                    }}
                />
            </div>
        );
    }
    
    // Show empty state with Ant Design Alert
    if (isEmpty) {
        return (
            <div className={className}>
                <Alert
                    message="No Content"
                    description={emptyText}
                    type="info"
                    showIcon
                    style={{ 
                        maxWidth: '400px',
                        margin: '20px'
                    }}
                />
            </div>
        );
    }
    
    return null;
}
