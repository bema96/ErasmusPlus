// ---------- Imports ----------
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

import { useActivity } from "../../hooks/useActivityArticles";
import { useActivityModal } from "../../hooks/useActivityModal";
import { ActivityArticles } from "../ActivityArticle/Activity";
import { PopUpModal } from "../PopUpModal/Modal";
import { LoadingErrorEmpty } from "../shared/LoadingErrorHandling";
import { MapMarkers } from "./MapMarkers";
import { MultiActivityModal } from "./MultiActivityModal";
import { mapOptions } from "../../utils/mapConfig";
import type { ActivityProps } from "../../types";

// Component for rendering interactive map with activity markers
export function MapView() {
  // Hooks for data and modal state
  const { data: activityArticles, loading, error, refetch } = useActivity();
  const { selectedActivity, isModalOpen, handleMarkerClick, handleCloseModal } = useActivityModal();
  const [selectedActivities, setSelectedActivities] = useState<ActivityProps[] | null>(null);

  // Auto-refresh data every 5 minutes
  useEffect(() => {
    const fetchActivityInterval = setInterval(() => {
      refetch();
    }, 1000 * 60 * 5);
    return () => clearInterval(fetchActivityInterval);
  }, [refetch]);

  // Handle multiple activities at same location
  const handleMultipleActivities = (activities: ActivityProps[]) => {
    if (activities.length === 1) {
      handleMarkerClick(activities[0]);
    } else {
      setSelectedActivities(activities);
    }
  };

  // Handle activity selection from multi-activity modal
  const handleActivitySelect = (activity: ActivityProps) => {
    setSelectedActivities(null);
    handleMarkerClick(activity);
  };

  // Show loading or error states
  if (loading || error) {
    return (
      <LoadingErrorEmpty
        loading={loading}
        error={error}
        loadingText="Loading map..."
        errorText="Could not load map"
      />
    );
  }

  return (
    <>
      {/* Main map container */}
      <div className="w-full h-full border-3 border-black z-0">
        <MapContainer {...mapOptions} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          <ZoomControl position="topright" />
          <MapMarkers
            activityArticles={activityArticles}
            onMarkerClick={handleMultipleActivities}
          />
        </MapContainer>
      </div>

      {/* Modal for multiple activities at same location */}
      <MultiActivityModal
        isOpen={!!selectedActivities}
        onClose={() => setSelectedActivities(null)}
        activities={selectedActivities || []}
        onActivitySelect={handleActivitySelect}
      />

      {/* Modal for single activity details */}
      <PopUpModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedActivity && <ActivityArticles activity={selectedActivity} />}
      </PopUpModal>
    </>
  );
}
