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

const Map = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GoogleMapsAPIkey
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
