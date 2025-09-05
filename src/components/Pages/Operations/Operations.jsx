import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import heroImg from "../../../assets/Herobg.webp"
import { Titles } from "../../Common/Titles";
// ✅ Fix Leaflet marker icon issue for Netlify/React builds
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
// Override the default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
// Locations with custom pin colors + flags
const locations = [
    { name: "United States", coords: [39.8283, -98.5795], flag: "us" },
    { name: "India", coords: [22.3511, 78.6677], flag: "in" },
    { name: "Dubai (UAE)", coords: [23.4241, 53.8478], flag: "ae" },
    { name: "Singapore", coords: [1.3521, 103.8198], flag: "sg" },
    { name: "Philippines", coords: [12.8797, 121.7740], flag: "ph" },
];

const Operations = () => (
    <>
        <section className="bg-black position-relative d-flex align-items-center " >
            <div className=" w-100 h-100 position-absolute top-0 start-0">
                <img src={heroImg} alt="Hero" className="img-fluid w-100 h-100 object-fit-cover
              " />
            </div>

            <div className="container position-relative z-3 pt-lg-8 pb-lg-1 pb-4">
                <div className='pb-5'>
                    <div className="row g-3 align-items-center justify-content-center">
                        <div className="col-12 col-lg-8 ">
                            <div className="content_outer text-center my-4 ">
                                <h1 className="text-white display-5 fw-bold font-primary">
                                    Driving Global Impact with Local Expertise
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5 bg-light-gray ">
        <div className="container ">
            {/* Title changed */}
            <Titles text="Global Operations" />
            <h3 className='sub-title text-black mb-4 text-center'>Operational excellence without borders.</h3>

            {/* Map Card */}
            <div className="card border-0  rounded-4 overflow-hidden z-1">
                <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom>
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
                    />
                    {locations.map(({ name, coords }) => (
                        <Marker key={name} position={coords} >
                            <Popup>
                                <strong>{name}</strong>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            {/* Legend with flags */}
            <div className="mt-4 text-center">
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    {locations.map(({ name, flag }) => (
                        <div key={name} className="d-flex align-items-center gap-2">
                            <span className={`fi fi-${flag}`} ></span>
                            <span className="fw-medium">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>

      
    </>
);

export default Operations;
