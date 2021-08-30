import React, { useState, useReducer } from 'react';

const PuzzleContext = React.createContext({
    passedRoom: ['Room One'],
    clues: [],
    currentRoom: 'Room One',
    setRoom: () => {},
    setClues: () => {}
})

const PuzzleReducer = (state, action) => {
    if(action.type === 'ROOM'){

    }
    if(action.type === 'Clue'){
        
    }
}
export const PuzzleContextProvider = (props) => {
    const [curRoom, setCurRoom] = useState(localStorage.getItem('Room'));
    const [clueState, setClueState] = useState([]);
    const [puzzleState, dispatchPuzzleFN] = useReducer(PuzzleReducer, {
        currentRoom: localStorage.getItem('Room'),
        clues: localStorage.getItem('Clues')
    })
    const setRoom = (roomname) => {
        localStorage.setItem('Room', roomname);
        setCurRoom(localStorage.getItem('Room'));
    }
    const setClues = (clue) => {
        const clueArray = [];
        if(clueArray.indexOf(clue) === -1){
            clueArray.push(clue)
        }
        localStorage.setItem('Clue', clueArray);
        setClueState(clueArray);
    }
    return <PuzzleContext.Provider value={{
        currentRoom: curRoom,
        clues: clueState,
        passedRoom: ['Room One'],
        setCurrentRoom: setRoom,
        setClues: setClues
    }}>{props.children}</PuzzleContext.Provider>
}
export default PuzzleContext;