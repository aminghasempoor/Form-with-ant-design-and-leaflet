import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
import React, { useState } from 'react'
import { Button } from 'antd'



// initializing and showing map
function Mapantd() {
  const [position, setPosition] = useState(null)

  // find location and set the marker
  function LocationMarker () {
    const map = useMapEvent({
      move() {
        //console.log(map.getCenter());
        setPosition(map.getCenter())
      },
    })
    // initialize marker icon
    var LeafIcon = L.Icon.extend({
      options: {
        iconSize:     [38, 55],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
      } 
    });
    var greenIcon = new LeafIcon({iconUrl: '/location.png'})
    
    return position === null ? null : (
      <Marker icon={greenIcon} position={position}/>
    )
  }

  // log lat and lng in console
  function handleSubmit(){
    console.log(position);
  }

  return (
    <div>
      <MapContainer className='mapantd' center={[51.505, -0.09]} zoom={13} scrollWheelZoom= {true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <LocationMarker/>
      </MapContainer>
      <Button type='submit' onClick={handleSubmit}>Continue</Button>
    </div>
  )
}

export default Mapantd
