import React, {useContext} from 'react';
import ImageMapper from 'react-image-mapper';
import RoomTwoImg from '../../../image/room_2.jpg';
import PuzzleContext from '../../../PuzzleContext/PuzzleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './RoomTwo.css'
const RoomTwo = (props) => {
    const puzzleCtx = useContext(PuzzleContext);
    //const BackArrow = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
    const guessed = (room) => {
        puzzleCtx.guessed(room.name);
    }
    const backIcon = () => {
        puzzleCtx.changeRoom('Room One');
    }
    const MAP = {
        name: "Room Two",
        areas: [
            { name: "Shield 1", coords: [62,96,91,99,119,103,116,138,105,158,84,166,62,149,55,133], shape: "poly", strokeColor: "#e4df3b" },
            { name: "Shield 2", coords: [188,112,216,114,242,118,237,150,224,169,209,175,191,164,182,143], shape: "poly", strokeColor: "#e4df3b" },
            { name: "Shield 3", coords: [300,126,328,127,349,131,345,163,335,177,321,188,305,176,294,159], shape: "poly", strokeColor: "#e4df3b" },
            { name: "Shield 4", coords: [403,137,431,139,450,142,448,173,440,186,424,194,408,185,400,168], shape: "poly", strokeColor: "#e4df3b" },
            { name: "Shield 5", coords: [500,149,523,152,543,156,536,188,526,197,513,206,501,196,495,181], shape: "poly", strokeColor: "#e4df3b" },
            { name: "Shield 6", coords: [0,180,19,180,51,183,49,219,39,231,29,240,15,245,0,240], shape: "poly", strokeColor: "#e4df3b" },
            { name: "Shield 7", coords: [179,194,209,197,235,198,231,230,223,246,202,258,183,244,178,229], shape: "poly", strokeColor: "#e4df3b" },
            { name: "Shield 8", coords: [358,210,384,210,405,213,402,242,394,256,376,267,362,256,354,239], shape: "poly", strokeColor: "#e4df3b" },
            { name: "Secret Door", coords: [858,379,870,379,870,390,858,391], shape: "poly", strokeColor: "#e4df3b" },
        ]
    };
    
    return (
        <div className="room">
            <ImageMapper src={RoomTwoImg} map={MAP} width={900}
            onClick={guessed} />
            <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={backIcon} />
        </div>
    )
}

export default RoomTwo;





