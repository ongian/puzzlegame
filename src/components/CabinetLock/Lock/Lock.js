import React, { useState, useEffect } from 'react';
import style from './Lock.module.css';

const Lock = (props) => {
    const [code, setCode] = useState(null);
    //const [match, setMatch] = useState(false);
    useEffect(() => {
        props.validateCode(code, props.codeOrder);
    }, [code, props])
    const Increment = () => {
        if(code === 9){
            setCode(0)
        } else {
            setCode(code + 1)
        }
    }
    const Decrement = () => {
        if(code <= 0){
            setCode(9)
        } else if(code === props.placeholder){
            setCode(0)
        } else {
            setCode(code - 1)
        }
    }

    // const passCode = () => {
    //     props.getCode(code)
    // }
    //console.log(match)
    return <div className={style.lock}>
        <input type="button" onClick={Increment} className={style.plus} />
        <span>{code === null ? props.placeholder : code }</span>
        <input type="button" onClick={Decrement} className={style.minus} />
    </div>;
}
 
export default Lock;