import React, {useState, useContext} from 'react';
import Lock from './Lock/Lock';
import style from './Cabinet.module.css';
import PuzzleContext from '../../PuzzleContext/PuzzleContext';
import OldKey from '../../image/old_key.png';
const CabinetLock = (props) => {
    const [invalidMSG, setInvalidMSG] = useState('');
    const pzlCtx = useContext(PuzzleContext);
    const cabinetCode = [
        {letter: 'R', number: 3, valid: false}, 
        {letter: 'A', number: 6, valid: false}, 
        {letter: 'I', number: 2, valid: false}, 
        {letter: 'N', number: 9, valid: false}, 
        {letter: 'B', number: 5, valid: false}, 
        {letter: 'O', number: 8, valid: false}, 
        {letter: 'W', number: 4, valid: false}
    ];
    
    const validateCode = (code, index) => {
        if(code === cabinetCode[index].number){
            cabinetCode[index].valid = true
        } else {
            cabinetCode[index].valid = false
        }
    }
    let LockArr;
    

    if(!pzlCtx.isCabinetLock){
        LockArr = <div className="FoundKey">
            <p>Congratulations, you found the key</p>
            <img src={OldKey} width="300" alt="Key" />
        </div>;
    } else {
        LockArr = cabinetCode.map((cab, ind) => (
            <Lock validateCode={validateCode} codeOrder={ind} secretCode={cab.number} key={cab.letter} placeholder={cab.letter} />
        ))
    }
    const unlock = () => {
        if(cabinetCode.every(cab => cab.valid)){
            pzlCtx.unlockCabinet();
            setInvalidMSG('');
        } else {
            setInvalidMSG('Incorrect password, make sure you have the correct set of numbers')
        }
    }
    console.log(localStorage.getItem('CabinetLock'), ' Cabinet')
    return <div className={style.cabinetLock}>
        {invalidMSG ? <p>{invalidMSG}</p> : null}
        {LockArr}
        {pzlCtx.isCabinetLock && <button className={style.submit} onClick={unlock}>Submit</button>}
    </div>;
}
 
export default CabinetLock;