import React from 'react';
import style from './Shield.module.css';

const Shield = (props) => {
    return <div className={style.shield}>
        <span style={{color: props.color}}>{props.number}</span>
    </div>;
}
 
export default Shield;