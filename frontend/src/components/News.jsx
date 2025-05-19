import { NewsItem } from "./NewsItem";

export const News = () => {
    return (
        <div className="w-1/3 flex flex-col gap-6">
            <h2 className="uppercase text-4xl">Nyheder</h2>
            {/* <NewsList /> */}
            <div className="h-full flex flex-col gap-4 overflow-y-scroll">
                <NewsItem
                    title="Nyhed 1"
                    date="2023-10-01"
                    image="https://picsum.photos/seed/picsum/300/200"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <NewsItem
                    title="Nyhed 2"
                    date="2023-10-02"
                    image="https://picsum.photos/seed/picsum/300/200"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <NewsItem
                    title="Nyhed 3"
                    date="2023-10-03"
                    image="https://picsum.photos/seed/picsum/300/200"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <NewsItem
                    title="Nyhed 4"
                    date="2023-10-04"
                    image="https://picsum.photos/seed/picsum/300/200"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <NewsItem
                    title="Nyhed 5"
                    date="2023-10-05"
                    image="https://picsum.photos/seed/picsum/300/200"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <NewsItem
                    title="Nyhed 6"
                    date="2023-10-06"
                    image="https://picsum.photos/seed/picsum/300/200"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <NewsItem
                    title="Nyhed 7"
                    date="2023-10-07"
                    image="https://picsum.photos/seed/picsum/300/200"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. consectetur adipiscing elit."
                />
            </div>
        </div>
    );
};
