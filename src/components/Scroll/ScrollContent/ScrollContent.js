import React, {useContext, useReducer, useEffect, useState } from 'react';
import style from './ScrollContent.module.css';
import PuzzleContext from '../../../PuzzleContext/PuzzleContext';
import BraileChart from '../../../image/BraileChart.gif';
import Shield from './Shield/Shield';
import CabinetLock from '../../CabinetLock/CabinetLock';

const reducerFN = (state, action) => {
    const findShield = (clue) => {
        if (clue.includes('Shield')){
          return clue;
        }
    };
    switch (action.type) {
        case 'Cabinet':
            return {...state, name: 'Cabinet', message: 'The is Cabinet is locked, the code must be somewhere'}
        case 'Case':
            return {...state, name: 'Case', message: 'Seem\'s like a code, maybe we could use it later', clueImage: BraileChart }
        case (findShield(action.type)):
            return {...state, name: 'Shield', message: 'What is this number for?' }
        default:
            return {...state};
    }
}
const initialState = {
    message: '',
    clueImage: '',
    isLock: false,
    name: ''
}
const ScrollContent = (props) => {
    const pzlCtx = useContext(PuzzleContext);
    const [state, dispatch] = useReducer(reducerFN, initialState);
    //const [clueMsg, setClueMsg] = useState(null)
    //let {message, clueImage, isLock} = state;
    useEffect(() => {
        dispatch({type: pzlCtx.currentClues})
    }, [pzlCtx.currentClues]);
    const shieldNumArr = [
        {color: 'green', number: 'IX'}, 
        {color: 'indigo', number: 'VIII'},
        {color: 'black', number: 'I'},
        {color: 'red', number: 'III'},
        {color: 'yellow', number: 'II'},
        {color: 'blue', number: 'V'}, 
        {color: 'violet', number: 'IV'},
        {color: 'orange', number: 'VI'},
    ];
    let shieldNum;
    if(pzlCtx.currentClues.includes('Shield')){
        shieldNum = pzlCtx.currentClues.toString().substring(pzlCtx.currentClues.toString().length - 1, pzlCtx.currentClues.toString().length)
    }
    return (<React.Fragment>
        <span onClick={pzlCtx.hideModal} className={style.close}>x</span>
        <h2>{state.name}</h2>
        {state.message && <p>{state.message}</p>}
        {state.clueImage && <div className={style['image-container']}><img src={state.clueImage} alt={pzlCtx.currentClues} /></div>}
        {pzlCtx.currentClues.includes('Shield') && <Shield number={shieldNumArr[shieldNum - 1].number} color={shieldNumArr[shieldNum - 1].color} />}
        {pzlCtx.currentClues === 'Cabinet' && <CabinetLock />}
    </React.Fragment>);
}
 
export default ScrollContent;