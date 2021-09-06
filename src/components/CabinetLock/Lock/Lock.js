import React, { useState } from 'react';
import style from './Lock.module.css';

const Lock = (props) => {
    const [code, setCode] = useState(null);
    const [match, setMatch] = useState(false)
    const Increment = () => {
        if(code === 9){
            setCode(0)
        } else {
            setCode(code + 1)
        }
        if(props.secretCode === code){
            setMatch(true)
        }
        matchNum()
    }
    const Decrement = () => {
        if(code <= 0 || code === ''){
            setCode(9)
        } else {
            setCode(code - 1)
        }
        if(props.secretCode === code){
            setMatch(true)
        }
        matchNum()
    }
    const InputVal = (e) => {
        setCode(e.target.value)
        matchNum()
    }
    const matchNum = () => {
        const recentCode = code;
        if(props.secretCode === recentCode){
            setMatch(true)
        }
    }
    console.log(match)
    return <div className={style.lock}>
        <input type="button" onClick={Increment} className={style.plus} />
        <input type="tel" value={code} placeholder={props.placeholder} onChange={InputVal} className={style.code} defaultValue="" />
        <input type="button" onClick={Decrement} className={style.minus} />
    </div>;
}
 
export default Lock;