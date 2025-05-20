import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

const redIcon = new L.Icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export const MapView = ({ openModal }) => {
    let { data, loading, error } = useFetch(
        `${import.meta.env.VITE_API_URL}/api/aktiviteter?populate=*`
    );

    data = data?.data;

    const [mapMarkers, setMapMarkers] = useState([]);

    const mapOptions = {
        center: [55.6761, 12.5683],
        zoom: 4,
        minZoom: 2,
        maxBounds: [
            [-85, -180],
            [85, 180],
        ],
        maxBoundsViscosity: 1.0,
        style: { height: "100%", width: "100%", zIndex: 10 },
    };

    useEffect(() => {
        if (loading) {
            console.log("Loading...");
            return;
        }

        if (error) {
            console.error("Error fetching data: ", error);
            return;
        }

        data.map((location) => {
            setMapMarkers((prevMarkers) => [
                ...prevMarkers,
                {
                    position: [location.location.lat, location.location.lng],
                    popup: location.titel,
                    data: location,
                },
            ]);
        });
    }, [data, loading, error]);

    return (
        <div className="w-full border-3 border-black z-0">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {mapMarkers.length > 0 && (
                <MapContainer {...mapOptions}>
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                    {mapMarkers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.position}
                            eventHandlers={{
                                click: () => {
                                    openModal(marker.data);
                                },
                            }}
                            icon={redIcon}
                        />
                    ))}
                </MapContainer>
            )}
        </div>
    );
};
