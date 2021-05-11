import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback } from 'react'
import MapGL, { Marker, Popup } from "react-map-gl";
 
const MapShow = props => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY

  const [viewport, setViewport] = useState({
    latitude: props.property.latitude,
    longitude: props.property.longitude,
    zoom: 13,
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback((newViewport) => setViewport(newViewport),[]);

  return (
    <div className="map-container">
      <div className="geocoder-container" ref={geocoderContainerRef}></div>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="320px"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        doubleClickZoom={false}
        scrollZoom={false}
      >
        <>
        <Marker
          key={props.property.id}
          latitude={props.property.latitude}
          longitude={props.property.longitude}
        >
          <button className="marker-btn">
            <img className="map-marker" src="./map-marker-alt-solid.svg" alt="map marker" />
          </button>
        </Marker>
        <Popup
          latitude={props.property.latitude}
          longitude={props.property.longitude}
          closeButton={false}
        >
          <div>
              <p>{props.property['price-per-day']}</p>
          </div>
        </Popup>
        </>
      </MapGL>
    </div>
  );
};

export default MapShow
