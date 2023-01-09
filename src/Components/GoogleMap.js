import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
	width: "95%",
	height: "300px",
};

const center = {
	lat: 39.0914,
	lng: -84.4958,
};

function Map() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyChZ0jeCFxGrR-wZ3XKjJMAsP2e4DwVQ2k",
	});

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} disableDefaultUI={true}>
			<Marker position={center} />
		</GoogleMap>
	) : (
		<></>
	);
}

export default Map;
