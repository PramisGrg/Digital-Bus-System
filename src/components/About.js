import React from "react";
import Navbar from "./Navbar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { markers } from "../utils/getLocation";

export default function About() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
