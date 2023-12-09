import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'

export default function Maps() {
  return (
    <MapContainer center={[28.237988, 83.995590]} zoom={13}>
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
    </MapContainer>
  )
}
