import { useNews } from "../../hooks/useNewsArticles";
import { LoadingErrorEmpty } from "../shared/LoadingErrorHandling";
import { getLanguage } from "../../utils/language";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Component for displaying news articles with auto-refresh
export function NewsArticle() {
    const { data: newsArticles, loading, error, refetch } = useNews();
    const { t } = useTranslation();

    // Format date based on current language
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(getLanguage(), {
            weekday: 'long',
            day: 'numeric', 
            month: 'long',
            year: 'numeric'
        });
    };

    // Auto-refresh news every 5 minutes
    useEffect(() => {
        const fetchNewsInterval = setInterval(() => {
            refetch();
        }, 1000 * 60 * 5);
        return () => clearInterval(fetchNewsInterval);
    }, [refetch]);

    // Handle loading, error, and empty states
    const isEmpty = !loading && !error && newsArticles.length === 0;
    
    if (loading || error || isEmpty) {
        return (
            <LoadingErrorEmpty 
                className="flex items-center justify-center w-full h-full"
                loading={loading} 
                error={error} 
                isEmpty={isEmpty}
                loadingText="Loading news..." 
                errorText="Could not load news"
                emptyText="No news available"
            />
        );
    }

    // Sort articles by date (newest first)
    const sortedArticles = [...newsArticles].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <div className="news-articles mr-2 overflow-y-auto h-full" style={{ direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
                {sortedArticles.map((article: any) => (
                    <div 
                        key={article.id} 
                        className="news-article mb-5 pl-2 pr-5 overflow-hidden rounded shadow-lg border-1"
                    >
                        {/* Article publication date */}
                        <p className="text-lg mb-2">
                            {formatDate(article.date)}
                        </p>

                        {/* Article image if available */}
                        {article.image && (
                            <img 
                                className="w-full h-full object-cover"
                                src={article.image} 
                                alt={article.title}
                            />
                        )}

                        {/* Article title */}
                        <h2 className="break-words text-xl mt-2 mb-2">
                            <strong>{article.title}</strong>
                        </h2>

                        {/* Article description */}
                        <p className="break-words overflow-hidden text-ellipsis">
                            {article.description}
                        </p>

                        {/* Article location information */}
                        <p className="break-words mt-2 mb-2">
                            <strong>{t('location')}:</strong> {
                                typeof article.location === 'string' 
                                    ? article.location 
                                    : `Lat: ${article.location?.lat}, Lon: ${article.location?.lon}`
                            }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}