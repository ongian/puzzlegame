import React, {useContext} from 'react';
import ImageMapper from 'react-image-mapper';
import RoomTwoImg from '../../../image/room_2.jpg';
import PuzzleContext from '../../../PuzzleContext/PuzzleContext';

const RoomTwo = (props) => {
    const puzzleCtx = useContext(PuzzleContext);
    const guessed = (room) => {
        puzzleCtx.guessed(room.name);
    }
    const MAP = {
        name: "Room Two",
        areas: [
          { name: "Shield", coords: [178,194,236,199,230,230,221,244,202,256,182,243,176,228], shape: "poly", strokeColor: "#e4df3b" },
          { name: "Secret Door", coords: [858,378,857,390,869,391,869,379], shape: "poly", strokeColor: "#e4df3b" },
        ]
    };
    

    
    return <div className="room">
        <ImageMapper src={RoomTwoImg} map={MAP} width={900}
    	onClick={guessed}
    />
    </div>
}

export default RoomTwo;





