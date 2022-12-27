import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
	width: "95%",
	height: "300px",
};

const center = {
	lat: 39.0914,
	lng: -84.4958,
};

function Map() {
	return (
		<LoadScript googleMapsApiKey="AIzaSyChZ0jeCFxGrR-wZ3XKjJMAsP2e4DwVQ2k">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
				{/* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(Map);
