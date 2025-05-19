import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";

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

    const mapMarkers = [
        {
            position: [57.04824449265668, 9.967544935816594],
            popup: "TechCollege",
        },
        {
            position: [40.7128, -74.006],
            popup: "New York City",
        },
        {
            position: [48.8566, 2.3522],
            popup: "Paris",
        },
        {
            position: [35.6895, 139.6917],
            popup: "Tokyo",
        },
        {
            position: [-33.8688, 151.2093],
            popup: "Sydney",
        },
        {
            position: [51.5074, -0.1278],
            popup: "London",
        },
    ];

    return (
        <div className="w-full border-3 border-black z-0">
            <MapContainer {...mapOptions}>
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                {mapMarkers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker.position}
                        eventHandlers={{
                            click: () => {
                                openModal();
                            },
                        }}
                        icon={redIcon}
                    />
                ))}
            </MapContainer>
        </div>
    );
};
