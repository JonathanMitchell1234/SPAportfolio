import React from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps";

const MapWrapper = withGoogleMap((props) => {
	return <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />;
});

const GoogleMaps = () => {
    return (
		
		<MapWrapper containerElement={<div style={{ height: "400px" }} />} mapElement={<div style={{ height: "100%" }} />} />
		
	);
}

export default GoogleMaps;

