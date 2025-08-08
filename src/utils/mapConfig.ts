import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";

// Fix for default leaflet icons
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

// Custom red marker icon
export const redIcon = new L.Icon({
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

// Map configuration options
export const mapOptions = {
    center: [55.6761, 12.5683] as [number, number],
    zoom: 0,
    minZoom: 2,
    maxBounds: [
        [-85, -180],
        [85, 180],
    ] as [[number, number], [number, number]],
    maxBoundsViscosity: 1.0,
    zoomControl: false,
};
