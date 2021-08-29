import React from 'react';
import ImageMapper from 'react-image-mapper';
import RoomTwoImg from '../../../image/room_2.jpg';
const RoomTwo = (props) => {
    //const [area, setArea] = useState({ hoveredArea: null, msg: null, moveMsg: null })
    const mapClick = (area) => {
        if(area.name === 'Room 2') {
            console.log('Room 2')
        }
        if(area.name === 'Book'){
            console.log('Book')
        }
    }
    const MAP = {
        name: "Room Two",
        areas: [
          { name: "Shield", coords: [178,194,236,199,230,230,221,244,202,256,182,243,176,228], shape: "poly", strokeColor: "#e4df3b" },
          { name: "Secret Door", coords: [858,378,857,390,869,391,869,379], shape: "poly", strokeColor: "#e4df3b" },
        ]
    };
    
    // const enterArea = (area) => {
    //     setArea({ hoveredArea: area });
    // };
    
    // const leaveArea = (area) => {
    //     setArea({ hoveredArea: null });
    // };
    
    return <div className="room">
        <ImageMapper src={RoomTwoImg} map={MAP} width={900}
    	onClick={mapClick}
    	// onMouseEnter={area => enterArea(area)}
    	// onMouseLeave={area => leaveArea(area)}
    />
    </div>
}

export default RoomTwo;





