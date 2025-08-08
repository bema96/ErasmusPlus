// Types and interfaces for the application

// Loading state props for components
export type LoadingStateProps = {
    loading: boolean;
    error: string | null;
    isEmpty?: boolean;
    loadingText?: string;
    errorText?: string;
    emptyText?: string;
    className?: string;
}

// News article properties
export type NewsProps = {
    id: string;
    title: string;
    location: string;
    image: string;
    date: string;
    description: string;
}

// Activity properties
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

// Coordinate system for map
export type Coordinates = {
    lat: number;
    lng: number;
}

// General modal component props
export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

// Activity modal specific props
export type ActivityModalProps = {
    isOpen: boolean;
    onClose: () => void;
    activity: ActivityProps | null;
}

// Multi-activity modal props for same location activities
export type MultiActivityModalProps = {
    isOpen: boolean;
    onClose: () => void;
    activities: ActivityProps[];
    onActivitySelect: (activity: ActivityProps) => void;
}

// Map markers component props
export type MapMarkersProps = {
    activityArticles: ActivityProps[] | null;
    onMarkerClick: (activities: ActivityProps[]) => void;
}

// Fullscreen button component props
export type FullscreenButtonProps = {
  className?: string;
}