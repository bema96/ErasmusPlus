export const NewsItem = ({ title, date, image, description }) => {
    return (
        <div className="flex flex-col gap-2">
            <span>{date}</span>
            <img className="h-52 object-cover" src={image} alt={title} />
            <div>
                <h3 className="font-medium">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
