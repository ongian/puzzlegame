import React, { useReducer } from 'react';

const PuzzleContext = React.createContext({
    passedRoom: ['Room One'],
    clues: [],
    currentClues: '',
    currentRoom: 'Room One',
    showModal: false,
    guessed: () => {},
    hideModal: () => {},
    
})

const PuzzleReducer = (state, action) => {
    switch (action.type) {
        case 'Room One':
            return {...state, currentRoom: action.type};
        case 'Room Two':
            return {...state, currentRoom: action.type};
        case 'Room Three':
            return {...state, currentRoom: action.type}
        case 'Show Modal':
            return {...state, showModal: true}
        case 'Hide Modal':
            return {...state, showModal: false}
        case 'Current Clues':
            return {...state, currentClues: action.clue}
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
    let {passedRoom, clues, currentRoom, showModal, currentClues} = puzzleState;
    const clicks = (clicked) => {
        if(clicked === 'Room One' || clicked === 'Room Two' || clicked === 'Room Three'){
            localStorage.setItem('Room', clicked);
            currentRoom = localStorage.getItem('Room');
        } else {
            let clueArray = [];
            let parsedClueLS = [];
            if(JSON.parse(localStorage.getItem('Clues'))){
                parsedClueLS = JSON.parse(localStorage.getItem('Clues'));
                dispatchPuzzleFN({type: 'Current Clues', clue: clicked});
                currentClues = clicked;
            }
            if(parsedClueLS.indexOf(clicked) === -1){
                clueArray = [...parsedClueLS, clicked];
                localStorage.setItem('Clues', JSON.stringify(clueArray));
                dispatchPuzzleFN({type: 'Show Modal'});
                showModal = true;
            }
            console.log(JSON.parse(localStorage.getItem('Clues')))
            if(clicked === 'Case'){
                console.log('Test')
            }
        }
        dispatchPuzzleFN({type: clicked});
    }
    const hideModalFN = () => {
        dispatchPuzzleFN({type: 'Hide Modal'});
        showModal = false;
        console.log('Hide Modal')
    }
    return <PuzzleContext.Provider value={{
        currentRoom: currentRoom,
        clues: clues,
        passedRoom: passedRoom,
        guessed: clicks,
        showModal: showModal,
        hideModal: hideModalFN,
        currentClues: currentClues
    }}>{props.children}</PuzzleContext.Provider>
}
export default PuzzleContext;