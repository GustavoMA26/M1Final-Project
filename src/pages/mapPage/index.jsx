import "./style.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Icon } from 'leaflet';
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Height } from "@mui/icons-material";


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
    //     iconUrl: require("./image/pin.png"),
    //     iconSize: [38,38]
    // })
 
    // const { latitude, longitude } = markers[0]
    // console.log(markers)

    // const latLong = Object.values(markers.latitude);
    // console.log(latLong)

    return (
        <>
        <Header />
            <Main>
                <MapContainer center={[-27.593500, -48.558540]} zoom={13}>
                    <TileLayer
                    attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <MarkerClusterGroup>
                        {markers.map((marker, index) => {
                            return(
                            <Marker key={index} position= {[parseFloat(marker.latitude), parseFloat(marker.longitude)]}>
                                <Popup>
                                    <h3>{marker.company}</h3>
                                    <p>{marker.cnpj}</p>
                                </Popup>
                            </Marker>
                            )
                        })}
                    </MarkerClusterGroup>
                </MapContainer>
            </Main>
    </>

    )
}

export { Map }