// import React from 'react';

// export interface MapProps {}
 
// export interface MapState {}
 
// class Map extends React.Component<MapProps, MapState> {
//   state = { }
//   render() { 
//     return ( <div>
//         <h1>Map</h1>
//     </div> 
//     );
//   }
// }
 
// export default Map;

import React, {useState} from "react";
import ReactMapGl from "react-map-gl";

export default function App() {
    const [viewport, setViewport] = useState({
        latitude: 34.092,
        longitude: -118.328,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });

    return <div>
         <ReactMapGl>
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            
         </ReactMapGl>
    </div>;
}; 