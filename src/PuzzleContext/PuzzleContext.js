import React, { useReducer } from 'react';

const PuzzleContext = React.createContext({
    passedRoom: ['Room One'],
    clues: [],
    currentClues: '',
    currentRoom: 'Room One',
    showModal: false,
    guessed: () => {},
    hideModal: () => {},
    messageClue: '',
    changeRoom: () => {}
    
})

const PuzzleReducer = (state, action) => {
    switch (action.type) {
        case 'Room One':
            return {...state, currentRoom: localStorage.getItem('Room')}
        case 'Room Two':
            return {...state, currentRoom: localStorage.getItem('Room')}
        case 'Room Three':
            return {...state, currentRoom: localStorage.getItem('Room')}
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
    passedRoom: ['Room One'],
    clues: localStorage.getItem('Clues'),
    currentClues: '',
    currentRoom: localStorage.getItem('Room'),
    showModal: false,
    guessed: () => {},
    hideModal: () => {},
    messageClue: '',
    changeRoom: () => {}
}

// currentRoom: localStorage.getItem('Room'),
// clues: localStorage.getItem('Clues'),

export const PuzzleContextProvider = (props) => {
    const [puzzleState, dispatchPuzzleFN] = useReducer(PuzzleReducer, initialState);
    let {passedRoom, clues, currentClues, currentRoom, showModal} = puzzleState;
    const clicks = (clicked) => {
        if(clicked === 'Room One' || clicked === 'Room Two' || clicked === 'Room Three'){
            localStorage.setItem('Room', clicked);
            const curRoomLS = localStorage.getItem('Room');
            dispatchPuzzleFN({type: curRoomLS})
        } else {
            let clueArray = [];
            let parsedClueLS = [];
            if(JSON.parse(localStorage.getItem('Clues'))){
                parsedClueLS = JSON.parse(localStorage.getItem('Clues'));
            }
            if(parsedClueLS.indexOf(clicked) === -1 && clicked !== 'Cabinet'){
                clueArray = [...parsedClueLS, clicked];
                if(clicked.includes('Shield')){
                    dispatchPuzzleFN({type: 'Show Modal'});
                    dispatchPuzzleFN({type: 'Current Clues', clue: clicked});
                } else {
                    localStorage.setItem('Clues', JSON.stringify(clueArray));
                    dispatchPuzzleFN({type: 'Show Modal'});
                    dispatchPuzzleFN({type: 'Current Clues', clue: clicked});
                }
                
            } else {
                dispatchPuzzleFN({type: 'Show Modal'});
                dispatchPuzzleFN({type: 'Current Clues', clue: clicked});
            }
            if(clicked === 'Cabinet'){
                dispatchPuzzleFN({type: 'Show Modal'});
                dispatchPuzzleFN({type: 'Current Clues', clue: clicked});
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
        console.log('Hide Modal')
    }
    const changeRoom = (val) => {
        localStorage.setItem('Room', val);
        dispatchPuzzleFN({type: val})
    }
    return <PuzzleContext.Provider value={{
        currentRoom: currentRoom,
        clues: clues,
        passedRoom: passedRoom,
        guessed: clicks,
        showModal: showModal,
        hideModal: hideModalFN,
        currentClues: currentClues,
        changeRoom: changeRoom
    }}>{props.children}</PuzzleContext.Provider>
}
export default PuzzleContext;