import React from "react";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { markers } from "../utils/getLocation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Maps() {
  const markers = [
    {
      geocode: [28.24045700322152, 83.99065751010016],
      popUp: "Prithivi Narayan Campus",
    },
    {
      geocode: [28.20331541264901, 83.96453250665368],
      popUp: "Basundhara Park",
    },
  ];
  const customIcon = new Icon({
    iconUrl: require("../assets/bus-station.png"),
    iconSize: [68, 68],
  });
  return (
    <div>
      <div className="">
        <MapContainer
          center={[28.237988, 83.99559]}
          zoom={13}
          style={{ height: "100vw", width: "100vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>
                <h2 className="font-bold">Prithivi Narayan Campus</h2>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
