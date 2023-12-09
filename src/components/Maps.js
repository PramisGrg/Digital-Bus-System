import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Maps() {
  return (
    <div className='grid grid-cols-3'>
        <MapContainer className='cols-start-2 cols-end-3' center={[28.237988, 83.995590]} zoom={13}>
            <TileLayer 
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
         </MapContainer>
    </div>
  )
}
