import React, { useReducer } from 'react';

const PuzzleContext = React.createContext({
    passedRoom: ['Room One'],
    clues: [],
    currentRoom: 'Room One',
    guessed: () => {}
})

const PuzzleReducer = (state, action) => {
    switch (action.type) {
        case 'Room One':
            return {...state, currentRoom: action.type};
        case 'Room Two':
            return {...state, currentRoom: action.type};
        case 'Room Three':
            return {...state, currentRoom: action.type}
        default:
            return state;
    }
}
const initialState = {
    currentRoom: localStorage.getItem('Room'),
    clues: localStorage.getItem('Clues')
}
export const PuzzleContextProvider = (props) => {
    const [puzzleState, dispatchPuzzleFN] = useReducer(PuzzleReducer, initialState);
    let {passedRoom, clues, currentRoom} = puzzleState;
    const clicks = (clicked) => {
        if(clicked === 'Room One' || clicked === 'Room Two' || clicked === 'Room Three'){
            localStorage.setItem('Room', clicked);
            currentRoom = localStorage.getItem('Room');
        } else {
            let clueArray = [];
            let parsedClueLS = [];
            if(JSON.parse(localStorage.getItem('Clues'))){
                parsedClueLS = JSON.parse(localStorage.getItem('Clues'))
            }
            if(parsedClueLS.indexOf(clicked) === -1){
                clueArray = [...parsedClueLS, clicked];
                localStorage.setItem('Clues', JSON.stringify(clueArray))
            }
            console.log(JSON.parse(localStorage.getItem('Clues')))
            
        }
        dispatchPuzzleFN({type: clicked});
    }
    return <PuzzleContext.Provider value={{
        currentRoom: currentRoom,
        clues: clues,
        passedRoom: passedRoom,
        guessed: clicks
    }}>{props.children}</PuzzleContext.Provider>
}
export default PuzzleContext;