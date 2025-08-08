import { useState } from "react";
import type { ActivityProps } from "../types";

// Custom hook for managing activity modal state
export function useActivityModal() {
    const [selectedActivity, setSelectedActivity] = useState<ActivityProps | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle marker click - open modal with selected activity
    const handleMarkerClick = (activity: ActivityProps) => {
        setSelectedActivity(activity);
        setIsModalOpen(true);
    };

    // Close modal and reset selected activity
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedActivity(null);
    };

    return { selectedActivity, isModalOpen, handleMarkerClick, handleCloseModal };
}
