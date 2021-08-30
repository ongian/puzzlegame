import React, { useReducer, useEffect, useState, useContext } from 'react';
import RoomOne from './RoomOne/RoomOne';
import RoomTwo from './RoomTwo/RoomTwo';
import PuzzleContext from '../../PuzzleContext/PuzzleContext';
// const roomReducer = (state, action) => {
//     if(action.type === 'ROOM'){
//         if(action.currentRoom === 'Room One' || action.currentRoom === ''){
//             return {
//                 ...state,
//                 currentRoom: 'Room One',
//                 passable: true
//             }
//         }
//         if(action.currentRoom === 'Room Two'){
//             return {
//                 ...state,
//                 currentRoom: 'Room Two',
//                 passable: true
//             }
//         }
//     }
//     return {
//         ...state
//     }
// }
const Room = (props) => {
    const puzzleCtx = useContext(PuzzleContext);
    // const [puzzleRoom, setPuzzleRoom] = useState()
    // const [roomState, dispatchRoom] = useReducer(roomReducer, {currentRoom: '', passable: false});
    // useEffect(() => {
    //     const getRoom = (room) => {
    //         dispatchRoom({
    //             type: 'ROOM',
    //             currentRoom: puzzleCtx.currentRoom
    //         })
    //     }
    //     getRoom()
    // }, [puzzleCtx.currentRoom])
    
    // const getRoomState = (theRoom) => {
    //     setPuzzleRoom(theRoom)
    // }
    console.log(puzzleCtx.currentRoom)
    return <React.Fragment>
        {puzzleCtx.currentRoom === null || puzzleCtx.currentRoom === undefined ? <RoomOne/> : null}
        {puzzleCtx.currentRoom === 'Room One' ||  puzzleCtx.currentRoom === '' ? <RoomOne /> : null}
        {puzzleCtx.currentRoom === 'Room Two' && <RoomTwo />}
    </React.Fragment>;
}
 
export default Room;