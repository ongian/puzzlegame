import React, {useContext, useReducer} from 'react';
import style from './ScrollContent.module.css';
import PuzzleContext from '../../../PuzzleContext/PuzzleContext';

const reducerFN = (state, action) => {
    switch (action.type) {
        case 'Cabinet':
            return {...state, message: 'The is locked, the key must be somewhere'}
        default:
            return {...state};
    }
}
const initialState = {
    message: '',
    clueImage: '',
    isLock: false
}
const ScrollContent = (props) => {
    const pzlCtx = useContext(PuzzleContext);
    const [state, dispatch] = useReducer(reducerFN, initialState);

    return (<React.Fragment>
        <span onClick={pzlCtx.hideModal} className={style.close}>x</span>
        <h2>{pzlCtx.currentClues}</h2>
        {pzlCtx.currentClues === 'Cabinet' && <p>The Cabinet is locked, the key must be somewhere.</p>}
        {props.imgLink ? <div>
            <img src={props.imgLink} alt={pzlCtx.currentClues} />
        </div>: null}
    </React.Fragment>);
}
 
export default ScrollContent;