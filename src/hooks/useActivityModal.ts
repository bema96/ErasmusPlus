import { useState } from "react";
import type { ActivityProps } from "../types";

export function useActivityModal() {
    const [selectedActivity, setSelectedActivity] = useState<ActivityProps | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle marker click, opening the modal and setting selected activity inside modal
    const handleMarkerClick = (activity: ActivityProps) => {
        setSelectedActivity(activity);
        setIsModalOpen(true);
    };

    // Function to close the modal and reset/clean-up selected activity
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedActivity(null);
    };

    
    return {
        selectedActivity,
        isModalOpen,
        handleMarkerClick,
        handleCloseModal
    };
}
