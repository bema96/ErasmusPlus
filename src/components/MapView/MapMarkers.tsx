import { Marker } from "react-leaflet";
import { useMemo } from "react";
import { redIcon } from "../../utils/mapConfig";
import type { ActivityProps, MapMarkersProps } from "../../types";

// Component for rendering map markers grouped by location
export function MapMarkers({ activityArticles, onMarkerClick }: MapMarkersProps) {
    // Memoized marker calculation for performance
    const mapMarkers = useMemo(() => {
        if (!activityArticles?.length) return [];

        // Filter activities with valid coordinates
        const validActivities = activityArticles.filter(activity => 
            activity.location?.lat && activity.location?.lon
        );

        // Group activities by coordinates (same location)
        const grouped = validActivities.reduce((acc, activity) => {
            const key = `${activity.location.lat},${activity.location.lon}`;
            acc[key] = acc[key] || [];
            acc[key].push(activity);
            return acc;
        }, {} as Record<string, ActivityProps[]>);

        // Convert grouped data to marker format
        return Object.entries(grouped).map(([coords, activities]) => {
            const [lat, lon] = coords.split(',').map(Number);
            return {
                position: [lat, lon] as [number, number],
                activities
            };
        });
    }, [activityArticles]);

    return (
        <>
            {/* Render markers on map */}
            {mapMarkers.map((marker) => (
                <Marker
                    key={`${marker.position[0]}-${marker.position[1]}`}
                    position={marker.position}
                    icon={redIcon}
                    eventHandlers={{
                        click: () => onMarkerClick(marker.activities)
                    }}
                />
            ))}
        </>
    );
}
