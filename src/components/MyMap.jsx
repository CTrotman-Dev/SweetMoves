import React from "react";

import { MapContainer, TileLayer, Popup, FeatureGroup} from 'react-leaflet';

const MyMap = () => {
    const center = [51.513499, -3.15];

    const redOptions = { color: 'red' };

    return (
        <MapContainer className="map mx-auto" center={center} zoom={12} scrollWheelZoom={true}>
                      <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FeatureGroup pathOptions={redOptions}>
                <Popup>We deliver in this area</Popup>
                {/* <Circle center={[51.515, -3.11]} radius={500} /> */}
                {/* <Rectangle bounds={rectangle1} />
                <Rectangle bounds={rectangle2} /> */}
            </FeatureGroup>
        </MapContainer>

    );
}

export default MyMap;