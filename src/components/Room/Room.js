import React, { useReducer, useEffect, useState } from 'react';
import RoomOne from './RoomOne/RoomOne';
import RoomTwo from './RoomTwo/RoomTwo';

const roomReducer = (state, action) => {
    if(action.type === 'ROOM'){
        if(action.currentRoom === 'Room One' || action.currentRoom === ''){
            return {
                ...state,
                currentRoom: 'Room One',
                passable: true
            }
        }
        if(action.currentRoom === 'Room Two'){
            return {
                ...state,
                currentRoom: 'Room Two',
                passable: true
            }
        }
    }
    return {
        ...state
    }
}
const Room = (props) => {
    const [puzzleRoom, setPuzzleRoom] = useState()
    const [roomState, dispatchRoom] = useReducer(roomReducer, {currentRoom: '', passable: false});
    useEffect(() => {
        const getRoom = (room) => {
            dispatchRoom({
                type: 'ROOM',
                currentRoom: puzzleRoom
            })
        }
        getRoom()
    }, [puzzleRoom])
    
    const getRoomState = (theRoom) => {
        setPuzzleRoom(theRoom)
    }
    return <React.Fragment>
        {roomState.currentRoom === 'Room One' ||  roomState.currentRoom === '' ? <RoomOne getRoom={getRoomState} /> : null}
        {roomState.currentRoom === 'Room Two' && <RoomTwo getRoom={getRoomState} />}
    </React.Fragment>;
}
 
export default Room;