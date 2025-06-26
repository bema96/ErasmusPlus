import { Marker } from "react-leaflet";
import { useMemo } from "react";
import { redIcon } from "./mapConfig";
import type { ActivityProps } from "../../types";

interface MapMarkersProps {
    activityArticles: ActivityProps[] | null;
    onMarkerClick: (activity: ActivityProps) => void;
}

export function MapMarkers({ activityArticles, onMarkerClick }: MapMarkersProps) {

    const mapMarkers = useMemo(() => {
        if (!activityArticles?.length) return [];

        return activityArticles
            .filter((activity: any) => {
                const coords = activity.location;
                return coords && typeof coords === 'object' && coords.lat && coords.lon;
            })
            .map((activity: any) => {
                const coords = activity.location;
                return {
                    position: [coords.lat, coords.lon] as [number, number],
                    data: activity,
                };
            });
    }, [activityArticles]);


    
    return (
        <>
            {mapMarkers.map((marker) => (
                <Marker
                    key={marker.data.id}
                    position={marker.position}
                    icon={redIcon}
                    eventHandlers={{
                        click: () => onMarkerClick(marker.data)
                    }}
                />
            ))}
        </>
    );
}
