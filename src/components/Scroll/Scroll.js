import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import ScrollContent from './ScrollContent/ScrollContent';
import style from './Scroll.module.css';
import PuzzleContext from '../../PuzzleContext/PuzzleContext';



const ModalBG = (props) => {
    const pzCtx = useContext(PuzzleContext)
    return <div className={style.overlay} onClick={pzCtx.hideModal}></div>
}
const ScrollContentModal = (props) => {
    
    return <div className={style.scroll}>
        <ScrollContent clue={props.clue} />
    </div>
}
const Scroll = (props) => {
    const pzCtx = useContext(PuzzleContext)
    return <React.Fragment>
        {ReactDOM.createPortal(<ModalBG />, document.getElementById('modal-background'))}
        {ReactDOM.createPortal(<ScrollContentModal clue={pzCtx.currentClues}/>, document.getElementById('modal-content'))}
    </React.Fragment>;
}
 
export default Scroll;