import React from 'react';
import Lock from './Lock/Lock';
import style from './Cabinet.module.css';
const CabinetLock = (props) => {
    const cabinetCode = [
        {letter: 'R', number: 3}, 
        {letter: 'A', number: 6}, 
        {letter: 'I', number: 2}, 
        {letter: 'N', number: 9}, 
        {letter: 'B', number: 5}, 
        {letter: 'O', number: 9}, 
        {letter: 'W', number: 8}
    ];
    const LockArr = cabinetCode.map(cab => (
        <Lock secretCode={cab.number} key={cab.letter} placeholder={cab.letter} />
    ))
    return <div className={style.cabinetLock}>
        {LockArr}
        <button className={style.submit}>Submit</button>
    </div>;
}
 
export default CabinetLock;