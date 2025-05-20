import { IoCloseSharp } from "react-icons/io5";

export const Modal = ({ isOpen, onClose, activity }) => {
    return (
        <div
            className={`bg-black/40 fixed inset-0 z-10 w-full h-full flex justify-center items-center ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="relative bg-white max-w-4xl w-full p-9 border-8 border-black flex flex-col gap-6 max-h-140">
                <button
                    className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] text-white bg-black text-5xl font-bold rounded-full cursor-pointer"
                    onClick={() => onClose()}
                >
                    <IoCloseSharp />
                </button>
                {activity !== null && (
                    <>
                        <div className="flex gap-7 justify-between">
                            <div className="flex flex-col gap-4">
                                <h2 className="font-medium text-2xl">
                                    {activity.titel}
                                </h2>
                                <div className="flex flex-col gap-2">
                                    <span>
                                        <strong>Hvem:</strong> {activity.who}
                                    </span>
                                    <span>
                                        <strong>Hvor:</strong> {activity.where}
                                    </span>
                                    <span>
                                        <strong>Periode:</strong>{" "}
                                        {activity.period}
                                    </span>
                                </div>
                            </div>
                            <img
                                className="h-52 object-cover border-2 border-border"
                                src={`${import.meta.env.VITE_API_URL}${
                                    activity.image.formats.small.url
                                }`}
                                alt=""
                            />
                        </div>

                        <p className="overflow-y-scroll">
                            {activity.description}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
