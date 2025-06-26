// ---------- Imports ----------
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useActivity } from "../../hooks/useActivityArticles";
import { useActivityModal } from "../../hooks/useActivityModal";
import { ActivityArticles } from "../ActivityArticle/Activity";
import { PopUpModal } from "../PopUpModal/Modal";
import { LoadingErrorEmpty } from "../shared/LoadingErrorHandling";
import { MapMarkers } from "./MapMarkers";
import { mapOptions } from "./mapConfig";
import { useEffect } from "react";

export function MapView() {
    const { data: activityArticles, loading, error, refetch } = useActivity();
    const { selectedActivity, isModalOpen, handleMarkerClick, handleCloseModal } = useActivityModal();

    // Fetch new data every 5 minutes
    useEffect(() => {
        const fetchActivityInterval = setInterval(() => {
            refetch();
        }, 1000 * 60 * 5);
        return () => clearInterval(fetchActivityInterval);
    }, [refetch]);


    // Handle loading, error, and empty state
    if (loading || error) {
        return <LoadingErrorEmpty loading={loading} error={error} 
        loadingText="Indlæser kort..." 
        errorText="Kunne ikke indlæse kort" />;
    }


    // Magic
    return (
        <>
            <div className="w-full h-full border-3 border-black z-0">
                <MapContainer {...mapOptions} style={{ height: "100%", width: "100%" }}>
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                    <ZoomControl position="topright" />
                    <MapMarkers 
                        activityArticles={activityArticles} 
                        onMarkerClick={handleMarkerClick} 
                    />
                </MapContainer>
            </div>
            
            <PopUpModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal}
            >
                {selectedActivity && <ActivityArticles activity={selectedActivity} />}
            </PopUpModal>
        </>
    );
}