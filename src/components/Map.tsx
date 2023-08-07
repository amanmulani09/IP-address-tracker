"use client"
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import ChangeMapView from "./ChangeMapView"
import locationIcon from '/public/location.svg'
const Map = ({coordinates}:any)=>{

    return(
        <div className=" h-2/3 z-0 relative">
            <MapContainer 
            center={coordinates} zoom={13} 
            style={{width:'100%', height:'80vh'}}
            >

        <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       <Marker 
        position={coordinates} 
        icon={new Icon({iconUrl:locationIcon})}>
        <Popup >Pretty Popup</Popup>
      </Marker>
      <ChangeMapView coordinates={coordinates}/>
      </MapContainer>
        </div>
    )
}
export default Map