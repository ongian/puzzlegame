import React, {useState} from 'react';
import Lock from './Lock/Lock';
import style from './Cabinet.module.css';

const CabinetLock = (props) => {
    const [isValid, setIsValid] = useState(false)
    const cabinetCode = [
        {letter: 'R', number: 3, valid: false}, 
        {letter: 'A', number: 6, valid: false}, 
        {letter: 'I', number: 2, valid: false}, 
        {letter: 'N', number: 9, valid: false}, 
        {letter: 'B', number: 5, valid: false}, 
        {letter: 'O', number: 9, valid: false}, 
        {letter: 'W', number: 8, valid: false}
    ];
    
    const validateCode = (code, index) => {
        if(code === cabinetCode[index].number){
            cabinetCode[index].valid = true
        } else {
            cabinetCode[index].valid = false
        }
    }
    let LockArr;
    if(isValid) {
        LockArr = <p>Congratulations, you found another clue!</p>;
    } else {
        LockArr = cabinetCode.map((cab, ind) => (
            <Lock validateCode={validateCode} codeOrder={ind} secretCode={cab.number} key={cab.letter} placeholder={cab.letter} />
        ))
    }

    const unlock = () => {
        if(cabinetCode.every(cab => cab.valid)){
            setIsValid(true)
        } else {
            setIsValid(false)
        }
        console.log(cabinetCode)
    }
    
    return <div className={style.cabinetLock}>
        {LockArr}
        <button className={style.submit} onClick={unlock}>Submit</button>
    </div>;
}
 
export default CabinetLock;