"use client"
import {useState,useRef,useEffect} from 'react';
import 'leaflet/dist/leaflet.css'
import Map from '@/components/Map';
import DetailsIP from "@/components/DetailsIP";
import UserInput from "@/components/UserInput";
import {FetchData} from '../utils/fetData'

export default function Home(){
  const inputRef = useRef<string>("");
  const [detailsData,setDetailsData] = useState({
  idAddress:'',
  location:'',
  timeZone:'',
  isp:''
  });
  const [cordinates,setCordinates] = useState([0,0])
  const getIpDetails = async()=>{
    const address = inputRef.current.valueOf();
    // const response = fetch(`${URL}${address}`);
    console.log(address)
    // const response = await FetchData(address)
    // console.log(response)
    // setDetailsData({
    //   idAddress:data?.ip,
    //   location:data?.location?.region + ", " + data?.location?.city,
    //   timeZone:data?.location.timezone,
    //   isp:data?.isp
    // })
    // setCordinates([data.location.lat, data.location.lng])
  }

  return(
    <main>
   <header className="h-52 bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center self-center">
    <h1 className="text-center text-white text-2xl font-semibold">IP Address Tracker</h1>
    <UserInput inputRef={inputRef} getIpDetails={getIpDetails}  />
    <DetailsIP />
   </header>
   <div>
    <Map coordinates={cordinates} />
   </div>
    </main>
  )
}