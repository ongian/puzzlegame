import React from 'react';
import ImageMapper from 'react-image-mapper';
import RoomOneImg from '../../../image/room_1.jpg';
const RoomOne = (props) => {
    //const [area, setArea] = useState({ hoveredArea: null, msg: null, moveMsg: null })
    // const mapClick = (area) => {
    //     if(area.name === 'Room 2') {
    //         console.log('Room 2')
    //     }
    //     if(area.name === 'Book'){
    //         console.log('Book')
    //     }
    // }
    const setRoom = (room) => {
        props.getRoom(room.name)
    }
    const MAP = {
        name: "Room One",
        areas: [
          { name: "Book", coords: [820,505,886,545,882,537,827,503], shape: "poly", strokeColor: "#e4df3b" },
          { name: "Room Two", coords: [135,165,131,325,147,343,171,340,173,198,155,183], shape: "poly", strokeColor: "#e4df3b" },
          { name: "Case", coords: [265,332,293,333,291,341,290,349,263,351], shape: "poly", strokeColor: "#e4df3b" },
          { name: "Cabinet", coords: [168,598,171,585,173,570,180,561,186,554,192,554,196,558,199,565,199,573,199,581,199,589,199,597,186,599], shape: "poly", strokeColor: "#e4df3b" },
        ]
    };
    
    // const enterArea = (area) => {
    //     setArea({ hoveredArea: area });
    // };
    
    // const leaveArea = (area) => {
    //     setArea({ hoveredArea: null });
    // };
    
    return <div className="room">
        <ImageMapper src={RoomOneImg} map={MAP} width={900}
    	onClick={setRoom}
    	// onMouseEnter={area => enterArea(area)}
    	// onMouseLeave={area => leaveArea(area)}
    />
    </div>
}

export default RoomOne;





