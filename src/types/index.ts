// Types and interfaces for the application

export type NewsProps = {
    id: string;
    title: string;
    location: string;
    image: string;
    date: string;
    description: string;
}

export type ActivityProps = {
    id: string;
    title: string;
    image: string;
    who: string;
    location: {
        lat: number;
        lon: number;
    };
    city: string;
    startDate: string;
    endDate: string;
    description: string;
}

export type Coordinates = {
    lat: number;
    lng: number;
}

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export type ActivityModalProps = {
    isOpen: boolean;
    onClose: () => void;
    activity: ActivityProps | null;
}

export type LoadingStateProps = {
    loading: boolean;
    error: string | null;
    isEmpty?: boolean;
    loadingText?: string;
    errorText?: string;
    emptyText?: string;
    className?: string;
}