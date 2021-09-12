import React, {useContext} from 'react';
import ImageMapper from 'react-image-mapper';
import RoomThreeImg from '../../../image/room_3.jpg';
import PuzzleContext from '../../../PuzzleContext/PuzzleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './RoomThree.css'
const RoomThree = (props) => {
    const puzzleCtx = useContext(PuzzleContext);
    const guessed = (room) => {
        puzzleCtx.guessed(room.name);
        console.log('Book')
    }
    const backIcon = () => {
        puzzleCtx.changeRoom('Room Two');
    }
    const MAP = {
        name: "Room Three",
        areas: [
            { name: "Book", coords: [682,641,682,617,687,584,805,581,813,613,812,640], shape: "poly", strokeColor: "#e4df3b" }
        ]
    };
    
    return (
        <div className="room">
            <ImageMapper src={RoomThreeImg} map={MAP} width={900} onClick={guessed} />
            <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={backIcon} />
        </div>
    )
}

export default RoomThree;





