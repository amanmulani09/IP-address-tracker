"use client"
import {useState,useRef,useEffect} from 'react';
import 'leaflet/dist/leaflet.css'
import Map from '@/components/Map';
import DetailsIP from "@/components/DetailsIP";
import UserInput from "@/components/UserInput";
import {FetchGeoData,fetchSTDCode} from '../utils/fetData'

export default function Home(){
  const inputRef = useRef<string>("");
  const [detailsData,setDetailsData] = useState({
  idAddress:'',
  location:'',
  timeZone:'',
  isp:''
  });
  const [stdData,setstdData] = useState([])
  const [cordinates,setCordinates] = useState([0,0])
  const getIpDetails = async()=>{
    const address:any = inputRef.current.valueOf();
    if(address){
      FetchGeoData(address.value).then(async(res)=>{
        const data:any= await res?.json();
        console.log(data,'Geo Data')
        setCordinates([data[0]?.latitude, data[0]?.longitude]);
        fetchSTDCode(data[0].CityName).then(async(res:any)=> {
          const data = await res.json();
          console.log('std Data')
        })
        })
    }

    // console.log('std data',stdData)
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