import React, { useState, useRef, useCallback } from 'react'
import MapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import Geocoder from 'react-map-gl-geocoder'
import PropertyCard from './PropertyCard.jsx'
 
const MapIndex = props => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY
  const navControlStyle= {
    right: 10,
    top: 10
  };
  const [viewport, setViewport] = useState({
    latitude: 51.509865,
    longitude: -0.118092,
    zoom: 8,
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback((newViewport) => setViewport(newViewport),[]);
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    if(showMenu)
      setShowMenu(false)
    else
      setShowMenu(true)
  }

  return (
    <div className={"map-container" + (showMenu ? ' show' : '')}>
      <div className="geocoder-container" ref={geocoderContainerRef}></div>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100vw"
        height="calc(100vh - 113px)"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {
          props.properties.map(property => (
            <>
            <Marker
              key={property.id}
              latitude={property.attributes.latitude}
              longitude={property.attributes.longitude}
            >
              <button className="marker-btn">
                <img className="map-marker" src="./map-marker-alt-solid.svg" alt="map marker" />
              </button>
            </Marker>
            <Popup
              latitude={property.attributes.latitude}
              longitude={property.attributes.longitude}
              closeButton={false}
            >
              <div onClick={() => setSelectedProperty(property)}>
                <p>${property.attributes['price-per-day']} per day</p>
              </div>
            </Popup>
            </>
          ))
        }
        <NavigationControl style={navControlStyle} showZoom={true}/>
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </MapGL>
      <div className="map-toggler">
        <div className="open-close-wrap" onClick={() => handleClick()}>
          <span className="search-icon"></span>
          <button className="open-close"></button>
        </div>
      </div>

      {
        selectedProperty && 
          <PropertyCard property={selectedProperty ? selectedProperty : props.properties[0]} closeCard={setSelectedProperty}/>
      }

    </div>
  );
};

export default MapIndex
