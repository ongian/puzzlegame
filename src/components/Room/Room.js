import React, { useContext } from 'react';
import RoomOne from './RoomOne/RoomOne';
import RoomTwo from './RoomTwo/RoomTwo';
import PuzzleContext from '../../PuzzleContext/PuzzleContext';

const Room = (props) => {
    const puzzleCtx = useContext(PuzzleContext);

    return <React.Fragment>
        {puzzleCtx.currentRoom === null || puzzleCtx.currentRoom === undefined ? <RoomOne/> : null}
        {puzzleCtx.currentRoom === 'Room One' ||  puzzleCtx.currentRoom === '' ? <RoomOne /> : null}
        {puzzleCtx.currentRoom === 'Room Two' && <RoomTwo />}
    </React.Fragment>;
}
 
export default Room;