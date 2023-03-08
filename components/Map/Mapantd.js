import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMapEvent } from 'react-leaflet'
import React, { useState, useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { globalInfo } from '../test'


// initializing and showing map
function Mapantd({onFinishMap, position, setPosition}) {
  // const [position, setPosition] = useState({lat:0,lng:0})

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
  // function onFinishMap(values){
  //   globalInfo.city = values.city
  //   globalInfo.country = values.country
  //   globalInfo.LatLng = position
  //   console.log(position);
  // }

  return (
    <Form onFinish={onFinishMap}>
      <Form.Item label='Country' name={'country'} rules={[{
      required : true, type : 'country', message : 'Please enter a name'
      }]} >
        <Input/>
      </Form.Item>
      <Form.Item>
      <Form.Item label='City' name={'city'} rules={[{
        required : true, type : 'city', message : 'Please enter a name'
      }]} >
        <Input/>
        </Form.Item>
        <MapContainer className='mapantd' center={[51.505, -0.09]} zoom={13} scrollWheelZoom= {true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <LocationMarker/>
        </MapContainer>
        <Button type='primary' htmlType='submit'>Continue</Button>
      </Form.Item>
      
    </Form>
  )
}

export default Mapantd
