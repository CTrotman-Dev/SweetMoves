import React from "react";

import { MapContainer, TileLayer, useMap, Marker, Popup, LayerGroup, Circle, FeatureGroup, Rectangle } from 'react-leaflet';

const MyMap = () => {
    // var map = L.map('map').setView([51.505, -0.09], 13);
    // console.log(map);
    const center = [20, 75];
    const rectangle1 = [
        [51.501549, -3.138890],
        [51.538341, -3.057490]
    ];
    const rectangle2 = [
        [51.501549, -3.138890],
        [51.547914, -3.229137]
    ];

    const blueOptions = { color: '#145DA0' };
    const yellowOptions = { color: '#d80000' };


    return (
        <MapContainer className="map" center={center} zoom={2} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FeatureGroup pathOptions={yellowOptions}>
                <Popup>Travelling Thailand</Popup>
                <Circle center={[9.553638, 100.077213]} radius={1000} />
            </FeatureGroup>
            <FeatureGroup pathOptions={yellowOptions}>
                <Popup>Travelling Australia1</Popup>
                <Circle center={[-31.961819, 115.837483]} radius={1000} />
            </FeatureGroup>
            <FeatureGroup pathOptions={yellowOptions}>
                <Popup>Travelling Bali</Popup>
                <Circle center={[-8.695327, 115.160073]} radius={1000} />
            </FeatureGroup>
            <FeatureGroup pathOptions={yellowOptions}>
                <Popup>Travelling Australia2</Popup>
                <Circle center={[-33.849115, 151.217584]} radius={1000} />
            </FeatureGroup>
            <FeatureGroup pathOptions={yellowOptions}>
                <Popup>Travelling New Zealand</Popup>
                <Circle center={[-36.848244, 174.821941]} radius={1000} />
            </FeatureGroup>


            <FeatureGroup pathOptions={blueOptions}>
                <Popup>Woodman's Dairy</Popup>
                <Circle center={[51.504712, -3.118951]} radius={1000} />
                {/* <Rectangle bounds={rectangle1} />
                <Rectangle bounds={rectangle2} /> */}
            </FeatureGroup>
            <FeatureGroup pathOptions={blueOptions}>
                <Popup>ALTech UK</Popup>
                <Circle center={[51.501915, -3.558493]} radius={1000} />
            </FeatureGroup>
            <FeatureGroup pathOptions={blueOptions}>
                <Popup>Integranet</Popup>
                <Circle center={[-31.953228, 115.852203]} radius={1000} />
            </FeatureGroup>
            <FeatureGroup pathOptions={blueOptions}>
                <Popup>Lockheed Martin UK</Popup>
                <Circle center={[50.880968, -1.242843]} radius={1000} />
            </FeatureGroup>



        </MapContainer>

    );
}

export default MyMap;