import { NewsItem } from "./NewsItem";
import { useFetch } from "../hooks/useFetch";

export const News = () => {
    let { data, loading, error } = useFetch(
        `${import.meta.env.VITE_API_URL}/api/nyheder?populate=*`
    );

    data = data?.data;

    return (
        <div className="w-1/3 flex flex-col gap-6">
            <h2 className="uppercase text-4xl">Nyheder</h2>
            {/* <NewsList /> */}
            <div className="h-full flex flex-col gap-4 overflow-y-scroll">
                {loading && <p>Henter Nyheder...</p>}
                {error && <p>Fejl: {error.message}</p>}
                {data &&
                    data.map((news) => (
                        <NewsItem
                            key={news.id}
                            title={news.titel}
                            date={news.date}
                            image={`${import.meta.env.VITE_API_URL}${
                                news.image[0].formats.small.url
                            }`}
                            description={news.description}
                        />
                    ))}
            </div>
        </div>
    );
};
