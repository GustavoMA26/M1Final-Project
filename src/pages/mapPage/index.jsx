import "./style.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Icon } from 'leaflet'

function Map () {

    const [markers, setMarkers] = useState([])

    useEffect(() => {
        const markers = JSON.parse(localStorage.getItem('newPharmacy'));
        if (markers) {
            setMarkers(markers)
        };
    }, [])
    console.log(markers)

    // const customIcon = new Icon({
    //     iconUrl: ("./img/plaholder.png"),
    //     iconSize: [38,38]
    // })
 
    // const { latitude, longitude } = markers[0]
    // console.log(markers)

    // const latLong = Object.values(markers.latitude);
    // console.log(latLong)

    return (
        <>
        <MapContainer center={[-27.593500, -48.558540]} zoom={13}>
            <TileLayer
            attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {markers.map(marker => {
                <Marker position= {[marker.latitude, marker.latitude]}>
                    <Popup>{marker.CNPJ}</Popup>
                </Marker>
            })}
        </MapContainer>
        </>

    )
}

export { Map }