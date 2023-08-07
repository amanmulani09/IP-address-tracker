import {useMap} from 'react-leaflet'
const ChangeMapView = ({coordinates}:any)=>{
    const map = useMap();
    map.setView(coordinates,map.getZoom());
    return null;
}
export default ChangeMapView;
