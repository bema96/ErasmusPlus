import { MapView } from "./components/MapView";
import { News } from "./components/News";
import { Modal } from "./components/Modal";
import { useState } from "react";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <main className="h-full flex flex-col gap-15">
                <div className="border-b-5 border-border">
                    <h1 className="uppercase text-7xl font-bold mb-4">
                        Praktik i Udlandet
                    </h1>
                </div>

                <div className="flex-1 flex gap-4 overflow-hidden">
                    <News />
                    <MapView openModal={() => setIsOpen(true)} />
                </div>
            </main>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
