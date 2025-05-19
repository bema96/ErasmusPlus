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

                <div className="flex gap-7">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-medium text-2xl">
                            Tre forskellige sprog - en kode
                        </h2>
                        <div className="flex flex-col gap-2">
                            <span>
                                <strong>Hvem:</strong> 10 elever fra webudvikler
                                uddannelsen
                            </span>
                            <span>
                                <strong>Hvor:</strong> Gran Canaria, Spanien
                            </span>
                            <span>
                                <strong>Periode:</strong> 6. - 20. marts 2023 (2
                                uger)
                            </span>
                        </div>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Reiciendis numquam reprehenderit voluptatem
                            placeat rem culpa. Quisquam ab inventore asperiores
                            id accusantium, dolor a, non nulla excepturi ullam
                            ipsum, error adipisci!
                        </p>
                    </div>
                    <img
                        className="h-52 object-cover border-2 border-border"
                        src="https://picsum.photos/seed/picsum/300/200"
                        alt=""
                    />
                </div>

                <p className="overflow-y-scroll">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, quod alias debitis ipsum at dolorum. Accusamus optio,
                    voluptates velit maxime laborum error eligendi natus minus
                    quam. Asperiores dicta iste qui architecto a excepturi
                    doloribus. Dignissimos eius debitis excepturi quibusdam,
                    voluptate culpa iusto aliquam, id, animi quasi amet vel
                    maiores fugit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Natus, quod alias debitis ipsum at
                    dolorum. Accusamus optio, voluptates velit maxime laborum
                    error eligendi natus minus quam. Asperiores dicta iste qui
                    architecto a excepturi doloribus. Dignissimos eius debitis
                    excepturi quibusdam, voluptate culpa iusto aliquam, id,
                    animi quasi amet vel maiores fugit. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Natus, quod alias debitis
                    ipsum at dolorum. Accusamus optio, voluptates velit maxime
                    laborum error eligendi natus minus quam. Asperiores dicta
                    iste qui architecto a excepturi doloribus. Dignissimos eius
                    debitis excepturi quibusdam, voluptate culpa iusto aliquam,
                    id, animi quasi amet vel maiores fugit. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Natus, quod alias
                    debitis ipsum at dolorum. Accusamus optio, voluptates velit
                    maxime laborum error eligendi natus minus quam. Asperiores
                    dicta iste qui architecto a excepturi doloribus. Dignissimos
                    eius debitis excepturi quibusdam, voluptate culpa iusto
                    aliquam, id, animi quasi amet vel maiores fugit.
                </p>
            </div>
        </div>
    );
};
