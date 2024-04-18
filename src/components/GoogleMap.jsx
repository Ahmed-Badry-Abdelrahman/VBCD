
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {
        height: '400px',
        width: '100%'
    };

    const defaultCenter = {
        lat: 40.712776,
        lng: -74.005974
    };

    return (
        <LoadScript
            googleMapsApiKey="YOUR_ACTUAL_API_KEY"
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
            </GoogleMap>
        </LoadScript>
    );
}

export default MapContainer;